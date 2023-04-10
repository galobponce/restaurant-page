import { Header, Home } from './components';

import './main.css';


const main = () => {
    document.body.appendChild(Header());
    document.body.appendChild(Home());
};


main();