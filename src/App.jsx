import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FooterContact from './components/FooterContact';

function App() {
  return (
    <div className="font-inter text-neutral-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <FooterContact />
    </div>
  );
}

export default App;
