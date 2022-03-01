import logo from '../../images/Logo1.svg';
import cart from '../../images/cart.svg';
import '../../App.css';
import '../../grid.css';
import './header.css';
import Menu from '../../images/Menu.svg';

function Header() {
  return (
    <div className="head">
      <header className="flex-container">
        
      <header class="site-header">
            <div class="flex-container">
                <div class="flex-header">
                    <div class="logo">
                        <a href="#"><img src={logo} alt="Logo" /></a>
                    </div>
                    
                    <nav class="site-menu">
                        <ul>
                            <li><a class="list" href="#">Shop</a> </li>
                            <li><a class="list" href="#">About Us</a></li>
                            <li><a class="list" href="#">My Workbooks</a></li>
                            
                        </ul>
                        <ul>
                        <li><button class="primaryButton" href="#">Log in</button></li>
                            <li><button class="secondry-btn" href="#">Sign up</button></li>
                            <li ><a  href="#"><img src={cart} className="cart" alt="Logo" /></a>
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
