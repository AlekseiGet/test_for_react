import React from 'react';
import { useParams} from 'react-router-dom';

 var receive = []
export function GetDubl(dubl) {
    receive = dubl;
    return receive;   
}

const PostIdPages = () => {
    const params = useParams()  
    const paramsDbid = params.db_id  //Странно есть db_id а id нет!!!
    let visibil = {};
   let visibilImeg = {};
       
    for (let i = 0; i < receive.length; i++) {
    
        if (receive[i].id == paramsDbid) {
            visibil = receive[i]
            visibilImeg = visibil.url  
            break
        }
        
}

   return (
       <div>
           <img src={visibilImeg} alt="Неудалось" style={{ width: 300 }} />
       <div className='token__cart' >         
           <h1 style={{ margin: 10 }}>albumId: {visibil.albumId} </h1>
           <h1 style={{ margin: 10 }}>id: {visibil.id} </h1>
           <h1 style={{ margin: 10 }}>title: {visibil.title} </h1>
           
        </div>
       
            

  </div>
    );
};

export default PostIdPages;
