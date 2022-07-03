import React from 'react';
import { useParams} from 'react-router-dom';

 var receive = []
export function GetDubl(dubl) {
    receive = dubl;
    return receive;   
}

const PostIdPages = () => {
    const params = useParams()  
    const paramsDbid = params.db_id   
    let visibil = {};
   let visibilText ='';
   let visibilImeg = {};
    
        
    for (let i = 0; i < receive.length; i++) {
    
        if (receive[i].db_id == paramsDbid) {
            visibil = receive[i]
            visibilText = JSON.stringify(visibil);
            visibilImeg = visibil.image.uri
            break
        }
        
}

   return (
       <div>
           <img src={visibilImeg} alt="Небезопасный адресс" style={{ width: 300 }} />
       <div className='token__cart' >         
           <h1 style={{ margin: 10 }}>db_id: {visibil.db_id} </h1>
           <h1 style={{ margin: 10 }}>description: {visibil.description} </h1>
           <h1 style={{ margin: 10 }}>name: {visibil.name} </h1>
           <h1 style={{ margin: 10 }}>owner: {visibil.owner} </h1>
           <h1 style={{ margin: 10 }}>state: {visibil.state} </h1>
           <h1 style={{ margin: 10 }}>token_id: {visibil.token_id} </h1>
           <h1 style={{ margin: 10 }}>update_date: {visibil.update_date} </h1>       
        </div>
       <div className='token__cart' > 
               <h1 style={{ margin: 10 }}>{visibilText} </h1>
       </div>
            

  </div>
    );
};

export default PostIdPages;
