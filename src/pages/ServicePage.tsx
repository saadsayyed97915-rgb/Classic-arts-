import { useEffect } from 'react';
import { SERVICES, PHONE_NUMBER } from '../constants';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SmartLeadRouter } from '../components/SmartLeadRouter';

interface ServicePageProps {
  type: string;
}

export function ServicePage({ type }: ServicePageProps) {
  const service = SERVICES.find(s => s.title === type) || SERVICES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const whatsappMsg = encodeURIComponent(service.whatsappMessage);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Service Hero */}
      <section className="bg-zinc-950 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Dedicated Service</p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">{service.title}</h1>
          <p className="text-xl sm:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {service.headline}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-white text-zinc-950 hover:bg-zinc-200">
                {service.ctaText}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 px-4 border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-lg mb-8 text-muted-foreground">{service.description}</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                <span className="text-lg">{service.proofText}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                <span className="text-lg text-muted-foreground">{service.pricingHint}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0" />
                <span className="text-lg text-muted-foreground">Expert consultation & fast turnaround times</span>
              </li>
            </ul>

            <a href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="font-semibold shadow-sm">
                Discuss via WhatsApp <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
          
          <div className="rounded-3xl overflow-hidden aspect-square bg-muted shadow-2xl relative">
            <img 
              src={service.image} 
              alt={service.title} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Reusable Lead capture on inner pages */}
      <section className="py-24 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Looking for something else?</h2>
          <p className="text-muted-foreground mb-8">Our AI routing assistant can pinpoint exactly what you need.</p>
          <SmartLeadRouter />
        </div>
      </section>
    </div>
  );
}
