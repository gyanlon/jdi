// import { EEXIST } from "constants";
const STORAGE_KEY = 'questions';
const STORAGE_BACKUP = 'backups';
const STORAGE_UDQ = 'UDQ';

{/* <InputQ id="q1" score=5 content="{} X {} = ()" variables="3,5" answers="15" @change="change" :submit='submit'/>
<InputQ id="q2" score=20 content="{} X {} 表示 () 的 () 倍， 又表示()个() 。" variables="8,9" answers="8,9,9,8" @change="change" :submit='submit'/> */}

/**
 * {} 表示题目的可变参数, 对应variables
 * () 表示需要填写的答案, 对应answers
 */

const init_questions = [{
    id: "q1",
    score: 5,
    pattern: "{} &times; {} = ()",
    variables: "3,5",
    answers: "15",
    variable_range: ["1-9", "1-9"],
    answer_alg: ["$[1]*$[2]"]
}, {
    id: "q2",
    score: 20,
    pattern: "{} &times; {} 表示 () 的 () <b>倍</b>， 又表示() 个 () 。",
    variables: "8,9",
    answers: "8,9,9,8",
    variable_range: ["1-9", "1-9"],
    answer_alg: ["$[1]", "$[2]", "$[2]", "$[1]"]
}];

function getAnswerByAlg(vars, algs) {
    var result = "";

    var answersArr = getAnswers(vars, algs);
    for (var i = 0; i < answersArr.length; i++) {
        result += answersArr[i] + ","
    }
    result = result.substr(0, result.length - 1);

    console.log("answers:", result);
    return result;
}

function getAnswers(vars, algs) {
    var result = [];

    for (var i = 0; i < algs.length; i++) {

        // 这是一段神秘的代码， 调整数据的下标, 因为用户习惯时下标从1开始
        var adjustArr = [];
        var varArr = vars.split(",");
        for (var n = 0; n < varArr.length; n++) {
            adjustArr[n + 1] = varArr[n];

            // if var is number, parse string to number
            // Note: it's a piece of dangerouse code, should use [] type for variables definition, not a string.
            var reg = /^\d+$/;
            if(reg.test(adjustArr[n + 1])) {
                adjustArr[n + 1] = parseInt(adjustArr[n + 1]);
            }
        }

        // 这是一段神秘的代码， eval 传参
        var exp = algs[i].replace(/\$/g, "adjustArr");
        console.log("exp=", exp, "adjustArr", adjustArr);
        result[i] = window.eval.call(window, '(function (adjustArr) { return ' + exp + '; })')(adjustArr);
    }

    console.log("args:", result);
    return result;
}

var vMap = {};
function getRandomValueInConstrain(ex) {
    console.log("ex=", ex);
    var random = ex;

    if (ex.indexOf("-") > 0) {
        random = randomFrom(parseInt(ex.split("-")[0]), parseInt(ex.split("-")[1]));
    } else if(isVarible(ex)) {
        random = vMap[ex];
    }

    console.log("random:", random);
    return random;
}

function isVarible(str) {
    var varReg = /^\$\[\d+\]$/;
    return varReg.test(str);
}

function randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}
export default {
    init() {
        console.log("init");
        var qs = init_questions.concat(this.fetchActiveUDQ());
        qs = this.initQuestions(qs);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(qs));
    },
    initQuestions(qs) {
        for (var i = 0; i < qs.length; i++) {
            this.initQuestion(qs[i]);
        }

        return qs;
    },
    initQuestion(q) {
        vMap = {};
        // populate variables according to var constrains
        var v = "";
        console.log(q.variable_range);
        for (var n = 0; n < q.variable_range.length; n++) {
            var vn = getRandomValueInConstrain(q.variable_range[n])
            vMap["$[" + (n+1) + "]"] = vn; // to cache previous variables
            // alert(JSON.stringify(vMap))
            v += vn + ",";
        }
        q.variables = v.substr(0, v.length - 1);
        console.log("variables", q.variables);

        // populate answers accoring to alg
        q.answers = getAnswerByAlg(q.variables, q.answer_alg);
        return q;
    },
    fetch() {
        this.init();
        var qs = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
        qs = this.rearrageIds(qs.concat(this.fetchBackup()))
        return qs;
    },
    rearrageIds(qlist) {
        for (var i = 0; i < qlist.length; i++) {
            var q = qlist[i];
            q.id = "q" + (i + 1);
        }

        return qlist;
    },
    save(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    },
    saveBackups(items) {
        window.localStorage.setItem(STORAGE_BACKUP, JSON.stringify(items))
    },
    saveUDQ(items) {
        window.localStorage.setItem(STORAGE_UDQ, JSON.stringify(items))
    },    
    appendBackup(item) {
        var backups = this.fetchBackup();
        if (this.indexOf(backups, item) < 0) {
            backups.push(item);
            this.saveBackups(backups);
        }
    },    
    appendUDQ(item) {
        var items = this.fetchUDQ();
        if (this.indexOfUDQ(items, item) < 0) {
            items.push(item);
            this.saveUDQ(items);
        }
    },
    removeBackup(item) {
        var backups = this.fetchBackup();
        var index = this.indexOf(backups, item);
        while (index >= 0) {
            backups.splice(index, 1);
            index = this.indexOf(backups, item);
        }

        this.saveBackups(backups);
    },
    removeUDQ(item) {
        var udqs = this.fetchUDQ();
        var index = this.indexOfUDQ(udqs, item);
        while (index >= 0) {
            udqs.splice(index, 1);
            index = this.indexOfUDQ(udqs, item);
        }

        this.saveUDQ(udqs);
    },
    activateUDQ(item) {
        console.log("activate:", JSON.stringify(item))
        var udqs = this.fetchUDQ();
        var index = this.indexOfUDQ(udqs, item);
        this.initQuestion( udqs[index] );
        if( confirm(JSON.stringify(udqs[index]))) {
            udqs[index].active = true;
            this.saveUDQ(udqs);
        }
    },
    inactivateUDQ(item) {
        var udqs = this.fetchUDQ();
        var index = this.indexOfUDQ(udqs, item);
        udqs[index].active = false;
        this.saveUDQ(udqs);
    },
    fetchBackup() {
        return JSON.parse(window.localStorage.getItem(STORAGE_BACKUP) || '[]')
    },
    fetchUDQ() {
        return JSON.parse(window.localStorage.getItem(STORAGE_UDQ) || '[]')
    },
    fetchActiveUDQ() {
        var udqs = this.fetchUDQ();
        var list = [];
        for (var i = 0; i < udqs.length; i++) {
            if(udqs[i].active) {
                list.push(udqs[i]);
            }
        }

        return list;
    },
    indexOf(qlist, question) {
        for (var i = 0; i < qlist.length; i++) {
            var q = qlist[i];
            if (q.pattern === question.pattern && (q.variables === question.variables || (!q.variables && !question.variables)  )) {
                return i;
            }
        }

        return -1;
    },
    indexOfUDQ(qlist, question) {
        for (var i = 0; i < qlist.length; i++) {
            var q = qlist[i];
            if (q.pattern === question.pattern) {
                return i;
            }
        }

        return -1;
    }    
}