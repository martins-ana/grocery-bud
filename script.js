var btn = document.querySelector('.btn');
var input = document.querySelector('.input');
var list = document.querySelector('.list');
var clearBtn = document.querySelector('.clear__items');


var index = 0

function buttonClick (e) {
    e.preventDefault();
    if (input.value === '') {
        alert('Please select a value');
        return
    }

    var newItem = document.createElement('li');
    newItem.innerHTML = `
    <li id='${index}' class='list__icon'>${input.value}
        <div class='icons'>
            <span onclick="check(${index})" class='material-symbols-outlined edit'>
                edit_square
            </span>
            <span onclick="del(${index})" class='material-symbols-outlined delete'>
                delete
            </span>
        </div>
    </li >`;
    list.appendChild(newItem)
    input.value = '';
    index++;
}

btn.onclick = buttonClick

// =============================================== 

function clear__items() {
    list.innerHTML = ''
}

clearBtn.onclick = clear__items

// ===============================================

function check(index) {
    var checked = document.getElementById(index);
    checked.classList.toggle('checked')
}

// =================================================
function del(index) {
    var deletar = document.getElementById(index);
    list.removeChild(deletar.parentNode);
}




