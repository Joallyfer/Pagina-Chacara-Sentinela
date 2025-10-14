
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/page'));
const Espaco = lazy(() => import('../pages/espaco/page'));
const Eventos = lazy(() => import('../pages/eventos/page'));
const Ensaio = lazy(() => import('../pages/ensaio/page'));
const Galeria = lazy(() => import('../pages/galeria/page'));
const Depoimentos = lazy(() => import('../pages/depoimentos/page'));
const Contato = lazy(() => import('../pages/contato/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/espaco',
    element: <Espaco />
  },
  {
    path: '/eventos',
    element: <Eventos />
  },
  {
    path: '/ensaio',
    element: <Ensaio />
  },
  {
    path: '/galeria',
    element: <Galeria />
  },
  {
    path: '/depoimentos',
    element: <Depoimentos />
  },
  {
    path: '/contato',
    element: <Contato />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
