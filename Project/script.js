document.getElementById('cadastroForm').addEventListener("cadastrar", function (event){

    event.preventDefault(); //Impede o envio do formulário

    //Recebe os dados da página HTML 
    var id = document.getElementById("id").value;
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    //Como cria um objeto no javascript
    var cadTelefone = {
        id : id,
        nome : nome,
        telefone : telefone
    };

    console.log(cadTelefone);

    //Estou verificando se existe alguma coisa que foi inserida no sessionstorage referente a telefones
    if(sessionStorage.getItem("telefones")){
        //Estou recebendo todo o conteúdo que existe na minha sessionstorage referente a telefones
        var telefoneList = JSON.parse(sessionStorage.getItem("telefones"));
        telefoneList.push(cadTelefone);
        sessionStorage.setItem("telefones", JSON.stringify(telefoneList));
    }
});