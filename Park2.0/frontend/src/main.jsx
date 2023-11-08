import './styles/main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MessageContextProvider } from './context/messageContext';
import { UserContextProvider } from './context/userContext';

import Ruteo from './Ruteo';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* Contextos */}
      <MessageContextProvider>
        <UserContextProvider>

          {/* Rutas */}
          <Ruteo />

        </UserContextProvider>
      </MessageContextProvider>

  </React.StrictMode>
);