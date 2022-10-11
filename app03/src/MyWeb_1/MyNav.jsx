import './Css/Web.css';
import MyHeader from './MyHeader';
import MyMain from './MyMain';
import MyFooter from './MyFooter';

  function MyNav() {
    return (
      <>
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
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-square-instagram"></i></li>
          </ul>
        </nav>
        <MyHeader/>
        <MyMain/>
        <MyFooter/>
      </>
    );
  }
export default MyNav;