
// Obter elementos
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtnAdm");
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abrir o modal e carregar o conteúdo da Página 2
btn.onclick = function () {
    modal.style.display = "block";
    fetch('Cursos (Modal)/Adm.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modal-body').innerHTML = data;
        })
        .catch(error => console.error('Error loading page2:', error));
}

// Quando o usuário clicar no X, fechar o modal
span.onclick = function () {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fechar o modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//essa função chama o modal do curso RH
let modalRh = document.getElementById("myModal");
let btnRh = document.getElementById("openModalBtnRh");
let spanRh = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abrir o modal e carregar o conteúdo da Página 2
btnRh.onclick = function () {
    modalRh.style.display = "block";
    fetch('Cursos/RH.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modal-body').innerHTML = data;
        })
        .catch(error => console.error('Error loading page2:', error));
}

// Quando o usuário clicar no X, fechar o modal
spanRh.onclick = function () {
    modalRh.style.display = "none";
}

// Quando o usuário clicar fora do modal, fechar o modal
window.onclick = function (event) {
    if (event.target == modalRh) {
        modalRh.style.display = "none";
    }
}


//essa função chama o modal do curso Progrmação e dados
let modalPd = document.getElementById("myModal");
let btnPd = document.getElementById("openModalBtnPd");
let spanPd = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abrir o modal e carregar o conteúdo da Página 2
btnPd.onclick = function () {
    modalPd.style.display = "block";
    fetch('Cursos/RH.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modal-body').innerHTML = data;
        })
        .catch(error => console.error('Error loading page2:', error));
}

// Quando o usuário clicar no X, fechar o modal
spanPd.onclick = function () {
    modalPd.style.display = "none";
}

// Quando o usuário clicar fora do modal, fechar o modal
window.onclick = function (event) {
    if (event.target == modalPd) {
        modalPd.style.display = "none";
    }
}


//essa função chama o modal do curso Designer
let modalDs = document.getElementById("myModal");
let btnDs = document.getElementById("openModalBtnDs");
let spanDs = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abrir o modal e carregar o conteúdo da Página 2
btnDs.onclick = function () {
    modalDs.style.display = "block";
    fetch('Cursos/RH.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modal-body').innerHTML = data;
        })
        .catch(error => console.error('Error loading page2:', error));
}

// Quando o usuário clicar no X, fechar o modal
spanDs.onclick = function () {
    modalDs.style.display = "none";
}

// Quando o usuário clicar fora do modal, fechar o modal
window.onclick = function (event) {
    if (event.target == modalDs) {
        modalDs.style.display = "none";
    }
}

//essa função chama o modal do curso Marketing
let modalMk = document.getElementById("myModal");
let btnMk = document.getElementById("openModalBtnMk");
let spanMk = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abrir o modal e carregar o conteúdo da Página 2
btnMk.onclick = function () {
    modalMk.style.display = "block";
    fetch('Cursos/RH.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modal-body').innerHTML = data;
        })
        .catch(error => console.error('Error loading page2:', error));
}

// Quando o usuário clicar no X, fechar o modal
spanMk.onclick = function () {
    modalMk.style.display = "none";
}

// Quando o usuário clicar fora do modal, fechar o modal
window.onclick = function (event) {
    if (event.target == modalMk) {
        modalMk.style.display = "none";
    }
}


//essa função chama o modal do curso de Moda
let modalMd = document.getElementById("myModal");
let btnMd = document.getElementById("openModalBtnMd");
let spanMd = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abrir o modal e carregar o conteúdo da Página 2
btnMd.onclick = function () {
    modalMd.style.display = "block";
    fetch('Cursos/RH.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modal-body').innerHTML = data;
        })
        .catch(error => console.error('Error loading page2:', error));
}

// Quando o usuário clicar no X, fechar o modal
spanMd.onclick = function () {
    modalMd.style.display = "none";
}

// Quando o usuário clicar fora do modal, fechar o modal
window.onclick = function (event) {
    if (event.target == modalMd) {
        modalMd.style.display = "none";
    }
}