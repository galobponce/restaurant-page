export const clearContent = () => {
  const home = document.getElementById("home")
  const menu = document.getElementById("menu")
  const contact = document.getElementById("contact")

  if (home) home.outerHTML = ""
  if (menu) menu.outerHTML = ""
  if (contact) contact.outerHTML = ""
}

export const clearNavbarItemActiveClass = () => {
  const items = document.querySelectorAll(".navbar-item.active")
  items.forEach((item) => {
    item.classList.remove("active")
  })
}
