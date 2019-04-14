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
            ul.classList += "bg-grey-lighter text-xs p-3"
            li.id = contact.id
            li.classList+= "container mx-auto my-10 w-full max-w-sm content-center p-6 rounded-lg flex flex-wrap mb-6 bg-white"
            li.innerHTML = `
                <link rel="stylesheet" href="style.css">
                    <div class= "w-full flex content-center items-stretch md:w-1/3 h-2/3 p-5">
                        <div class="flex-1" id="${contact.id}">
                            <div class="content-center text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class ="fill-current text-teal inline-block h-20 w-20" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"/></svg>
                                <button class="delete-contact" onclick="deleteContact(${contact.id})" style="text-align: center; padding: 5px; margin: auto; display: inline-block; text-decoration: none; color: #B8C2CC">Delete</button>
                                <button class="edit-contact" onclick="editContact(${contact.id})" style="text-align: center; padding: 5px; margin: auto; display: inline-block; text-decoration: none; color: #B8C2CC">Edit</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class= "self-center align-middle w-full p-3 md:w-2/3">
                        <div class="self-center content-center align-middle">
                            <h1 class="pb-1 text-30xl font-semibold border-b border-teal ">${ contact.name }</h1>
                            <h2 class="pt-1 pb-2 text-lg font-semibold"> ${ contact.company }</h2>
                            <p class="pt-1 text-sm"> ${ contact.phone }</p>
                            <p class="pt-1 pb-1 text-sm"> ${ contact.notes }</p>
                            <a class="pt-2 text-sm no-underline text-grey-darker hover:text-teal" href="mailto:${ contact.email }">${ contact.email }</a> |
                            <a class="pt-2 text-sm no-underline text-grey-darker hover:text-teal" href="https://www.twitter.com/${ contact.twitter }">@${contact.twitter}</a></p>
                        </div>
                    </div>

                    </div>
            `

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

        //SAVING
        console.log(`Saving the following contact: ${JSON.stringify(contact)}`)
        contacts.push(contact)
        storage.setItem('contacts', JSON.stringify(contacts))
        document.getElementById("input_form").reset();
        
        //Cleaning up after saving
        renderContacts();
        hideForm()
        addContactButton.style.display = "block"
    });

    //When clicking CANCEL button, hide input form and clear input fields
    const cancelButton = document.getElementById("cancel")
    cancelButton.addEventListener('click', event => {
        event.preventDefault()
        document.getElementById("input_form").reset()
        hideForm()
        addContactButton.style.display = "block"
    }, false)
})
