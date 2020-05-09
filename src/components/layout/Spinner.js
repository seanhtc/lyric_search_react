import React from 'react';
import spinnerImage from '../../images/spinner.gif';

const Spinner = () => {
    return (
        <div>
            <img
                src={spinnerImage}
                alt="loading"
                style={{ width: '50px', margin: '40px auto', display: 'block' }}
            />
        </div>
    )
};

export default Spinner;
