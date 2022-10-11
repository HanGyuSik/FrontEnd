import './Style.css/style.css';
import './Style.css/header.css';

function MyNav() {
  return (
    <nav>
      <p>MY LOGO</p>
      <div className="nav_logo"></div>
      <ul className="nav_menu">
        <li><a href="#">HTML</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">JavaScript</a></li>
        <li><a href="#">React</a></li>
      </ul>  
      <ul className="nav_icon">
        <li>facebook</li>
        <li>insta</li>
      </ul>
    </nav>
    
  );
}
export default MyNav;