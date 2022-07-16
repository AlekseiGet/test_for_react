import axios from "axios";


export default class TokenService {
   static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos'
    
         ) 
 
          return response;
             
              
  }
}