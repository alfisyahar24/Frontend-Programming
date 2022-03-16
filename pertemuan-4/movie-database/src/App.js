import "./App.css";
/**
 * Import Component Hello
 */
// import Hello from "./components/Hello";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <h2>This is Create React App</h2>
      {/*
        Memanggil Component Hello.
        Mengirim props name. 
       */}
      {/* <Hello name="alfisyahar" /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
