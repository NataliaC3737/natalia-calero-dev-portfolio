const theme = {
  fontFamily: {
    "bagel-fat-one": ["var(--font-bagel-fat-one)"],
    afacad: ["var(--font-afacad)"],
  },
  colors: {
    primary: "var(--primary-color)",
    secondary: "var(--secondary-color)",
    background: "var(--background-color)",
    surface: "var(--surface-color)",
    border: "var(--border-color)",
    brown: {
      coffee: "var(--brown-coffee)", // Texto principal
      dark: "var(--brown-dark)", // Encabezados o fuerte
      muted: "var(--brown-muted)", // Texto apagado o secundario
    },
  },
  screens: {
    xs: "390px", // mobile
    sl: "900px", // tablet
    lg: "1280px", // pantallas pc pequeño-medianos
    xl: "1400x", // pantallas pc grandes
  },
};

export default theme;
