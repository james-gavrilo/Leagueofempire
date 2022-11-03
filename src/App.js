import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { dark } from "./config/theme";
import "./assets/css/index.scss";
const darkTheme = createTheme(dark);

function App() {
  return (
    <BrowserRouter basename="">
      <ThemeProvider theme={darkTheme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
