import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import Enhancements from './Enhancements.tsx';
import VisualizerPage from './VisualizerPage.tsx';
import ProductKnowledgePage from './ProductKnowledgePage.tsx';
import {SystemAuthorityPage,SystemsAuthorityIndex,authoritySystemSlugs} from './SystemAuthority.tsx';
import {RegionalInstallerPage,regionalCities} from './RegionalPages.tsx';
import './index.css';

export function Root({pathOverride}:{pathOverride?:string}={}){
 const path=pathOverride||(typeof window==='undefined'?'/':window.location.pathname.replace(/\/+$/,'')||'/');
 if(path==='/visualizer') return <VisualizerPage/>;
 if(path==='/product-knowledge') return <ProductKnowledgePage/>;
 if(path==='/systems') return <SystemsAuthorityIndex/>;
 const systemMatch=path.match(/^\/systems\/([^/]+)$/); const systemSlug=systemMatch?.[1];
 if(systemSlug && authoritySystemSlugs.includes(systemSlug)) return <SystemAuthorityPage slug={systemSlug}/>;
 const match=path.match(/^\/installers\/([^/]+)$/); const slug=match?.[1];
 if(slug && regionalCities.some(city=>city[0]===slug)) return <RegionalInstallerPage slug={slug}/>;
 return <><App ssrPath={pathOverride}/>{!pathOverride&&<Enhancements/>}</>;
}

if(typeof document!=='undefined')createRoot(document.getElementById('root')!).render(<StrictMode><Root/></StrictMode>);
