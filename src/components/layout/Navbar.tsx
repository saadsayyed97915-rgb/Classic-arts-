import { Link } from 'react-router-dom';
import { SERVICES, PHONE_NUMBER } from '../../constants';
import { Phone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-sans font-bold text-xl tracking-tight">Classic Arts</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">Home</Link>
              {SERVICES.map((service) => (
                <Link key={service.id} to={service.path} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {service.shortTitle}
                </Link>
              ))}
            </div>
            
            <a 
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in your signage services.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link onClick={() => setIsOpen(false)} to="/" className="block px-3 py-2 text-base font-medium hover:bg-accent rounded-md">Home</Link>
            {SERVICES.map((service) => (
              <Link onClick={() => setIsOpen(false)} key={service.id} to={service.path} className="block px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent rounded-md">
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
