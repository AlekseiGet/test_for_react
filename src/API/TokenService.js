import axios from "axios";


export default class TokenService {
   static async getAll(limit, page) {
        const response = await axios.get('https://api.expandingspace.io/beta/Tokens?username=',{
          params: {
            _limit: limit,
            _page: page
          }
        } ) 
     
          return response;
              //  return response.data 
              
  }
}