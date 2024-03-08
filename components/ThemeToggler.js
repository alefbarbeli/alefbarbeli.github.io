import { useEffect, useState } from 'react';

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || false;
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <a href="#" className='lnk' onClick={toggleDarkMode}>
      <span className={darkMode ? 'ion ion-ios-sunny-outline' : 'ion ion-ios-moon'} />
    </a>
  );
};

export default ThemeToggler;