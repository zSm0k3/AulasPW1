document.getElementById('cadastroForm').addEventListener("submit", function(event){
    
    event.preventDefault();
 
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var telefone = document.getElementById("telefone").value;
    var cidade = document.getElementById("cidade").value;
    var cpf = document.getElementById("cpf").value;

    var cadClientes = {
        id : id,
        name : name,
        telefone : telefone,
        cpf : cpf,
        cidade : cidade
    };

    console.log(cadClientes);

    if (typeof(Storage) !== "undefined") {
        if(sessionStorage.getItem("clientes")){
            var clientesList = JSON.parse(sessionStorage.getItem("clientes"));
            clientesList.push(cadClientes);
            sessionStorage.setItem("clientes", JSON.stringify(clientesList));
        }else{
            var novaLista = [cadClientes];
            sessionStorage.setItem("clientes", JSON.stringify(novaLista));
        }

        document.getElementById("cadastroForm").reset();

        alert("Cliente cadastrado com sucesso!");

        location.reload();
    } else {
        // Se o navegador não suportar sessionStorage, exibe uma mensagem de erro
        alert("Seu navegador não suporta a sessionStorage. Não é possível salvar os dados.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // capturar referencia do conteudo da tabela 
    var tableBody = document.querySelector("#dataTable tbody");

    //Limpar tabela
    tableBody.innerHTML = "";

    for (var i = 0; i < sessionStorage.length; i++) {
        
        if (sessionStorage.key(i) == "clientes"){

            var key = sessionStorage.key(i);
            var value = JSON.parse(sessionStorage.getItem(key));

            for(var j = 0; j <= value.length; j++){
                
                var objeto = value[j];

                console.log(objeto);

                 // Criar um linha
                 var newRow = document.createElement("tr");
                 // criar tres celulas
                 var idCell = document.createElement("td");
                 var nameCell = document.createElement("td");
                 var telefoneCell = document.createElement("td");
                 var cpfCell = document.createElement("td");
                 var cidadeCell = document.createElement("td");
                
                 idCell.textContent = objeto.id;
                 nameCell.textContent = objeto.name;
                 telefoneCell.textContent = objeto.telefone;
                 cpfCell.textContent = objeto.cpf;
                 cidadeCell.textContent = objeto.cidade;
         
                 // Add dados na linha
                 newRow.appendChild(idCell);
                 newRow.appendChild(nameCell);
                 newRow.appendChild(telefoneCell);
                 newRow.appendChild(cpfCell);
                 newRow.appendChild(cidadeCell);
         
                 // ADD linha na tabela
                 tableBody.appendChild(newRow);

            } 
        }
    }
});