import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router';
import api from '../../config/api';

export default function RouteMiddleware() {
  let token = localStorage.getItem('token') ?? false;
  useEffect(()=>{
    api.get('/login/valid-token',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res)=>{
      if(res.data.isLogin === false){
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }).catch((err)=>{
      console.log(err.res.data);
    });
  }, []);
  

  return (
    token ? <Outlet /> : <Navigate to={'/login'}/>
  );
}
