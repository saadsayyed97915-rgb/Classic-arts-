import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI } from '@google/genai';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES, PHONE_NUMBER } from '../constants';
import { Loader2, Sparkles, MessageCircle } from 'lucide-react';

export function SmartLeadRouter() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSmartRoute = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      if (!process.env.GEMINI_API_KEY) {
        console.warn("No Gemini API key found, falling back to primitive matching");
        fallbackRoute();
        return;
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const prompt = `
        A user on a signage company website wants the following: "${query}".
        Categorize their intent into exactly one of these service IDs based on their request:
        1. "signage-manufacturer" (if they need bulk signage, shop signs, LEDs for businesses, franchises)
        2. "custom-nameplate-designer" (if they need a home nameplate, personal door sign, apartment nameboard, wood/acrylic home sign)
        3. "metal-fabrication-signage" (if they specify metalwork, CNC, laser cut, 3D steel letters, custom structural sign)
        4. "building-signage-contractor" (if they need a society name board, big mall/outdoor building sign, contractor work, massive projects)

        Return ONLY the exact service ID string, nothing else. If unclear, guess the most likely or default to 'signage-manufacturer'.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite-preview",
        contents: prompt,
      });

      const resultId = response.text?.trim() || '';
      
      const matchedService = SERVICES.find(s => s.id === resultId);
      
      if (matchedService) {
        // We route them to WhatsApp directly with a smart pre-filled message, or to the page based on UX.
        // Let's actually direct them to WhatsApp, or we can send them to the specific page. Let's do both!
        // We'll open WhatsApp with their query + prefilled message.
        const msg = encodeURIComponent(`${matchedService.whatsappMessage}\n\nMy requirement: ${query}`);
        window.open(`https://wa.me/${PHONE_NUMBER}?text=${msg}`, '_blank');
      } else {
        fallbackRoute();
      }

    } catch (error) {
      console.error("Error during smart lead routing:", error);
      fallbackRoute();
    } finally {
      setIsLoading(false);
    }
  };

  const fallbackRoute = () => {
    const queryLower = query.toLowerCase();
    const matchedService = SERVICES.find(s => s.traits.some(t => queryLower.includes(t))) || SERVICES[0];
    const msg = encodeURIComponent(`${matchedService.whatsappMessage}\n\nMy requirement: ${query}`);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Sparkles className="w-6 h-6 text-primary" />
          Smart Contact 
        </CardTitle>
        <CardDescription className="text-base text-foreground/80">
          Not sure which service you need? Describe your project and our AI will instantly route you to the correct specialist via WhatsApp.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSmartRoute} className="flex flex-col sm:flex-row gap-3">
          <Input 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. 'I need a society name board' or 'Home nameplate'"
            className="flex-1 text-base bg-background"
            disabled={isLoading}
          />
          <Button type="submit" size="lg" disabled={isLoading} className="font-semibold whitespace-nowrap">
            {isLoading ? (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            ) : (
              <MessageCircle className="w-5 h-5 mr-2" />
            )}
            {isLoading ? 'Routing...' : 'Route My Request'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
