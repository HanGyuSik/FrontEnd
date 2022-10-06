import './Css/Web.css';
import React_1 from './React_1';
import React_2 from './React_2';
import React_3 from './React_3';

  function React_0() {
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
        <React_1/>
        <React_2/>
        <React_3/>
      </>
    );
  }
export default React_0;