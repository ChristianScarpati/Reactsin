
// react v6

import { lazy, LazyExoticComponent  } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

// import { LazyPage1,LazyPage2,LazyPage3 } from "../01-lazyload/pages";
// import LazyLayout from '../01-lazyload/layout/LazyLayout';

type JSXComponent = () => JSX.Element;

interface Route { //es parecida a una clase, salvo que no crea instancias si no tiene codigod ejs. sirve para que nuestros objetos luzcan de cierta manera
     to: string,
     path: string,
     Component: LazyExoticComponent<JSXComponent> | JSXComponent,
     name: string
}
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
     {
          path: '/lazyload/*', //quiero que todas las rutas que pasen por lazyload sean procesadas. para eso uso /*
          to: '/lazyload/',
          Component: LazyLayout,
          name: 'LazyLayout - Dash'
     },
     {
          path: '/no-lazy',
          to: 'no-lazy',
          Component: NoLazy,
          name: 'No Lazy'
     },
   
]

export default routes

// const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'))
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'))
