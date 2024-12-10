import Banner from "./components/pages/Banner";
import Navbar from "./components/pages/Navbar";
import Services from "./components/pages/Services";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-9">
        <Banner />
        <Services />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
