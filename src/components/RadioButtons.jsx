import React, { useState } from 'react';
import input from 'postcss/lib/input';

function RadioButton({ name, value, checked, onChange, label}) {

    return (
        <div>
            <label>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
            /> {label}
            </label>
        </div>
    )    
};

function RadioGroup({ name, options, selectedValue, onChange }) {
    return (
        <div>
            {options.map((option) => (
                <RadioButton
                    key={option.value}
                    name={name}
                    value={option.value}
                    checked={selectedValue === option.value}
                    onChange={onChange}
                    label={option.label}
                />
            ))}
        </div>
    )
}
export default RadioGroup;