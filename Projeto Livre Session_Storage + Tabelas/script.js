document.getElementById('cadastroForm').addEventListener("submit", function(event){
    
    event.preventDefault();
 
    var produto = document.getElementById("produto").value;
    var qtdEstoque = document.getElementById("qtdEstoque").value;
    var preco = document.getElementById("preco").value;
    var tipo = document.getElementById("tipo").value;

    var cadProdutos = {
        produto : produto,
        qtdEstoque : qtdEstoque,
        preco : preco,
        tipo : tipo
    };

    console.log(cadProdutos);

    if (typeof(Storage) !== "undefined") {
        if(sessionStorage.getItem("produtos")){
            var produtosList = JSON.parse(sessionStorage.getItem("produtos"));
            produtosList.push(cadProdutos);
            sessionStorage.setItem("produtos", JSON.stringify(produtosList));
        }else{
            var novaLista = [cadProdutos];
            sessionStorage.setItem("produtos", JSON.stringify(novaLista));
        }

        document.getElementById("cadastroForm").reset();

        alert("Produto cadastrado com sucesso!");

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
        
        if (sessionStorage.key(i) == "produtos"){

            var key = sessionStorage.key(i);
            var value = JSON.parse(sessionStorage.getItem(key));

            for(var j = 0; j <= value.length; j++){
                
                var objeto = value[j];

                console.log(objeto);

                 // Criar um linha
                 var newRow = document.createElement("tr");
                 // criar tres celulas
                 var produtoCell = document.createElement("td");
                 var qtdEstoqueCell = document.createElement("td");
                 var precoCell = document.createElement("td");
                 var tipoCell = document.createElement("td");
                
                 produtoCell.textContent = objeto.produto;
                 qtdEstoqueCell.textContent = objeto.qtdEstoque;
                 precoCell.textContent = objeto.preco;
                 tipoCell.textContent = objeto.tipo;
         
                 // Add dados na linha
                 newRow.appendChild(produtoCell);
                 newRow.appendChild(qtdEstoqueCell);
                 newRow.appendChild(precoCell);
                 newRow.appendChild(tipoCell);
         
                 // ADD linha na tabela
                 tableBody.appendChild(newRow);

            } 
        }
    }
});