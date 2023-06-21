import "./MenuItem.css"

const MenuItem = (item) => {
  const menuItem = document.createElement("div")
  menuItem.classList.add("menu-item")

  menuItem.innerHTML = `
    <img src="./pizzas/${item.image_name}.png" alt=${item.name} class="menu-item-image" />
    <h3 class="menu-item-title">${item.name}</h3>
    <p class="menu-item-description">${item.description}</p>
  `

  return menuItem
}

export default MenuItem
