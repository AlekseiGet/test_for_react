import React, { useState } from 'react';
import classes from './MyLimit.module.css';


const MyLimit = ( limit) => {

    let minLimit = () => {
        if (limit.limit < 6) { 
            return
         }else{
            limit.setLimit(limit.limit - 1)
         }
    }
    return (
        <div className={classes.my__limit}>
          
            <h1><span>лимит</span>{limit.limit} </h1>
            
            <button onClick={() => limit.setLimit(limit.limit + 1)}>Больше</button>
            <button onClick={minLimit}>Меньше</button>
          
        </div>
    );
};

export default MyLimit;