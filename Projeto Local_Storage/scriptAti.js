document.getElementById('cadastroForm').addEventListener("submit", function(event){
    
    event.preventDefault();
 
    var id = document.getElementById("id").value;
    var descricao = document.getElementById("descricao").value;
    var data_entrega = document.getElementById("data_entrega").value;

    var Atividades = {
        id : id,
        descricao : descricao,
        data_entrega : data_entrega
    };

    console.log(Atividades);

    if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem("atividades")){
            var atividadesList = JSON.parse(localStorage.getItem("atividades"));
            atividadesList.push(Atividades);
            localStorage.setItem("atividades", JSON.stringify(atividadesList));
        }else{
            var novaLista = [Atividades];
            localStorage.setItem("atividades", JSON.stringify(novaLista));
        }

        document.getElementById("cadastroForm").reset();

        alert("Atividade cadastrada com sucesso!");

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
        
        if (localStorage.key(i) == "atividades"){

            var key = localStorage.key(i);
            var value = JSON.parse(localStorage.getItem(key));

            for(var j = 0; j <= value.length; j++){
                
                var objeto = value[j];

                console.log(objeto);

                 // Criar um linha
                 var newRow = document.createElement("tr");
                 // criar tres celulas
                 var idCell = document.createElement("td");
                 var descricaoCell = document.createElement("td");
                 var data_entregaCell = document.createElement("td");
                
                 idCell.textContent = objeto.id;
                 descricaoCell.textContent = objeto.descricao;
                 data_entregaCell.textContent = objeto.data_entrega;
         
                 // Add dados na linha
                 newRow.appendChild(idCell);
                 newRow.appendChild(descricaoCell);
                 newRow.appendChild(data_entregaCell);
         
                 // ADD linha na tabela
                 tableBody.appendChild(newRow);
            } 
        }
    }
});