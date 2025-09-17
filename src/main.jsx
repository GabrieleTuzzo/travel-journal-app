import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from './contexts/GlobalContextProvider';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename="/travel-journal-app">
            <GlobalContextProvider>
                <App />
            </GlobalContextProvider>
        </BrowserRouter>
    </StrictMode>
);
