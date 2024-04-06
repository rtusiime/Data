import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Layout from './routes/Layout';
import About from './routes/About'; // Make sure this path is correct
import NotFound from './routes/NotFound'; // Assuming you have a NotFound Component
import './index.css';
import DetailView from './routes/DetailView';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/weatherDetails/:city" element={<DetailView />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);