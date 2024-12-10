import Banner from "./components/pages/Banner";
import Navbar from "./components/pages/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto px-9">
        <Banner />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
