import { useTheme } from 'next-themes';
import { useCallback } from 'react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const onChange = useCallback(
    (e) => {
      setTheme(e.currentTarget.value);
    },
    [setTheme]
  );
  return (
    <select
      value={theme}
      onChange={onChange}
      className="appearance-none shadow-none text-[color:var(--foreground)] h-8 text-sm border border-[color:var(--accents-2)] px-3 py-0 rounded-[5px] border-solid focus:rounded bg-[var(--background)] focus:outline-none"
    >
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
};

export default ThemeSwitcher;
