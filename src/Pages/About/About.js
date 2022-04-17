import React from 'react';
import job from '../../image/job.png';
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <div className='content'>
                <h2>My name is Masud Parvez</h2>
                <p></p>

            </div>
            <div>
                <img src={job} alt="" />

            </div>

        </div>
    );
};

export default About;