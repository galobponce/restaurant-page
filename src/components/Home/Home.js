import avatar from "../../images/chef.png"

import "./Home.css"

const Home = () => {
  const home = document.createElement("div")
  home.classList.add("home")
  home.id = "home"

  home.innerHTML = `
        <span class='home--info'>The best pizza in the city</span>

        <span class='home--info'>Made with passion since 1908</span>

        <img class='home--avatar' src='${avatar}' />

        <span class='home--info'>Come and visit us!</span>
    `

  return home
}

export default Home
