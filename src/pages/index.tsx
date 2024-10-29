import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    // Get the language code from the URL (e.g., 'fr' from '/fr')
    const lang = window.location.pathname.split('/')[1];
    
    // Redirect to the language-specific page if lang exists, or to /learn/intro by default
    if (lang) {
      history.push(`/${lang}/learn/intro`);
    } else {
      history.push('/learn/intro'); // Default path without language prefix
    }
  }, [history]);

  return null;
}