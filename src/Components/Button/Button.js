import React from 'react';
import classes from './Button.module.css'
 
const CustomButton = (props) => {
    return (
        <button className={classes.Button} onClick={props.click}>
            <div className={classes.Text}>Add Post</div>
        </button>
    );
}
 
export default CustomButton