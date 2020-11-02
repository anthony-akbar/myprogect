import React, {Component} from 'react';
import bandmember from './img_bandmember.jpg';

class Section3 extends Component {
    render() {
        return (
            <section className="w3-row-padding w3-center w3-light-grey">
                <article className="w3-third">
                    <p>John</p>
                    <img src={bandmember} alt="Random Name" />
                        <p>John is the smartest.</p>
                </article>
                <article className="w3-third">
                    <p>Paul</p>
                    <img src={bandmember} alt="Random Name" />
                        <p>Paul is the prettiest.</p>
                </article>
                <article className="w3-third">
                    <p>Ringo</p>
                    <img src={bandmember} alt="Random Name" />
                        <p>Ringo is the funniest.</p>
                </article>
            </section>
        );
    }
}

export default Section3;