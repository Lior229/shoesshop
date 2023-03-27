import React, { FC } from 'react';
import styles from './Router.module.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Story from '../Story/Story';
import Products from '../Products/Products';
import PageNotFound from '../PageNotFound/PageNotFound';

interface RouterProps {}

const Router: FC<RouterProps> = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path='/home' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/story'element={<Story/>} />
    <Route path='*' element={<PageNotFound/>}/>
</Routes>
);

export default Router;
