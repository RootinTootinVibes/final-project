import React from 'react';
import input from 'postcss/lib/input';

const TextField = ({value, onChange}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter value"
        />
    );
};

export default TextField;