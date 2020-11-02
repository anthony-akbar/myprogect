import React, {Component} from 'react';
import Nav from './components/navigation';
import Section from './components/section';


class App extends Component {
    render() {
        return (
            <div>
              <Nav/>
              <Section/>
            </div>
        );
    }
}

export default App;