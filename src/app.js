// Pre-defined constants
    const renderContacts = () => {
        const storage = window.localStorage
        const contacts = JSON.parse(storage.getItem('contacts'))
        let div = document.querySelector('.contact-list')

        if (contacts) {
            div.innerHTML = ''
            const ul = document.createElement('ul')
            contacts.forEach(contact => {
                let li = document.createElement('li')
                li.innerHTML = `
                    <div class="card" style="background-color:lightgrey">
                        <div class="image">
                            <img src="https://ca-address-book.herokuapp.com/images/pine.jpg" height=20% width=20% />
                        </div>
                        <div class="content">
                            <h1>${ contact.name }</h1>
                            <h2>${ contact.company }</h2>
                            <p>${ contact.notes }</p>
                            ${ contact.email } |
                            <a href="https://www.twitter.com/${ contact.twitter }">@${contact.twitter}</a>
                            <button class="edit-contact" id="${contact.name}-edit">Edit contact</button>
                            <button class="delete-contact" id="${contact.name}-delete">Delete contact</button>
                        </div>
                    </div>
                `
                ul.appendChild(li)
            })
            div.appendChild(ul)
        } else {
            div.innerHTML ='<p>You have no contacts in your address book</p>'
        }
    }

const showForm = () => {
    let form = document.getElementById("div-input-form")
    if(form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

const hideForm = () => {
    let form = document.getElementById("div-input-form")
    form.style.display = "none";
}

//Code to execute after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderContacts()
    hideForm()
    
    //When clicking button, showing contact input_form
    const addContactButton = document.getElementById("add-contact")
    addContactButton.addEventListener('click', event => {
        event.preventDefault()
        showForm()
    }, false)

    //When contact data is filled in, it is saved to localStorage in an array
    const addContactForm = document.querySelector('.new-contact-form')
    addContactForm.addEventListener('submit', event => {
        event.preventDefault()
        const storage = window.localStorage

        const {
            name,
            email,
            phone,
            company,
            notes,
            twitter,
        } = addContactForm.elements

        const contact = {
            id: Date.now(),
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value,
        }
        console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
        let contacts = JSON.parse(storage.getItem('contacts')) || []
        contacts.push(contact)
        storage.setItem('contacts', JSON.stringify(contacts))
        document.getElementById("input_form").reset();
    
        renderContacts()
    })

    // When clicking on the Delete button of a contact, contact data is deleted
    

})




    

