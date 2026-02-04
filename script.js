
function enviarWhats(event){
            event.preventDefault()

        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('mensagem').value;
        const telefone = '5521987839017'

        const texto = `Olá! Me chamo ${nome}, ${mensagem}`
        const msFormatada = encodeURIComponent(texto)

        const url = `https://wa.me/${telefone}?text=${msFormatada}`

        console.log(url)

        window.open(url, '_blank')

        }
