// import logo from "../assets/ironhack-logo-xs.png";
// import top from "../assets/menu-top-xs.png";

// function Header() {
//   return (
//     <header>
//       <img src={logo} alt="Logo" className="logo-icon" />
//       <img src={top} alt="top" className="hamburger-icon" />
//       <h1>Say hello to ReactJS</h1>
//       <h2>
//         You will learn how to use the most popular frontend library, and become
//         a super Ninja developer.
//       </h2>
//     </header>
//   );
// }

// export default Header;

import logo from "../assets/ironhack-logo-xs.png";
import top from "../assets/menu-top-xs.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo-icon" />
      <img src={top} alt="top" className="hamburger-icon" />
      <h1 className="main-heading">Say hello to ReactJS</h1>
      <h2 className="sub-heading">
        You will learn how to use <br />
        the most popular frontend library, <br />
        and become a super Ninja developer.
      </h2>
      {/* <p>Text Above the Button</p> Add your text here */}
      <button className="button"> Awesome! </button>
    </header>
  );
}

export default Header;
