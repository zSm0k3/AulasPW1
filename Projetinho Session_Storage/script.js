document.getElementById('cadastroForm').addEventListener("submit", function(event){
    
    event.preventDefault();
 
    var user = document.getElementById("user").value;
    var name = document.getElementById("name").value;
    var telefone = document.getElementById("telefone").value;
    var endereco = document.getElementById("endereco").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;

    var cadClientes = {
        user : user,
        name : name,
        telefone : telefone,
        endereco : endereco,
        cidade : cidade,
        estado : estado
    };

    console.log(cadClientes);

    if(sessionStorage.getItem("clientes")){
        var clientesList = JSON.parse(sessionStorage.getItem("clientes"));
        clientesList.push(cadClientes);
        sessionStorage.setItem("clientes", JSON.stringify(clientesList));
    }else{
        var novaLista = [cadClientes];
        sessionStorage.setItem("clientes", JSON.stringify(novaLista));
    }

    document.getElementById("cadastroForm").reset();
});