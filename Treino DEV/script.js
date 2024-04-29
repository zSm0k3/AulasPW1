var botao = document.getElementById("botao");
var minhaFuncao = function botao(){
    alert("Eita, você clicou mesmo né");
    window.location.href = URL("https://music.youtube.com/watch?v=7BjtTtS8xCs&list=LM"); 
};

botao.addEventListener("click", minhaFuncao);