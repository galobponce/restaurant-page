import "./Navbar.css"

const Navbar = () => {
  const navbar = document.createElement("nav")
  navbar.classList.add("navbar")

  navbar.innerHTML = `
    <div class="navbar-item">
      Home
    </div>
    <div class="navbar-item">
      Menu
    </div>
    <div class="navbar-item">
      Contact
    </div>
  `

  return navbar
}

export default Navbar
