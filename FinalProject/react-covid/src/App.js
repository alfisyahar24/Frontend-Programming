import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Province from "./pages/covid/Create";
import Indonesia from "./pages/covid/Indonesia";
import About from "./pages/covid/About";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/covid/indonesia" element={<Indonesia />} />
            <Route path="/covid/province" element={<Province />} />
            <Route path="/covid/about" element={<About />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
