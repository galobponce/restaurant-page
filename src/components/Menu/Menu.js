import { pizzas } from "./pizzas"

import { MenuItem } from "./MenuItem"

import "./Menu.css"

const Menu = () => {
  const menu = document.createElement("div")
  menu.classList.add("menu")
  menu.id = "menu"

  pizzas.map((pizza) => {
    menu.appendChild(MenuItem(pizza))
  })

  return menu
}

export default Menu
