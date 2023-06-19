import location from "../../images/location.png"

import "./Contact.css"

const Contact = () => {
  const contact = document.createElement("contact")
  contact.classList.add("contact")
  contact.id = "contact"

  contact.innerHTML = `
    <span class='contact--info'>📞 123 456 789</span>
    
    <span class='contact--info'>📍 Hollywood Boulevard 42, Los Angeles, USA</span>

    <img class='contact--location' src='${location}' />
  `

  return contact
}

export default Contact
