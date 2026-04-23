import { Link } from 'react-router-dom';
import { SERVICES } from '../../constants';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Classic Arts</h3>
            <p className="text-sm text-zinc-400">
              India's premier signage manufacturing and fabrication company, delivering high-quality commercial and residential signs.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={s.path} className="hover:text-white transition-colors">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Portfolio</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">About Us</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="text-sm text-zinc-400 space-y-2">
              <p>Mumbai, Maharashtra, India</p>
              <p>Phone: +91 9076272582</p>
              <p>Email: hello@classicarts.example.com</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 text-sm text-zinc-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Classic Arts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
