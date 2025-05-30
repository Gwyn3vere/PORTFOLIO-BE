export function useTheme() {
  const setTheme = (theme) => {
    document.body.classList.remove("light", "dark", "blue");
    document.body.classList.add(theme);
  };

  return { setTheme };
}
