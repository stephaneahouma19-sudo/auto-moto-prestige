import { useEffect } from 'react';

const SITE_NAME = 'AUTO MOTO PRESTIGE';
export function PageMeta({ title, description, image }: { title: string; description?: string; image?: string }) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    document.title = fullTitle;
    const summary = description ?? 'AUTO MOTO PRESTIGE — vente de voitures et de motos.';
    setMeta('description', summary);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', summary, 'property');
    if (image) setMeta('og:image', image, 'property');
  }, [title, description, image]);
  return null;
}
function setMeta(key: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); }
  element.content = content;
}
