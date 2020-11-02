import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="w3-container w3-padding-64 w3-center w3-black w3-xlarge">
                <a href="#"><i className="fa fa-facebook-official"></i></a>
                <a href="#"><i className="fa fa-pinterest-p"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-flickr"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <p className="w3-medium">
                    Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
                </p>
            </footer>
        );
    }
}

export default Footer;