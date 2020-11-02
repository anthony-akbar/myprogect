import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="w3-bar w3-black">
                <a href="#home" className="w3-button w3-bar-item">Home</a>
                <a href="#band" className="w3-button w3-bar-item">Band</a>
                <a href="#tour" className="w3-button w3-bar-item">Tour</a>
                <a href="#contact" className="w3-button w3-bar-item">Contact</a>
            </nav>
        );
    }
}

export default Nav;