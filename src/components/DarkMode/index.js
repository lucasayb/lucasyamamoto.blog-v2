import React, { useState, useEffect } from 'react';
import * as S from './styled'

export const DarkMode = () => {

  const [theme, setTheme] = useState(null);

  const isDarkMode = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, [])
  return (
    <S.DarkModeWrapper onClick={() => {
      window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
    }}>
      <S.DarkMode />
    </S.DarkModeWrapper>
  )
}

export default DarkMode;