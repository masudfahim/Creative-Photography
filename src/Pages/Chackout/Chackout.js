import React from 'react';
import { useParams } from 'react-router-dom';

const Chackout = () => {
    const { serviceId } = useParams();
    return (
        <div>
            this is from chackoutpage:{serviceId}

        </div>
    );
};

export default Chackout;