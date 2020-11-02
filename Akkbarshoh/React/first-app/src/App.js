import React, {Component} from 'react';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Nav from "./components/nav";
import Section3 from "./components/section3";
import Footer from "./components/footer";

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Section1/>
                <Section2/>
                <Section3/>
                <Footer/>
            </div>
        );
    }
}

export default App;