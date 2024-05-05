document.addEventListener('DOMContentLoaded', function() {
    var mensagemDiv = document.getElementById('mensagem');
    var mensagem = 'Olá Mundo';
  
    // Repetição da string 10 vezes
    for (var i = 0; i < 5; i++) {
      mensagemDiv.innerHTML += mensagem + '<br>';
    }
  });