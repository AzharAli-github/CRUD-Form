import { Link } from "react-router-dom";
import './home.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import {Card} from '../../container/Card';

export const Home = () => {
  const handleClick = () => {
    alert('Welcome')
  }
  return(
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="about">About</Link></li>
      <li><Link to="contact">Contact</Link></li>
      <li><Link to="todo">Todo</Link></li>
      <li className="menuIcon" onClick={handleClick} ><GiHamburgerMenu /></li>
    </ul>
    <div className="secOne">
      <h1>Hello I am in Home</h1>
    </div>
    <Card/>

</div>
  );
};