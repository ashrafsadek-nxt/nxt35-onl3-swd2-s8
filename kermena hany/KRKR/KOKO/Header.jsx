import { useTheme } from "../hooks/use-context/ThemeContext";
import ThemeToggle from "../hooks/use-context/ThemeToggle";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header
      style={{
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h1>Header</h1>
      <p>Current Theme: {theme}</p>
      <ThemeToggle />
    </header>
  );
}