document.getElementById('cadastroForm').addEventListener("submit", function(event){
    
    event.preventDefault();
 
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    var confirm_senha = document.getElementById("confirm_senha").value;

    var Usuarios = {
        usuario : usuario,
        senha : senha,
        confirm_senha : confirm_senha
    };

    console.log(Usuarios);

    if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem("usuarios")){
            var usuarioList = JSON.parse(localStorage.getItem("usuarios"));
            usuarioList.push(Usuarios);
            localStorage.setItem("usuarios", JSON.stringify(usuarioList));
        }else{
            var novaLista = [Usuarios];
            localStorage.setItem("usuarios", JSON.stringify(novaLista));
        }

        document.getElementById("cadastroForm").reset();

        alert("Cadastro realizado com sucesso!");

        location.reload();
    } else {
        // Se o navegador não suportar LocalStorage, exibe uma mensagem de erro
        alert("Seu navegador não suporta a LocalStorage. Não é possível salvar os dados.");
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // capturar referencia do conteudo da tabela 
    var tableBody = document.querySelector("#dataTable tbody");

    //Limpar tabela
    tableBody.innerHTML = "";

    for (var i = 0; i < localStorage.length; i++) {
        
        if (localStorage.key(i) == "usuarios"){

            var key = localStorage.key(i);
            var value = JSON.parse(localStorage.getItem(key));

            for(var j = 0; j <= value.length; j++){
                
                var objeto = value[j];

                console.log(objeto);

                 // Criar um linha
                 var newRow = document.createElement("ul");
                 // criar tres celulas
                 var idCell = document.createElement("li");
                 var descricaoCell = document.createElement("li");
                 var data_entregaCell = document.createElement("li");
                
                 idCell.textContent = objeto.usuario;
                 descricaoCell.textContent = objeto.senha;
                 data_entregaCell.textContent = objeto.confirm_senha;
         
                 // Add dados na linha
                 newRow.appendChild(idCell);
         
                 // ADD linha na tabela
                 tableBody.appendChild(newRow);

                 console.log(tableBody);
            } 
        }
    }
});