import { red } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
// A custom theme for this app
let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#AEAAF9", // Header Background
      light: "#61dafb",
      dark: "#61dafb",
    },
    secondary: {
      main: "#AEAAF9",
      light: "#61dafb",
      dark: "#61dafb",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#171c28",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    }
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
        backgroundColor: "#171c28", // 5d737e
      },
    },
    MuiPopover: {
      paper: {
        boxShadow: "0px 0px 25px 10px #3F3D56",
      }
    },
    MuiButton: {
      root: {
        margin: "5px",
        color: "black",
        backgroundColor:"#AEAAF9",
      },
      contained: {
          backgroundColor:"none",
          '&:hover': {
            backgroundColor:"#FFFFFF",
          }
      },
      outlined: {
        backgroundColor:"#AEAAF9",
        color:"#000000",
        borderColor:"#000000",
      }
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
