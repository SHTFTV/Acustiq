import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import Enhancements from './Enhancements.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<StrictMode><App /><Enhancements /></StrictMode>);
