import { StrictMode } from 'react'
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import englishContent from './translations/english/common.js'
import arabicContent from './translations/arabic/common.js'

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: englishContent
    },
    ar: {
      common: arabicContent
    },
  },
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
