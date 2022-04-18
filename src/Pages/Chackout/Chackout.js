
import React from 'react';

import { useParams } from 'react-router-dom';
import './Chackout.css'

const Chackout = () => {
    const { serviceId } = useParams();

    return (
        <div className='register-form main-container'>
            <h2 style={{ textAlign: 'center' }}>Please Write About Yourself</h2>
            <form >
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="text" name="name" id="" placeholder='Address' />
                <input

                    className='w-50 mx-auto btn btn-info mt-2'
                    type="submit"
                    value="Submit" />



            </form>

        </div>
    );
};

export default Chackout;