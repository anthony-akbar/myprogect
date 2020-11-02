import React, {Component} from 'react';
import la from './img_band_la.jpg';
import ny from './img_band_ny.jpg';
import chicago from './img_band_chicago.jpg';

class Section1 extends Component {
    render() {
        return (
            <section>
                <img className="mySlides" src={la}/>
                    <img className="mySlides" src={ny}/>
                        <img className="mySlides" src={chicago}/>
            </section>
        );
    }
}

export default Section1;