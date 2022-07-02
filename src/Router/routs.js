import About from "../Pages/About";
import PostIdPages from "../Pages/PostIdPages";
import StartPage from "../Pages/StartPage";

export const routes = [
   {path: '/about', element: <About/>,  key: '2'},
 
   {path: '/token/:db_id', element: <PostIdPages/>,  key: 'token'},
   {path: '/', element: <StartPage/>,  key: 'start'}

    
]

