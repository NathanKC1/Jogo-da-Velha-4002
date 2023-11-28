let jogador = 'x'
let tabela = ["", "", "",
    "", "", "",
    "", "", ""]

function marcar(posicao) {
    if (tabela[posicao] != "") {
        return
    }
    tabela[posicao] = jogador
    console.log(tabela[posicao])
    if (jogador == "x") {
        jogador = "o"
    }
    else {
        jogador = "x"
    }
    render()

}
function render() {
    let tds = document.querySelectorAll("td") 
    let index = 0
    while (index < 9){
        tds[index].innerHTML = tabela [index]
    index++

    }



} 
