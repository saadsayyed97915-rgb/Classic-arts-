import { Link } from 'react-router-dom';
import { SERVICES, PHONE_NUMBER } from '../constants';
import { SmartLeadRouter } from '../components/SmartLeadRouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, Factory, PenTool, Hammer, Building2 } from 'lucide-react';

const ICONS = {
  Factory,
  PenTool,
  Hammer,
  Building2
};

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-zinc-950 text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-zinc-950/40" />
          <img 
            src="https://images.unsplash.com/photo-1590846406792-0adc7f928f1e?q=80&w=2938&auto=format&fit=crop" 
            alt="Neon Signage Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-7xl font-sans font-bold tracking-tight mb-6 mt-12 text-white">
              Signage <span className="text-zinc-400">That Commands</span> Attention.
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 mb-10 max-w-2xl leading-relaxed">
              From premium home nameplates to massive building installations. We design, fabricate, and deliver at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in working with Classic Arts.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg h-14 px-8 font-semibold bg-white text-zinc-950 hover:bg-zinc-200">
                  Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 font-semibold border-zinc-700 bg-transparent text-white hover:bg-zinc-800">
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-10 border-b bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold tracking-wide text-muted-foreground uppercase mb-6">Trusted by India's fastest growing brands</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
            {/* Logos as text placeholders for pure design aesthetics */}
            {['RELIANCE', 'TATA Croma', 'HDFC BANK', 'LODHA', 'DMART'].map((brand, i) => (
              <span key={i} className="text-xl font-bold font-serif tracking-widest">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized signage and fabrication services tailored to your exact needs. Choose a category below to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.icon as keyof typeof ICONS];
              return (
                <Card key={service.id} className="relative group overflow-hidden flex flex-col border-2 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white border border-white/20">
                      {Icon && <Icon className="w-5 h-5" />}
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm font-semibold text-primary mb-3">"{service.headline}"</p>
                    <p className="text-muted-foreground text-sm flex-1 leading-relaxed">{service.description}</p>
                    
                    <Link to={service.path} className="inline-flex mt-6">
                      <Button variant="default" className="w-full font-semibold group-hover:bg-primary/90">
                        {service.ctaText} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Smart Lead Routing Section */}
      <section className="py-24 bg-zinc-50 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Not Sure Where to Start?</h2>
            <p className="text-lg text-muted-foreground">Tell our AI assistant what you need, and we'll connect you with the right specialist via WhatsApp immediately.</p>
          </div>
          <SmartLeadRouter />
        </div>
      </section>

      {/* Portfolio Split Section */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Our Work</h2>
              <p className="text-zinc-400 text-lg max-w-xl">Browse some of our best craftsmanship across different sectors and scale.</p>
            </div>
            <Button variant="outline" className="text-white border-zinc-700 bg-transparent hover:bg-zinc-800 hidden sm:inline-flex">
              View Entire Portfolio
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group relative aspect-square overflow-hidden bg-zinc-900 rounded-2xl">
              <img src="https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?q=80&w=2839&auto=format&fit=crop" alt="Commercial" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">Commercial</p>
                  <h3 className="text-2xl font-bold">Bulk Retail Signage</h3>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4">
               <div className="group relative overflow-hidden bg-zinc-900 rounded-2xl">
                 <img src="https://images.unsplash.com/photo-1627521743621-0498a4d46777?q=80&w=2835&auto=format&fit=crop" alt="Nameplates" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                   <div>
                     <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">Residential</p>
                     <h3 className="text-xl font-bold">Custom Nameplates</h3>
                   </div>
                 </div>
               </div>
               <div className="group relative overflow-hidden bg-zinc-900 rounded-2xl">
                 <img src="https://images.unsplash.com/photo-1541888086925-0c770fba100c?q=80&w=3074&auto=format&fit=crop" alt="Building" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                   <div>
                     <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">Infrastructure</p>
                     <h3 className="text-xl font-bold">Large Scale Fabrication</h3>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Don't just take our word for it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Classic Arts delivered 50 glowing signboards for our retail expansion ahead of schedule. Exceptional quality and professionalism.",
                author: "Rajesh Sharma",
                role: "Director of Operations, Future Retail"
              },
              {
                text: "We ordered a custom 3D acrylic nameplate for our new home. It looks stunning and the finishing is incredibly premium.",
                author: "Priya Desai",
                role: "Homeowner, Mumbai"
              },
              {
                text: "The metal fabrication work they did for our office lobby is a masterpiece. Highly recommended for custom structural signage.",
                author: "Amit Patel",
                role: "Lead Architect, Zenith Designs"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border">
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 line-clamp-4 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-zinc-900">{t.author}</p>
                  <p className="text-sm text-zinc-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">From initial connection to final installation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[ 
              { step: '01', title: 'Consultation', desc: 'Discuss your requirements via WhatsApp or call.' },
              { step: '02', title: 'Design & Quote', desc: 'We provide concept visualisations and a transparent quote.' },
              { step: '03', title: 'Fabrication', desc: 'Precision manufacturing in our state-of-the-art facility.' },
              { step: '04', title: 'Installation', desc: 'Safe, compliant delivery and installation by experts.' }
            ].map((process, i) => (
              <div key={i} className="relative p-6 border rounded-2xl bg-card">
                <span className="text-6xl font-serif font-bold text-muted/30 absolute -top-4 -left-2 z-0">{process.step}</span>
                <div className="relative z-10 pt-6">
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-zinc-900 border border-zinc-800 p-12 md:p-16 rounded-[3rem]">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">Ready to upgrade your space?</h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Connect with us on WhatsApp to discuss your project. We usually reply within 15 minutes during business hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/${PHONE_NUMBER}?text=Hi%2C%20I%20have%20a%20new%20signage%20project%20to%20discuss.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-green-600 hover:bg-green-700 text-white border-0 shadow-lg shadow-green-900/20">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
