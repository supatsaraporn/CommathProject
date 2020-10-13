import React from 'react'
import Home from './views/home'
import Page01 from './views/page01'
import Page02 from './views/page02'
import Page03 from './views/page03'
import Page04 from './views/page04'
import Page05 from './views/page05'
import Page06 from './views/page06'

const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "commath-pj",
      element: <Home />,
    },
    {
      path: "page01",
      element: <Page01 />,
    },
    {
      path: "page02",
      element: <Page02 />,
    },
    {
      path: "page03",
      element: <Page03 />,
    },
    {
      path: "page04",
      element: <Page04 />,
    },
    {
      path: "page05",
      element: <Page05 />,
    },
    {
      path: "page06",
      element: <Page06 />,
    },
  ];
  
  export default routes;