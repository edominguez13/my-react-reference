import logo from '../logo-example.png';

function Logo(props) {
    const userPic = <img src={logo} /> {/* using a variable with and JSX component */}
    return userPic;
}

export default Logo;

