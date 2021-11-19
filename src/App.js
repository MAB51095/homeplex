import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="Main">
        <Carousel />
        {/* Content */}
      </section>
      <Footer />
    </div>
  );
}

export default App;
