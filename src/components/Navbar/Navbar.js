import { Home, Menu, Contact } from "../"
import "./Navbar.css"

const Navbar = () => {
  const navbar = document.createElement("nav")
  navbar.classList.add("navbar")

  const changeTab = (tab) => {
    const home = document.getElementById("home")
    const menu = document.getElementById("menu")
    const contact = document.getElementById("contact")

    if (home) home.outerHTML = ""
    if (menu) menu.outerHTML = ""
    if (contact) contact.outerHTML = ""

    switch (tab) {
      case "H":
        document.body.appendChild(Home())
        break
      case "M":
        document.body.appendChild(Menu())
        break
      case "C":
        document.body.appendChild(Contact())
        break
    }
  }

  // Home Tab
  const homeItem = document.createElement("div")
  homeItem.classList.add("navbar-item")
  homeItem.addEventListener("click", () => changeTab("H"))
  homeItem.innerHTML = "Home"

  // Menu Tab
  const menuItem = document.createElement("div")
  menuItem.classList.add("navbar-item")
  menuItem.addEventListener("click", () => changeTab("M"))
  menuItem.innerHTML = "Menu"

  // Contact Tab
  const contactItem = document.createElement("div")
  contactItem.classList.add("navbar-item")
  contactItem.addEventListener("click", () => changeTab("C"))
  contactItem.innerHTML = "Home"

  // Append tabs to the navbar
  navbar.appendChild(homeItem)
  navbar.appendChild(menuItem)
  navbar.appendChild(contactItem)

  return navbar
}

export default Navbar
