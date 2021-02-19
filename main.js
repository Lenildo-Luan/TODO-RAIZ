// Criando dinamicamente o botão de fechar
function addCloseBtn(myNode){
    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);

    myNode.appendChild(span);
}

let myNodeList = document.getElementsByTagName('LI');
for (let index = 0; index < myNodeList.length; index++) {
    addCloseBtn(myNodeList[index]);
}

//Apagar elemento da lista ao clicar em fechar
function closeBtn(close){
    close.onclick = function() {
        let li = close.parentElement;
        li.style.display = 'none';
    }
}

let cloreBtns = document.getElementsByClassName('close');
for (let index = 0; index < cloreBtns.length; index++) {
    closeBtn(cloreBtns[index]);
}

// Adicionar checar ao todolist
let todoListElements = document.querySelector('ul');
todoListElements.addEventListener('click', function(listNode){
    if(listNode.target.tagName === 'LI'){
        listNode.target.classList.toggle('checked');
    }
}, false);

// Adicionar atividade a lista
function newElement(){
    let li = document.createElement('li');
    let inputValue = document.getElementById('mainInput').value;
    let txt = document.createTextNode(inputValue);

    if(inputValue === ''){
        alert("Você tem que escrever algo!");
    } else {
        document.getElementById('myTodoList').appendChild(li);
        document.getElementById('mainInput').value = '';
    }

    li.appendChild(txt);

    addCloseBtn(li);
    closeBtn(cloreBtns[cloreBtns.length-1]);
}