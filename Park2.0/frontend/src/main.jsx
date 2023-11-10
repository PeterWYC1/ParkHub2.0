import './styles/main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MessageContextProvider } from './context/messageContext';
import { UserContextProvider } from './context/userContext';
import { MessageContextProvider2 } from './context/messageContReserva';

import Ruteo from './Ruteo';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* Contextos */}
    <MessageContextProvider2>
      <MessageContextProvider>
        <UserContextProvider>

          {/* Rutas */}
          <Ruteo />

        </UserContextProvider>
      </MessageContextProvider>
      </MessageContextProvider2>

  </React.StrictMode>
);