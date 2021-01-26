import React from 'react';
import classes from './mini.module.css'
 
const MiniCard = (props) => {
    return (
        <article className={classes.Layout} onClick={props.onClick}>
            <div className={classes.Header}>{props.Title}</div>
            <div className={classes.Text}>{props.Author}</div>
        </article>
    );
}
 
export default MiniCard