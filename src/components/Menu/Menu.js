import "./Menu.css"

const Menu = () => {
  const menu = document.createElement("div")
  menu.classList.add("menu")
  menu.id = "menu"

  menu.innerHTML = `
    <h2>Menu</h2>
  `

  return menu
}

export default Menu
