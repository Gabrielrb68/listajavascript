const botao = document.querySelector('#botao');

    function mudaPosicao() {
      const telaLargura = window.innerWidth;
      
      const telaAltura = window.innerHeight;
      
      const x = Math.floor(Math.random() * (telaLargura - botao.offsetWidth));
      
      const y = Math.floor(Math.random() * (telaAltura - botao.offsetHeight));
      
      botao.style.left = x + 'px';
      
      botao.style.top = y + 'px';
    }

    botao.addEventListener('mouseover', mudaPosicao);