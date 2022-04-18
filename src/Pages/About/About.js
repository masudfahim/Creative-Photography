import React from 'react';
import job from '../../image/job.png';
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <div className='content'>
                <h2>My name is Masud Parvez</h2><br /><br />
                <p>I want to become a web developer within
                    a few month.</p>
                <p> I also gain knowledge which wil be help my work.</p>
                <p>Knowlwdge means I want to learn more language</p>
                <p>so that I can do my job easily.</p>

            </div>
            <div>
                <img src={job} alt="" />

            </div>

        </div>
    );
};

export default About;