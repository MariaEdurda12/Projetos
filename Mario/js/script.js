const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const pulo = () => {
    console.log('tecla pressionada');
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
}

const loop = setInterval(() => {


    const canoposicao = cano.offsetLeft;
    const marioposicao = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (canoposicao <= 120 && canoposicao > 0 && marioposicao <= 80) {
        clearInterval(loop); // Pare o loop de animação

        // Remova a animação do cano
        cano.style.animationPlayState = 'paused';

        // Ajuste a posição do Mario para corresponder à posição do cano
        mario.style.bottom = `${80}px`; // Define a posição do Mario como 80px do fundo (altura que você definiu)

        
        // Adicione uma classe para manter o Mario na posição correta
        mario.classList.add('parado');

        mario.src = './Imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        // Exibir o botão de reinício
        reiniciarBtn.style.display = 'block';

    }
}, 10);



document.addEventListener('keydown', pulo);
