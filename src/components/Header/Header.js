import './Header.css';


const Header = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    header.innerHTML = `
        <h1 class='title'>El Quincho de Ansaldo</h1>
    `;

    return header;
};


export default Header;