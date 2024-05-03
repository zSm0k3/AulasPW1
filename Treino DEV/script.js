var botao = document.getElementById("botao");
var botao2 = document.getElementById("botao2");

var minhaFuncao = function botao(){
    alert("Eita, você clicou mesmo né");
    window.location.href = URL("https://music.youtube.com/watch?v=7BjtTtS8xCs&list=LM"); 
};

var minhaFuncao2 = function botao2(){
    alert("Falei para não clickar!");
    window.location.href = URL("https://music.youtube.com/watch?v=7BjtTtS8xCs&list=LM"); 
};

botao.addEventListener("click", minhaFuncao);
botao2.addEventListener("click", minhaFuncao2);