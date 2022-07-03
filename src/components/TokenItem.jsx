import React from 'react';
import MyButton from './UI/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';

const TokenItem = (props) => {
    const rounter = useNavigate()

    return (

        <div className='token'>
            <div className='token__content' >
                   <img src={props.token.image.uri} alt="Небезопасный адресс"/>              
                   <h3>{props.token.db_id}</h3>
                   <h3>{props.token.name} </h3>
                   <h3>{props.token.update_date} </h3>
                <MyButton onClick={() => rounter(`/token/${props.token.db_id}`) } >Узнать больше</MyButton>
               </div>
            </div> 
       
    );
};

export default TokenItem;
