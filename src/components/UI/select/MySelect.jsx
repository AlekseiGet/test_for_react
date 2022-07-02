import React from 'react';
import classes from './MySelect.module.css'
const MySelect = ({ options, defaultValue, value, onChange, name}) => {
   // console.log(name)
    return (
        <select className={classes.my__select}    
            value = {value}
            onChange={event => onChange(event.target.value) } 
            name = {name}         
        >
            <option disabled value='' name=''>{defaultValue}</option>
            {options.map(option => 
                <option key={option.name} value={option.value}>
                {option.name} 
            </option> 
            )}
        </select>
    );
};

export default MySelect;