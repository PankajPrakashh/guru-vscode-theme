const fs = require("fs").promises;
const getTheme = require("./theme");

const lightTheme = getTheme({
  style: "light",
  name: "Guru Light",
});

// Write themes
fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([fs.writeFile("./themes/light-color-theme.json", JSON.stringify(lightTheme, null, 2))]))
  .catch(() => process.exit(1));
