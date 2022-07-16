import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { routes } from '../Router/routs';


const AppRouter = () => {
    return (
     
   <Routes> {routes.map(route => 
      <Route
          path={route.path}
          element={route.element}  
          key={route.key}
       />
      ) }


   </Routes>
   

    );
};

export default AppRouter;