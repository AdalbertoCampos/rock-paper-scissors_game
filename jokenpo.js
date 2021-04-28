function rock() {
    let img1 = document.getElementById('img1').src='pedra.png'
    let img2 = document.getElementById('img2')
    const resultado = Math.floor(Math.random() * 3 + 1)
    let vencedor = document.getElementById('vencedor')
    if (resultado == 1) {
        img2.src = 'pedra.png'
        vencedor.innerHTML = "It's a tie!"
    } else if (resultado == 2) {
        img2.src = 'papel.png'
        vencedor.innerHTML = 'You lose!'
    } else {
        img2.src = 'tesoura.png'
        vencedor.innerHTML = 'You win!'
    }
}
function paper() {
    let img1 = document.getElementById('img1').src='papel.png'
    let img2 = document.getElementById('img2')
    const resultado = Math.floor(Math.random() * 3 + 1)
    let vencedor = document.getElementById('vencedor')
    if (resultado == 1) {
        img2.src = 'pedra.png'
        vencedor.innerHTML = 'You win!'
    } else if (resultado == 2) {
        img2.src = 'papel.png'
        vencedor.innerHTML = "It's a tie!"
    } else {
        img2.src = 'tesoura.png'
        vencedor.innerHTML = 'You lose!'
    }
}
function scissors() {
    let img1 = document.getElementById('img1').src='tesoura.png'
    let img2 = document.getElementById('img2')
    const resultado = Math.floor(Math.random() * 3 + 1)
    let vencedor = document.getElementById('vencedor')
    if (resultado == 1) {
        img2.src = 'pedra.png'
        vencedor.innerHTML = 'You lose!'
    } else if (resultado == 2) {
        img2.src = 'papel.png'
        vencedor.innerHTML = 'You win!'
    } else {
        img2.src = 'tesoura.png'
        vencedor.innerHTML = "It's a tie!"
    }
}