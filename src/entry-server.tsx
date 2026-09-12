import {renderToString} from 'react-dom/server';
import {Root} from './main';
import {authoritySystemSlugs} from './SystemAuthority';
import {regionalCities} from './RegionalPages';

export const routes=[
  '/', '/systems', ...authoritySystemSlugs.map(slug=>`/systems/${slug}`),
  '/visualizer', '/product-knowledge', '/technical-library', '/contractors', '/gallery',
  '/projects/837-beatty-tectum-acoustic-panels',
  '/contractors/rambo-walls-ceilings',
  '/gallery/rwc-projects',
  ...regionalCities.map(([slug])=>`/installers/${slug}`),
];

export function render(path:string){return renderToString(<Root pathOverride={path}/>)}
