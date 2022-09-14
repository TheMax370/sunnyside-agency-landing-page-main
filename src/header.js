import './style.css';
import Arrow from './images/icon-arrow-down.svg';

let bool = false;
//let navIcon = document.getElementById('nav-icon');
//let headerNav = document.getElementById('nav-menu');

/*if (window.innerWidth >= 700 ) {
  headerNav.style.visibility = 'visible';
} */

function DisplayMenu() {
  let navIcon = document.getElementById('nav-icon');
  let headerNav = document.getElementById('nav-menu');
  bool = !bool;

    if (bool == true) {
      navIcon.addEventListener('click', event => {
        headerNav.style.visibility = 'visible';
      })
    } else {
      headerNav.style.visibility = 'hidden';
    }

  }


function HeaderBar() {
  return (
    <section className="header-bar">
      <h1>sunnyside</h1>
      <nav id='nav-menu'>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <button>CONTACT</button>
      </nav>
      <i class="fa-sharp fa-solid fa-bars" id='nav-icon' onClick={DisplayMenu}></i>
    </section>
  );
}

function HeaderBigText() {
  return (
    <h1 className="header-bigtext">
      WE ARE CREATIVES
    </h1>
  );
}

function HeaderArrow() {
  return (
    <img src={Arrow} />
  );
}

function Header() {
  return (
    <>
      <HeaderBar />
      <HeaderBigText />
      <HeaderArrow />
    </>
  );
}

export default  Header;
