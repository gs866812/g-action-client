import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './AppRoutes';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div>
        <AppRoutes/>
      </div>
  </React.StrictMode>,
)
