const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if (theme === 'light') return '#FFFFFF';
  if (theme === 'dark') return '#0a061c';
}

export default getThemeColor;