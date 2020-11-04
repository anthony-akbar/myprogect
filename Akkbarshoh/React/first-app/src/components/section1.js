import React, {Component} from 'react';
import la from './img_band_la.jpg';
import ny from './img_band_ny.jpg';
import chicago from './img_band_chicago.jpg';

class Section1 extends Component {
    render() {
        return (
            <section>
                <img className="mySlides" src={la} style={{width:'100%', height:'500px'}}/>
                    <img className="mySlides" src={ny} style={{width:'100%', height:'500px'}}/>
                        <img className="mySlides" src={chicago} style={{width:'100%', height:'500px'}}/>
            </section>
        );
    }
}

export default Section1;