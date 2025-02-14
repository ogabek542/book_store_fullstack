import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import "sweetalert2/dist/sweetalert2.js"
import router from './routers/router.jsx';
import {Provider} from "react-redux";
import { store } from './redux/store.js';




createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <RouterProvider router={router}>
  //       <App />   
  //   </RouterProvider>
  // </StrictMode>,

  <Provider store={store}>
      <RouterProvider  router={router} />
  </Provider>
  
)
