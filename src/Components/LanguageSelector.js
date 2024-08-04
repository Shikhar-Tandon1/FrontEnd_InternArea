import React, {useState, useEffect} from "react";
import i18n from "../i18n/i18n";


const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); 
  

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);  
        setSelectedLanguage(e.target.value);
        localStorage.setItem("lang", e.target.value);
    }
    const languageOptions = {
        zh: 'green',
        en: 'white',
        fr: 'yellow',
        hi: 'blue',
        pt: 'white',
        es: 'white'
      };

    useEffect(() => {
        document.body.style.backgroundColor = languageOptions[selectedLanguage];
      });
    return (
       
        <select defaultValue={selectedLanguage} onChange={chooseLanguage}>  
            <option value="zh">中文</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="hi">हिंदी</option>
            <option value="pt">Português</option>
            <option value="es">Español</option>
        </select>

    );    

};
export default LanguageSelector;
