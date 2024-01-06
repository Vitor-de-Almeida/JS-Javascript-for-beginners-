function addInput() {
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    //newLi.innerText = 'Novo input: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    const newLabel = document.createElement('label')
    newLabel.id = 'label-name'
    newLabel.innerText = 'Novo input: '

    ul.appendChild(newLi)
    newLi.appendChild(newLabel)
    newLi.appendChild(newInput)
   

}