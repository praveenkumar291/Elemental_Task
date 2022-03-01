import logo from "../../images/Logo1.svg";
import cart from "../../images/cart.svg";
import "../../App.css";
import "../../grid.css";
import "./header.css";
import Menu from "../../images/Menu.svg";

function Header() {
  return (
    <div className="head">
      <header className="flex-container">
        <header class="site-header">
          <div class="flex-container">
            <div class="flex-header">
              <div class="logo">
                <a href="https://www.google.com/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>

              <nav class="site-menu">
                <ul>
                  <li>
                    <a class="list" href="https://www.google.com/">
                      Shop
                    </a>{" "}
                  </li>
                  <li>
                    <a class="list" href="https://www.google.com/">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="list" href="https://www.google.com/">
                      My Workbooks
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <button
                      class="primaryButton"
                      href="https://www.google.com/"
                    >
                      Log in
                    </button>
                  </li>
                  <li>
                    <button class="secondry-btn" href="https://www.google.com/">
                      Sign up
                    </button>
                  </li>
                  <li>
                    <a href="https://www.google.com/">
                      <img src={cart} className="cart" alt="Logo" />
                    </a>
                  </li>
                </ul>
                <div>
                  <img src={Menu} className="menu" alt="Menu" />
                </div>
              </nav>
            </div>
          </div>
        </header>
      </header>
    </div>
  );
}

export default Header;
