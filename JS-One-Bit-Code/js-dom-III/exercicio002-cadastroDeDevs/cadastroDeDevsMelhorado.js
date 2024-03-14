function createLabel (text, htmlFor) {
    const newLabel = window.document.createElement('label')
    newLabel.innerText = text
    newLabel.htmlFor = htmlFor
    return newLabel
}

function createInput (name, id, value, type='text', placeholder = '') {
    const newInput = window.document.createElement('input')
    newInput.type = type
    newInput.name = name
    newInput.id = id
    newInput.value = value
    newInput.placeholder = placeholder
    return newInput
}


const buttonAddTech = window.document.getElementById('buttonaddnewtec')
let inputRows = 0


buttonAddTech.addEventListener('click', function (ev) {

    const unordererList = window.document.getElementById('teclist') 
    const indexRow = inputRows
    inputRows++
    
    const newRow = window.document.createElement('li')
    newRow.id = 'inputRow ' + indexRow
    newRow.className = 'inputRow'

    const tecNameLabel = createLabel('Nome:', 'tecName ' + indexRow)
    const tecNameInput = createInput('tecName', 'tecName ' + indexRow, null, 'text')

    const tecExpLabel = createLabel('Experiência:', 'tecRow ' + indexRow)

    const tecExpLabel1 = createLabel('0-2 anos', 'tecInput ' + indexRow)
    const tecExpInput1 = createInput('tecInput' + indexRow, 'tecInput ' + indexRow, '0-2 anos', 'radio')

    const tecExpLabel2 = createLabel('3-4 anos', 'tecInput ' + indexRow)
    const tecExpInput2 = createInput('tecInput' + indexRow, 'tecInput ' + indexRow, '3-4 anos', 'radio')

    const tecExpLabel3 = createLabel('5+ anos', 'tecInput ' + indexRow)
    const tecExpInput3 = createInput('tecInput' + indexRow, 'tecInput ' + indexRow, '5+ anos', 'radio')

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover Tecnologia'

    removeRowBtn.addEventListener('click', function () {
        unordererList.removeChild(newRow)
    })
    
    newRow.append(tecNameLabel, tecNameInput, tecExpLabel, tecExpInput1, tecExpLabel1, tecExpInput2, tecExpLabel2, tecExpInput3, tecExpLabel3, removeRowBtn)
    unordererList.appendChild(newRow)
})


const form = document.getElementById('devform')


const developers = []

form.addEventListener('submit', function(ev) {
    ev.preventDefault()

    const fullName = window.document.getElementById('devname')
    const inputRows = window.document.querySelectorAll('.inputRow')

    let technologies = []

    inputRows.forEach(function(row) {

        const techName = row.querySelector('input[name="tecName"]').value
        const techExp = row.querySelector('input[type="radio"]:checked').value

        technologies.push({ NameTecnology: techName, experiencia: techExp})
    })

    const newDev = { name:fullName.value, tecs:technologies}
    developers.push(newDev)
    alert('Dev cadastrado com sucesso')

    fullName.value = ''
    inputRows.forEach(function(row){
        row.remove()
    })

    console.log(developers)
})






