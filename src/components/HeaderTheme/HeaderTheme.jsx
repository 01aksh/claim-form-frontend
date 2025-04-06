import { useTheme } from "../../context/ThemeContext";

const HeaderTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      {" "}
      <header className={`header-${theme}`}>
        <h1>My App</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <p>Current Theme is ===== {theme}</p>
      </header>
    </div>
  );
};

export default HeaderTheme;
