import React from 'react';
import ReactDOM from 'react-dom';
import NajjarGames from './pages/NajjarGames';
import Error from './pages/Error';
import PageLayout from './layouts/PageLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './main.scss'

ReactDOM.render(
  // <React.StrictMode>
    <main>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<NajjarGames />} />
            {/* <Route path="SummaGemma" element={<SummaGemma />} /> */}
            <Route path="error" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>,
  // </React.StrictMode>,
  document.getElementById('root')
);
