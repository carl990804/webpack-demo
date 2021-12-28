import x from './x.js'
const div=document.getElementById("app")
div.innerHTML=`
    <img src='https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png'`

    const button=document.createElement('button')
    button.innerText='懒加载'
    button.onclick=()=>{
        const promise=import('./lazy')
        promise.then((module)=>{
            module.default()
        })
    }
    div.appendChild(button)