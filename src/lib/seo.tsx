import { useEffect } from 'react';

export function useSEO({
  title,
  description,
  image,
  canonical,
  structuredData
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  structuredData?: object;
}) {
  useEffect(() => {
    if (title) document.title = title + ' | Arul Trust';

    if (description) {
      let desc = document.querySelector('meta[name="description"]');
      if (!desc) {
        desc = document.createElement('meta');
        desc.setAttribute('name', 'description');
        document.head.appendChild(desc);
      }
      desc.setAttribute('content', description);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute('content', description);
    }

    if (image) {
      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      ogImage.setAttribute('content', image);

      let twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (!twitterImage) {
        twitterImage = document.createElement('meta');
        twitterImage.setAttribute('name', 'twitter:image');
        document.head.appendChild(twitterImage);
      }
      twitterImage.setAttribute('content', image);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    if (structuredData) {
      // Add or replace JSON-LD script
      let el = document.getElementById('structured-data-script');
      if (!el) {
        const s = document.createElement('script');
        s.type = 'application/ld+json';
        s.id = 'structured-data-script';
        document.head.appendChild(s);
        el = s;
      }
      el.textContent = JSON.stringify(structuredData, null, 2);
    }
  }, [title, description, image, canonical, structuredData]);
}
