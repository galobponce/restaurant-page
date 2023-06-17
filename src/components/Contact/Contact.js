import "./Contact.css"

const Contact = () => {
  const contact = document.createElement("contact")
  contact.classList.add("contact")
  contact.id = "contact"

  contact.innerHTML = `
    <h2>Contact</h2>
  `

  return contact
}

export default Contact
