function mudarCor() {
    const corNova = corAleatoria();
    document.body.style.backgroundColor = corNova;
}

function corAleatoria() {
    const hexadecimais = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
        cor += hexadecimais[Math.floor(Math.random()*16)];
    }
    return cor;
}