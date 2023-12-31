import { useEffect } from 'react'
import "../Styles/translate.css";

function Translate() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      )
    };

    return () => {
        document.body.removeChild(script);
        delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <>
      <div id="google_translate_element"></div>
    </>
  )
}

export default Translate