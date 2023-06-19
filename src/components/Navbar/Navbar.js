import { Home, Menu, Contact } from "../"

import { clearContent, clearNavbarItemActiveClass } from "../../helpers"

import "./Navbar.css"

const Navbar = () => {
  const changeTab = (tab) => {
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

  const onClickNavbarItem = (navbarItem) => {
    clearContent()
    clearNavbarItemActiveClass()
    navbarItem.classList.add("active")
    changeTab(navbarItem.id)
  }

  const navbar = document.createElement("nav")
  navbar.classList.add("navbar")

  // Home Tab
  const homeItem = document.createElement("div")
  homeItem.id = "H"
  homeItem.innerHTML = "Home"
  homeItem.classList.add("navbar-item", "active")
  homeItem.addEventListener("click", (ev) => {
    onClickNavbarItem(ev.target)
  })

  // Menu Tab
  const menuItem = document.createElement("div")
  menuItem.id = "M"
  menuItem.innerHTML = "Menu"
  menuItem.classList.add("navbar-item")
  menuItem.addEventListener("click", (ev) => {
    onClickNavbarItem(ev.target)
  })

  // Contact Tab
  const contactItem = document.createElement("div")
  contactItem.id = "C"
  contactItem.innerHTML = "Contact"
  contactItem.classList.add("navbar-item")
  contactItem.addEventListener("click", (ev) => {
    onClickNavbarItem(ev.target)
  })

  // Append tabs to the navbar
  navbar.appendChild(homeItem)
  navbar.appendChild(menuItem)
  navbar.appendChild(contactItem)

  return navbar
}

export default Navbar
