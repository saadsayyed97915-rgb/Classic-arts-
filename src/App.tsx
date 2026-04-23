/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signage-manufacturer" element={<ServicePage type="Signage Manufacturer" />} />
            <Route path="/custom-nameplate-designer" element={<ServicePage type="Custom Nameplate Designer" />} />
            <Route path="/metal-fabrication-signage" element={<ServicePage type="Metal Fabrication Specialist" />} />
            <Route path="/building-signage-contractor" element={<ServicePage type="Building Signage Contractor" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
