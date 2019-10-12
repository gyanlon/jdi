const STORAGE_KEY='questions'

{/* <InputQ id="q1" score=5 content="{} X {} = ()" variables="3,5" answers="15" @change="change" :submit='submit'/>
<InputQ id="q2" score=20 content="{} X {} 表示 () 的 () 倍， 又表示()个() 。" variables="8,9" answers="8,9,9,8" @change="change" :submit='submit'/> */}

/**
 * {} 表示题目的可变参数
 * () 表示需要填写的答案
 */ 

const init_questions=[{
    id: "q1",
    score: 5,
    pattern: "{} X {} = ()",
    variables: "3,5",
    answers: "15"
},{ 
    id: "q2",
    score: 20,
    pattern: "{} X {} 表示 () 的 () 倍， 又表示()个() 。",
    variables: "8,9",
    answers: "8,9,9,8"
}];

window.localStorage.setItem(STORAGE_KEY,JSON.stringify(init_questions));

export default{
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]')
    },
    save(items){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
    }
}