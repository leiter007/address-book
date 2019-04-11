// Pre-defined constants
    
    const renderContacts = () => {
        const storage = window.localStorage
        const contacts = JSON.parse(storage.getItem('contacts'))
        let div = document.querySelector('#contact-list')

        if (contacts) {
            div.innerHTML = ''
            const ul = document.createElement('ul')
            contacts.forEach(contact => {
                let li = document.createElement('li')
                li.id = contact.id
                li.innerHTML = `
                    <div class="card" style="background-color:lightgrey" id="${contact.id}">
                        <div class="image">
                            <img src="https://ca-address-book.herokuapp.com/images/pine.jpg" height=20% width=20% />
                        </div>
                        <div class="content">
                            <h1>${ contact.name }</h1>
                            <h2>${ contact.company }</h2>
                            <p>${ contact.notes }</p>
                            ${ contact.email } |
                            <a href="https://www.twitter.com/${ contact.twitter }">@${contact.twitter}</a>
                        </div>
                    </div>
                `
                //Create the delete button:
                let button = document.createElement('button');
                    button.classList += "delete-contact"; //classList += assigning the class to the created element
                    button.innerHTML = "Delete"; //innerHTML here means the text on the button
                    li.appendChild(button) //adds a "child" node to the end of the contact card list (li)
                
                //Pushing all cards (li) into the unordered list: 
                ul.appendChild(li)
            })
            //Pushing the unordered list into the div, with the label "contact-list":
            div.appendChild(ul)
        
        } 
        
        else {
            div.innerHTML ='<p>You have no contacts in your address book</p>'
        }
    }

const showForm = () => {
    let form = document.getElementById("div-input-form")
    form.style.display = "block";
}

const hideForm = () => {
    let form = document.getElementById("div-input-form")
    form.style.display = "none";
}
//////////////////////////////////////////////////////////////
//CODE TO EXECUTE WHEN DOM IS LOADED
document.addEventListener('DOMContentLoaded', () => {
    renderContacts()
    hideForm()

    // When clicking on the Delete button of a contact, contact data is deleted
    let delete_button = document.querySelector('#contact-list')
    const storage = window.localStorage
    delete_button.addEventListener('click', event => {
        let id = event.target.parentNode.id //selets the ID for the parentNode of the delete button (event in this case) = list item(li) in this case
        let contacts = JSON.parse(storage.getItem('contacts')) || []
        console.log(contacts)
        //For-loop checking the contact for the ID of the contact and compares with parentNode ID = the contact-list "li" id (i.e the contact card)
        contacts.forEach(contact => {
            contact.id == id ? contacts.splice(contacts.indexOf(contact), 1) : false //Splice is a function that removes an item (contact) from an array. IndexOf = the index number in an array of that item (contact)
        })
        console.log(contacts)
        storage.setItem('contacts', JSON.stringify(contacts))
        //after deleting contact, check if contacts array is empty, if so - then delete the contact array
        contacts.length == 0 ? storage.removeItem("contacts") : false

        renderContacts()
        //window.location.reload(true)
    })
    
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
        let contacts = JSON.parse(storage.getItem('contacts')) || []

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
        contacts.push(contact)
        storage.setItem('contacts', JSON.stringify(contacts))
        document.getElementById("input_form").reset();
    
        renderContacts();
        hideForm()
    })

})
