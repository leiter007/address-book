// Pre-defined constants
    
    const renderContacts = () => {
        const storage = window.localStorage
        const contacts = JSON.parse(storage.getItem('contacts'))
        let div = document.querySelector('#contact-list')

        if (contacts) {
            div.innerHTML = '<div class="flex flex-wrap">'
            const ul = document.createElement('ul')
            contacts.forEach(contact => {
                let li = document.createElement('li')
                ul.classList += "bg-white text-xs p-3"
                li.id = contact.id
                li.classList+= "p-2 border border-teal rounded flex flex-wrap mb-2 bg-grey-lightest"
                li.innerHTML = `
                        <div class= "w-full flex items-stretch md:w-1/3 h-2/3 pr-5 border-r border-grey-light">
                            <div class="self-start flex-1" id="${contact.id}">
                                <div class="image">
                                <img src="avatar1.png" />
                                </div>
                            </div>
                        </div>
                        
                        <div class= "w-full md:w-2/3 pl-5 pt-1">
                            <div class="content">
                                <h1 class="pb-3 pt-1 text-30xl font-semibold border-b border-grey-light">${ contact.name }</h1>
                                <h2 class="pt-1 text-lg font-semibold"> ${ contact.company }</h2>
                                <p class="p-2"> ${ contact.notes }</p>
                                ${ contact.email } |
                                <a href="https://www.twitter.com/${ contact.twitter }">@${contact.twitter}</a>
                                <button class="delete-contact" onclick="deleteContact(${contact.id})" style="padding: 0.5rem; border-color: #dae1e7; margin-block-right: 1rem; background-color: white">Delete</button>
                            </div>
                        </div>
                    </div>
                `
                //Create the EDIT button:
                let edit_button = document.createElement('button');
                    edit_button.style = "padding: 0.5rem; border-color: #dae1e7; margin-block-right: 1rem; background-color: white"
                    edit_button.classList += "edit-contact";
                    edit_button.innerHTML = "Edit";
                    li.appendChild(edit_button)

                //Create the DELETE button:
                /*let del_button = document.createElement('button');
                    del_button.style = "padding: 0.5rem; border-color: #dae1e7; background-color: white"
                    del_button.classList += "delete-contact"; //classList += assigning the class to the created element
                    del_button.innerHTML = "Delete"; //innerHTML here means the text on the button
                    li.appendChild(del_button) //adds a "child" node to the end of the contact card list (li)
                */

                //Pushing all cards (li) into the unordered list: 
                ul.appendChild(li)
            })
            //Pushing the unordered list into the div, with the label "contact-list":
            div.appendChild(ul)
        
        } 
        
        else {
            div.innerHTML ='<p class="text-2xl text-center">You have no contacts in your address book</p>'
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
   // When clicking on the DELETE button of a contact, contact data is deleted
const deleteContact = (id) => {
    const storage = window.localStorage
    let contacts = JSON.parse(storage.getItem('contacts')) || []
    //For-loop checking the contact for the ID of the contact and compares with parentNode ID = the contact-list "li" id (i.e the contact card)
    contacts.forEach(cont => {
        cont.id == id ? contacts.splice(contacts.indexOf(contact), 1) : false //Splice is a function that removes an item (contact) from an array. IndexOf = the index number in an array of that item (contact)
    })
    console.log(contacts)
    storage.setItem('contacts', JSON.stringify(contacts))
    //after deleting contact, check if contacts array is empty, if so - then delete the contact array
    contacts.length == 0 ? storage.removeItem("contacts") : false

    renderContacts()
    //window.location.reload(true)
}

//////////////////////////////////////////////////////////////
//CODE TO EXECUTE WHEN DOM IS LOADED
document.addEventListener('DOMContentLoaded', () => {
    renderContacts()
    hideForm()

    //When clicking ADD contacts button, showing contact input_form
    const addContactButton = document.getElementById("add-contact")
    addContactButton.addEventListener('click', event => {
        event.preventDefault()
        showForm()
        addContactButton.style.display = "none";
    }, false)

    //When CONTACT DATA is filled in, it is saved to localStorage in an array
    const addContactForm = document.querySelector('#input_form')
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
        addContactButton.style.display = "block"
    });

    //When clicking EDIT button, showForm and pre-populate the fields with the ones already in the database

    //When clicking CANCEL button, hide input form and clear input fields
    const cancelButton = document.getElementById("cancel")
    cancelButton.addEventListener('click', event => {
        event.preventDefault()
        document.getElementById("input_form").reset()
        hideForm()
        addContactButton.style.display = "block"
    }, false)

})
