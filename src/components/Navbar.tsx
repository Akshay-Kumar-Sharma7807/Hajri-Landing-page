import { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-primary-500" />
              <span className="font-display text-white text-xl font-bold">Hajri</span>
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" onClick={() => handleScrollToSection('features')} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Features</Link>
          <Link to="/solutions" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Solutions</Link>
          <Link to="/" onClick={() => handleScrollToSection('pricing')} className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Pricing</Link>
          <Link to="/resources" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Resources</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">Contact</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium">
            Login
          </button>
          <button className="bg-primary-500 text-white px-6 py-2.5 rounded-lg hover:bg-primary-600 transition-all duration-200 shadow-glow text-sm font-medium">
            Try Free
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg bg-gray-800/50 text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-md animate-fade-in">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <Link to="/" onClick={() => handleScrollToSection('features')} className="text-gray-300 hover:text-white py-2 transition-colors duration-200 font-medium">Features</Link>
            <Link to="/solutions" className="text-gray-300 hover:text-white py-2 transition-colors duration-200 font-medium" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
            <Link to="/" onClick={() => handleScrollToSection('pricing')} className="text-gray-300 hover:text-white py-2 transition-colors duration-200 font-medium">Pricing</Link>
            <Link to="/resources" className="text-gray-300 hover:text-white py-2 transition-colors duration-200 font-medium" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
            <Link to="/about" className="text-gray-300 hover:text-white py-2 transition-colors duration-200 font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white py-2 transition-colors duration-200 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <button className="text-white py-2 transition-colors duration-200 font-medium text-left">Login</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
