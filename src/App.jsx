import Banner from "./components/pages/Banner";
import ClientSay from "./components/pages/ClientSay";
import ContactUs from "./components/pages/ContactUs";
import Faq from "./components/pages/Faq";
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
        <ClientSay />
        <Faq />
        <ContactUs />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
