import React from 'react';
import TokenItem from './TokenItem';
import { GetDubl } from "../Pages/PostIdPages";


const TokenList = ({ tokens, title, limit, page }) => {
     if (!tokens.length) {
        return (
             <h1 style={{ textAlign: 'center', fontSize: 33 }}> Ничего не нашел !!! </h1>
        )
     }
     
     let f = limit * page;
     let s = f - limit;
    let dubl = tokens.slice(s, f) //укоротил массив до лимита
    GetDubl(dubl,)//отправить в PostIdPages
  

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}> {title}</h1>
            
            {dubl.map(post =>
                <TokenItem token={post} key={post.id} />
                
            )}
        </div>
    );
};

export default TokenList;