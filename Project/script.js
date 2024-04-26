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

    //Estou verificando se existe alguma coisa que foi inserida no sessionStorage referente a telefones
    if(sessionStorage.getItem("telefones")){
        //Estou recebendo todo o conteúdo que existe na minha sessionStorage referente a telefones
        var telefoneList = JSON.parse(sessionStorage.getItem("telefones"));
        telefoneList.push(cadTelefone);
        sessionStorage.setItem("telefones", JSON.stringify(telefoneList));
    }else{
        //Como não existe nenhum elemento, crio um novo
        var novaLista = [cadTelefone]
        //Envia os dados para o seesionStorage
        sessionStorage.setItem("telefones", JSON.stringify(novaLista));
    }

    //Limpa o formulário
    document.getElementById("cadastroForm").requestFullscreen();
});