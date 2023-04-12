const itens = []

const BotaoConfirmar = document.getElementById('Confirmar')
const BotaoSorteio = document.getElementById('Sortear')
const ItensLista = document.getElementById('Get-Itens')
const VerResultado = document.getElementById('Resultado')

BotaoConfirmar.addEventListener('click',()=>{ 
    const ItemInput = document.getElementById('Itens-Input')
    const Item = ItemInput.value.trim()
    if (Item !== ''){
        itens.push(Item)
        const Li = document.createElement('li')
        Li.textContent = Item
        ItensLista.appendChild(Li)
        ItemInput.value = ''
    } 
})
BotaoSorteio.addEventListener('click',()=>{
    if (itens.length === 0){
        VerResultado.textContent = 'Lista Vazia' 
    }else{
        const IndiceSorteado = Math.floor(Math.random()*itens.length)
        VerResultado.textContent = `O item sorteado foi: ${itens[IndiceSorteado]}`
    }
})
