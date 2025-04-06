import React from 'react';
import classes from './Button.module.css';

const Button = ({label, onClick}) => {
    return <button className={classes.button} type="submit">{label}</button>
};

export default Button;