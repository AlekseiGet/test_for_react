import React from 'react';
import MyButton from './UI/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';


const TokenItem = (props) => {
    const rounter = useNavigate()

    return (

        <div className='token'>
            <div className='token__content' >

                <img src={props.token.url} alt="ups" />              
                <h3>{props.token.id}</h3>
                <h3>{props.token.title} </h3>
               
                <MyButton onClick={() => rounter(`/token/${props.token.id}`) } >Узнать больше</MyButton>
                   
               </div>
            </div> 
       
    );
};

export default TokenItem;
