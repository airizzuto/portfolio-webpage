import { useContext } from "react";
import { LanguageContext } from "../contexts/Language";

// get text according to id & current language
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
};