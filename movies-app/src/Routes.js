import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes as BrowserRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import NavMotion from './components/Layout/NavMotion';
import Layout from './components/Layout';

const Movies = lazy(() => import('./views/Movies'));
const Transfers = lazy(() => import('./views/Transfers'));

const Routes = () => {
    return (
        <BrowserRouter>
            <AnimatePresence>
                <Suspense fallback={ <Loader/> }>
                    <Layout>
                        <NavMotion>
                            <BrowserRoutes>
                                <Route path="/" element={ <Movies/> }/>
                                <Route path="/transfers/movies/:movieId" element={ <Transfers/> }/>
                            </BrowserRoutes>
                        </NavMotion>
                    </Layout>
                </Suspense>
            </AnimatePresence>
        </BrowserRouter>
    );
};

export default Routes;
