import './Css/Web.css';
// import html from './img/html.png';
import MySection from './MySection';

function MyMain() {
  return (
   <main>
    <MySection h1 = "HTML" p="testhtml"/>
    <MySection h1 = "CSS" p="testhtml"/>
    <MySection h1 = "JavaScript"p="testhtml"/>
    <MySection h1 = "React"p="testhtml"/>

   </main>
      
  );
}
export default MyMain;