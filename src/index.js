import { Header, Navbar, Home } from "./components"

import "./main.css"

const main = () => {
  const content = document.createElement("div")
  content.id = "content"

  content.appendChild(Header())
  content.appendChild(Navbar())
  content.appendChild(Home())

  document.body.appendChild(content)
}

main()
