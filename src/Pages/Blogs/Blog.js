import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div>
                <h2>Difference between authorization and authentication?</h2>
                <h5>Authentication: </h5>
                <p>Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authentication is the first step of a good identity and access management process.Authentication is visible to and partially changeable by the user.</p>
                <h5>Authorization: </h5>
                <p>Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.Authorization always takes place after authentication.Authorization is not visible to or changeable by the user.</p>
            </div>
            <div>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick.It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
            <div>
                <h2>What other services does firebase provide other than authentication?</h2>
                <p>firebase provide:</p>


                <ul>
                    <li>  Realtime data.</li>
                    <li> Built in security at the data node level.</li>
                    <li>
                        File storage backed by Google Cloud Storage.</li>
                    <li>Static file hosting.</li>
                    <li>
                        Treat data as streams to build highly scalable applications.</li>
                    <li>     Don't worry about your infrastructure!</li>






                </ul>


            </div>

        </div>
    );
};

export default Blog;