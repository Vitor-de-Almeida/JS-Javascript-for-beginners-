function addContact() {
    const contactSection = window.document.getElementById('contacts-list')

    const h3 = window.document.createElement('h3')
    h3.innerText = "Contato"

    const ul = window.document.createElement('ul')

    const nameLi = window.document.createElement('li')
    nameLi.innerText = "Nome: "

    const nameInput = window.document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'

    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))


    const phoneLi = window.document.createElement('li')
    phoneLi.innerText = "Telefone: "

    const phoneInput = window.document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'

    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    contactSection.append(h3, ul)

    const addressLi = window.document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label>'

    const addressInput = window.document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'

    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))
}

function removeContact() {
    const contactSection = window.document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length -1])

    contactSection.removeChild(contacts[contacts.length -1])

}