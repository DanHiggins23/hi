import useLocalStorage from 'use-local-storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import './DarkModeToggle.scss';

export default function DarkModeToggle() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light',
  );
  const isDarkMode = theme === 'dark';

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isDarkMode ? 'enabled' : 'disabled'}`}>
        <span className="hidden">
          {isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </span>
        <div className="icons">
          <FontAwesomeIcon icon={faSun} />
          <FontAwesomeIcon icon={faMoon} />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isDarkMode}
          onChange={() => setTheme(isDarkMode ? 'light' : 'dark')}
        />
      </div>
    </label>
  );
}
