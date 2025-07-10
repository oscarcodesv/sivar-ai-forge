import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "¡Solicitud enviada exitosamente!",
      description: "Nuestro equipo te contactará en menos de 24 horas.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-dark/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Empieza tu transformación con{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              inteligencia
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Déjanos tus datos y te mostraremos cómo la IA puede trabajar para ti. 
            Nuestro equipo te contactará en menos de 24 horas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm shadow-elegant fade-in-up">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white mb-2">
                  Solicita tu consulta gratuita
                </CardTitle>
                <p className="text-gray-300">
                  Sin compromisos, solo resultados
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Nombre completo</Label>
                      <Input 
                        id="name"
                        placeholder="Tu nombre"
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white">Empresa</Label>
                      <Input 
                        id="company"
                        placeholder="Nombre de tu empresa"
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">Teléfono / WhatsApp</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="+503 0000-0000"
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Correo electrónico</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="automation" className="text-white">¿Qué deseas automatizar?</Label>
                    <Textarea 
                      id="automation"
                      placeholder="Cuéntanos sobre los procesos que te gustaría automatizar en tu empresa..."
                      rows={4}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full text-lg py-6 rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando solicitud..."
                    ) : (
                      <>
                        Enviar solicitud
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-8 fade-in-up" style={{animationDelay: '0.2s'}}>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Respuesta rápida</h3>
                      <p className="text-gray-300 text-sm">
                        Te contactaremos en menos de 24 horas para agendar una consulta personalizada
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Sin compromisos</h3>
                      <p className="text-gray-300 text-sm">
                        La consulta inicial es completamente gratuita y sin obligaciones
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-white font-semibold mb-4 text-center">
                  ¿Tienes preguntas urgentes?
                </h3>
                <div className="space-y-3">
                  <Button 
                    variant="glass" 
                    className="w-full justify-start text-white"
                    asChild
                  >
                    <a href="https://wa.me/50300000000" target="_blank" rel="noopener noreferrer">
                      📱 WhatsApp: +503 0000-0000
                    </a>
                  </Button>
                  <Button 
                    variant="glass" 
                    className="w-full justify-start text-white"
                    asChild
                  >
                    <a href="mailto:contacto@sivaria.com">
                      ✉️ contacto@sivaria.com
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;