

const LanguageInputDetector = (text) => {
  if (!text) return 'unknown';

  // Hebrew characters are from \u0590 to \u05FF
  const hebrewRegex = /[\u0590-\u05FF]/;
  const englishRegex = /[A-Za-z]/;

  if (hebrewRegex.test(text)) return 'he';
  if (englishRegex.test(text)) return 'en';
  return 'unknown';
}

export default LanguageInputDetector;