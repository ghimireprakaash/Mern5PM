import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeComponents from '../pages/HomeComponent';
import LoginComponents from '../pages/auth/LoginComponents';
import RegisterComponents from '../pages/auth/RegisterComponents';
import RouteMiddleware from '../middleware/RouteMiddleware';
import DashboardComponents from '../admin/pages/DashboardComponents';
import PageNotFound from '../errors/PageNotFound';

export default function RouterComponents() {
  return (
    <>
        <Routes>
            <Route exact path='/' Component={HomeComponents}/>
            <Route path="/login" Component={LoginComponents}/>
            <Route path="/register" Component={RegisterComponents}/>
            <Route Component={RouteMiddleware}>
              <Route path="/dashboard" Component={DashboardComponents}/>
            </Route>
            <Route path="*" Component={PageNotFound}/>
        </Routes>
    </>
  )
}
