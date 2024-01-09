function criarNovaTec (){
    //const elementoDaSecao = elemento.currentTarget.parentNode

    const ulListaDeTec = window.document.getElementById('listaDeTec')
    
    const novoElementoLi = window.document.createElement('li')

    const novoElementoLabel = window.document.createElement('label')

    novoElementoLabel.innerText = 'Nome:'
    novoElementoLabel.setAttribute('for', 'cadastroTec')
    
    const novoElementoInput = window.document.createElement('input')

    novoElementoInput.type = 'text'
    novoElementoInput.name = 'cadastroTec'
    novoElementoInput.id = 'cadastroTec'

    const novoElementoLabelMain = window.document.createElement('label')
    novoElementoLabelMain.innerText = 'Experiência: '
    novoElementoLabelMain.setAttribute('for', 'main')

    const novoElementoInputRadio1 = window.document.createElement('input')
    novoElementoInputRadio1.type = 'radio'
    novoElementoInputRadio1.name = 'main'
    novoElementoInputRadio1.id = 'main1'
    novoElementoInputRadio1.value = '0-2 anos'
    const novoElementoLabelRadio1 = window.document.createElement('label');
    novoElementoLabelRadio1.setAttribute('for', 'main1');
    novoElementoLabelRadio1.innerText = '0-2 anos';

    const novoElementoInputRadio2 = window.document.createElement('input')
    novoElementoInputRadio2.type = 'radio'
    novoElementoInputRadio2.name = 'main'
    novoElementoInputRadio2.id = 'main2'
    novoElementoInputRadio2.value = '3-4 anos'
    const novoElementoLabelRadio2 = window.document.createElement('label');
    novoElementoLabelRadio2.setAttribute('for', 'main2');
    novoElementoLabelRadio2.innerText = '3-4 anos';

    const novoElementoInputRadio3 = window.document.createElement('input')
    novoElementoInputRadio3.type = 'radio'
    novoElementoInputRadio3.name = 'main'
    novoElementoInputRadio3.id = 'main3'
    novoElementoInputRadio3.value = '5+ anos'
    const novoElementoLabelRadio3 = window.document.createElement('label');
    novoElementoLabelRadio3.setAttribute('for', 'main3');
    novoElementoLabelRadio3.innerText = '5+ anos';

    ulListaDeTec.appendChild(novoElementoLi)
    novoElementoLi.appendChild(novoElementoLabel)
    novoElementoLi.appendChild(novoElementoInput)
    novoElementoLi.appendChild(novoElementoLabelMain)
    novoElementoLi.appendChild(novoElementoInputRadio1)
    novoElementoLi.appendChild(novoElementoLabelRadio1)
    novoElementoLi.appendChild(novoElementoInputRadio2)
    novoElementoLi.appendChild(novoElementoLabelRadio2)
    novoElementoLi.appendChild(novoElementoInputRadio3)
    novoElementoLi.appendChild(novoElementoLabelRadio3)

    const buttonRemover = document.createElement('button')
    buttonRemover.innerText = 'Remover'

    novoElementoLi.appendChild(buttonRemover)

    buttonRemover.addEventListener('click', function() {
        novoElementoLi.remove()
    })

    const buttonCadastrar = window.document.getElementById('cadastrar')
    buttonCadastrar.addEventListener('click', function() {
        
        const nomeUsuario = window.document.querySelectorAll('input#nomeDev').value
        const tecnologias = window.document.querySelectorAll('input[name="cadastroTec"]')
        const tecnolgiasSelecionadas = []
        tecnologias.forEach(function (tecnologia) {
            tecnolgiasSelecionadas.push(tecnologia.value)
        })
        const experiencia = window.document.querySelector('input[name="main"]:checked').value

        dadosUsuario = {
            nomeUsuario,
            tecnologias: tecnolgiasSelecionadas,
            experiencia

        }

        console.log(dadosUsuario)
    })

}

const button = window.document.getElementById('novaTecnologia')

button.addEventListener('click', criarNovaTec)


