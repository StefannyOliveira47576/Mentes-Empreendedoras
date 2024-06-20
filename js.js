
    // Obter elementos
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModalBtn");
    var span = document.getElementsByClassName("close")[0];
    
    // Quando o usuário clicar no botão, abrir o modal e carregar o conteúdo da Página 2
    btn.onclick = function() {
        modal.style.display = "block";
        fetch('adm.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('modal-body').innerHTML = data;
            })
            .catch(error => console.error('Error loading page2:', error));
    }
    
    // Quando o usuário clicar no X, fechar o modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // Quando o usuário clicar fora do modal, fechar o modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
  