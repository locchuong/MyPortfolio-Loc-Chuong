import { red } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
// A custom theme for this app
let theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#171c28",
      light: "#61dafb",
      dark: "#21a1c4",
    },
    secondary: {
      main: "#b5ecfb",
      light: "#61dafb",
      dark: "#21a1c4",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#171c28",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: "20px 10px",
        margin: "10px",
        backgroundColor: "#fff", // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: "5px",
      },
    },
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "0.5em",
        },
        "*::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#8699cc",
          outline: "1px solid #8699cc",
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
