import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

// function Footer() {
//   return (
//     <footer>
//       <img src={icon1} alt="icon1" className="footer-icon" />
//       <img src={icon2} alt="icon2" className="footer-icon" />
//       <img src={icon3} alt="icon3" className="footer-icon" />
//       <img src={icon4} alt="icon4" className="footer-icon" />
//     </footer>
//   );
// }

function Footer() {
  return (
    <footer>
      <div className="icon-container">
        <img src={icon1} alt="icon1" className="footer-icon" />
        <h1 className="icon-text-h">Declarative</h1>
        <p className="icon-text-sub">
          React makes it
          <br /> painless to create
          <br /> interactive UIs.
        </p>
      </div>
      <div className="icon-container">
        <img src={icon2} alt="icon2" className="footer-icon" />
        <h1 className="icon-text-h">Components</h1>
        <p className="icon-text-sub">
          Build encapsulated
          <br /> components that
          <br /> manage their state.
        </p>
      </div>
      <div className="icon-container">
        <img src={icon3} alt="icon3" className="footer-icon" />
        <h1 className="icon-text-h">Single-Way</h1>
        <p className="icon-text-sub">
          A set of immutable
          <br /> values are passed to the <br /> components.
        </p>
      </div>
      <div className="icon-container">
        <img src={icon4} alt="icon4" className="footer-icon" />
        <h1 className="icon-text-h">JSX</h1>
        <p className="icon-text-sub">
          Statically-typed.
          <br /> designed to run on
          <br /> modern browsers.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
