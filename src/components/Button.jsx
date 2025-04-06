import React from 'react';
import classes from './Button.module.css';

const Button = ({label, onClick}) => {
    return <button className={classes.button} onClick={onClick}>{label}</button>
};

export default Button;