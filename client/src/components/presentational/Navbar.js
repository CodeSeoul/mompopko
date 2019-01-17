import React, { Component } from "react";
import NavbarStyle from "../../styles/presentational/NavbarStyle";
import { Link } from "react-router-dom";
import HamburgerMenu from "../containers/HamburgerMenu/HamburgerMenu";

class Navbar extends Component {
  state = {
    toggle: false
  };

  toggleHamburger = toggle => {
    const newToggle = !this.state.toggle;
    this.setState({
      toggle: newToggle
    });
  };

  render() {
    return (
      <NavbarStyle toggle={this.state.toggle}>
        <HamburgerMenu toggleHamburger={() => this.toggleHamburger()} />
        <nav className="container">
          <ul className="menu">
            <div>
              <Link className="food-drink" to="/food&drink">
                Food & Drink
              </Link>
              <div className="dropdown">
                <div className="dropdown-wrapper">
                  <ul>
                    <h2>Restaurants</h2>
                    <li>Korean</li>
                    <li>Italian</li>
                    <li>Thai</li>
                    <li>French</li>
                    <li>Vietnamese</li>
                    <li>Indian</li>
                    <li>Middle Eastern</li>
                    <li>Chinese</li>
                    <li>Mexican</li>
                    <li>Fine Dining</li>
                    <li>Cheap Eats</li>
                  </ul>
                  <ul>
                    <h2>Bars</h2>
                    <li>Beer</li>
                    <li>Wine</li>
                    <li>Makgeolli</li>
                    <li>Cocktail</li>
                  </ul>
                  <ul>
                    <h2>Cafes</h2>
                  </ul>
                  <ul>
                    <h2>Desserts</h2>
                  </ul>
                  <ul>
                    <h2>Groceries</h2>
                  </ul>
                  <ul>
                    <h2>Food Truck</h2>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Link className="beauty-health" to="/beauty&health">
                Beauty & Health
              </Link>
              <div className="dropdown">
                <div className="dropdown-wrapper">
                  <ul>
                    <h2>Hair & Eyebrows</h2>
                  </ul>
                  <ul>
                    <h2>Nails</h2>
                  </ul>
                  <ul>
                    <h2>Eyelashes</h2>
                  </ul>
                  <ul>
                    <h2>Skin</h2>
                  </ul>
                  <ul>
                    <h2>Fitness Centers</h2>
                  </ul>
                  <ul>
                    <h2>Saunas</h2>
                  </ul>
                  <ul>
                    <h2>Massage</h2>
                  </ul>
                  <ul>
                    <h2>Spas</h2>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Link to="/fashion">Fashion</Link>
              <div className="dropdown">
                <div className="dropdown-wrapper">
                  <ul>
                    <h2>Clothing</h2>
                  </ul>
                  <ul>
                    <h2>Accessories</h2>
                  </ul>
                  <ul>
                    <h2>Shoes</h2>
                  </ul>
                  <ul>
                    <h2>Jewelry</h2>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Link to="/entertainment">Entertainment</Link>
              <div className="dropdown">
                <div className="dropdown-wrapper">
                  <ul>
                    <h2>Galleries</h2>
                  </ul>
                  <ul>
                    <h2>Golf Range</h2>
                  </ul>
                  <ul>
                    <h2>Performance Hall</h2>
                  </ul>
                  <ul>
                    <h2>Karaoke</h2>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Link to="/services">Services</Link>
              <div className="dropdown">
                <div className="dropdown-wrapper">
                  <ul>
                    <h2>Accommodations</h2>
                  </ul>
                  <ul>
                    <h2>Event Planning</h2>
                  </ul>
                  <ul>
                    <h2>Photography</h2>
                  </ul>
                  <ul>
                    <h2>Courses & Classes</h2>
                  </ul>
                </div>
              </div>
            </div>
          </ul>

          <ul className="sns">
            <Link to="#">
              <i className="fab fa-facebook-square" />
            </Link>
            <Link to="#">
              <i className="fab fa-instagram" />
            </Link>
            <Link to="#">
              <i className="fab fa-youtube" />
            </Link>
          </ul>
        </nav>
      </NavbarStyle>
    );
  }
}

export default Navbar;
