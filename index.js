let add = document.getElementById('add');
let ul = document.getElementById('ul');
let work = document.getElementById('work');
let NewElement;
add.addEventListener('click', () => {
    console.log("clicked")
    if (work.value === '') {
        alert("Please enter valid input");
    }
    else {
        NewElement = document.createElement('li');
        //input element has .value method to access value of input
        let text = work.value;
        console.log(text);
        NewElement.innerText = text;
        ul.appendChild(NewElement);
        let span = document.createElement('span');
        span.innerHTML='x';
        NewElement.appendChild(span);
        work.value = "";
    }
    saveData()
})
ul.addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.target);
    console.log(e.target.tagName);
    if(e.target.tagName === 'LI'){
        console.log("li clciked")
        e.target.style.textDecoration = "line-through";
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        console.log("span clicked");
        e.target.parentElement.remove();
        saveData()
    }
})
// to save data in local browser

function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}

function showTask(){
    ul.innerHTML=localStorage.getItem("data");
}
showTask();