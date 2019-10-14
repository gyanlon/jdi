const STORAGE_KEY='questions';

{/* <InputQ id="q1" score=5 content="{} X {} = ()" variables="3,5" answers="15" @change="change" :submit='submit'/>
<InputQ id="q2" score=20 content="{} X {} 表示 () 的 () 倍， 又表示()个() 。" variables="8,9" answers="8,9,9,8" @change="change" :submit='submit'/> */}

/**
 * {} 表示题目的可变参数
 * () 表示需要填写的答案
 */ 

const init_questions=[{
    id: "q1",
    score: 5,
    pattern: "{} &times; {} = ()",
    variables: "3,5",
    answers: "15",
    variable_range: ["1-9", "1-9"],
    answer_alg: [ "$[1]*$[2]" ]
},{ 
    id: "q2",
    score: 20,
    pattern: "{} &times; {} 表示 () 的 () 倍， 又表示()个() 。",
    variables: "8,9",
    answers: "8,9,9,8",
    variable_range: ["1-9", "1-9"],
    answer_alg: [ "$[1]", "$[2]", "$[2]", "$[1]" ]
}];

function init() {
    console.log("init");
    for(var i=0; i<init_questions.length; i++) {
        var q = init_questions[i];
        // populate variables according to var constrains
        var v = "";
        console.log(q.variable_range);
        for ( var n=0; n<q.variable_range.length; n++) {
            v += getRandomValueInConstrain( q.variable_range[n] ) + ",";
        }
        q.variables = v.substr(0, v.length -1);
        console.log(q.variables);

        // populate answers accoring to alg
        q.answers = getAnswerByAlg(q.variables, q.answer_alg);       
    }
}

function getAnswerByAlg(vars, algs) {
    var result = "";

    var answersArr = getArgs(vars, algs);
    for(var i=0; i<answersArr.length; i++) {
        result += answersArr[i] + ","
    }
    result = result.substr(0, result.length -1);

    console.log("answers:", result);
    return result;
}

function getArgs(vars, algs) {
    var result = [];

    for (var i=0; i<algs.length; i++) {

        // 这是一段神秘的代码， 调整数据的下标, 因为用户习惯时下标从1开始
        var adjustArr = [];
        var varArr = vars.split(",");
        for(var n=0; n<varArr.length; n++) {
            adjustArr[n+1] = varArr[n];
        }

        // 这是一段神秘的代码， eval 传参
        var exp = algs[i].replace(/\$/g, "adjustArr");
        console.log("exp=", exp, "adjustArr", adjustArr);
        result[i] = window.eval.call(window,'(function (adjustArr) { return '+ exp +'; })')(adjustArr);
    }

    console.log("args:", result);
    return result;
}

function getRandomValueInConstrain( ex ) {
    console.log("ex=", ex);
    var random = ex;
    
    if(ex.indexOf("-") > 0) {
        random = randomFrom(parseInt(ex.split("-")[0]), parseInt(ex.split("-")[1]));
    }

    console.log("random:", random);
    return random;
}

function randomFrom(lowerValue,upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}

init();
window.localStorage.setItem(STORAGE_KEY,JSON.stringify(init_questions));

export default{
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]')
    },
    save(items){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
    }
}