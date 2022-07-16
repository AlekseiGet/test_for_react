import axios from "axios";


export default class TokenService {
   static async getAll(limit, page) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos'
      //  ,{
      //    params: {
      //      _limit: limit,
      //      _page: page
      //    }
      //  }
         ) 
         console.log(response);
          return response;
              //  return response.data 
              
  }
}