import avatar from '../../images/ariel.jpg';

import './Home.css';


const Home = () => {
    const home = document.createElement('div');
    home.classList.add('home');

    home.innerHTML = `
        <span class='home--info'>La parrilla de Ariel de Gran Hermano en Berazategui</span>

        <img class='home--avatar' src=${avatar} />

        <span class='home--info'>¡Vení a conocernos!</span>
    `;

    return home;
};

export default Home;