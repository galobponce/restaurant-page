import { Header, Home, Navbar } from "./components"

import "./main.css"

const main = () => {
  document.body.appendChild(Header())
  document.body.appendChild(Navbar())
  document.body.appendChild(Home())
}

main()
