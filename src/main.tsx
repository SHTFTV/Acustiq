import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import Enhancements from './Enhancements.tsx';
import VisualizerPage from './VisualizerPage.tsx';
import {RegionalInstallerPage,regionalCities} from './RegionalPages.tsx';
import './index.css';

function Root(){
 if(/^\/visualizer\/?$/.test(window.location.pathname)) return <VisualizerPage/>;
 const match=window.location.pathname.match(/^\/installers\/([^/]+)\/?$/);
 const slug=match?.[1];
 if(slug && regionalCities.some(city=>city[0]===slug)) return <RegionalInstallerPage slug={slug}/>;
 return <><App/><Enhancements/></>;
}

createRoot(document.getElementById('root')!).render(<StrictMode><Root/></StrictMode>);
