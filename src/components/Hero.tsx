import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-bot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-dark opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-purple-dark/20"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary-glow rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-primary/70 rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-primary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary font-medium">
                <Sparkles className="w-4 h-4" />
                Soluciones IA en El Salvador
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Soluciones{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  reales
                </span>{" "}
                para empresas{" "}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  reales
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Automatiza tus procesos, mejora la atención al cliente y lleva tu negocio al siguiente nivel con{" "}
              <span className="text-primary font-semibold">inteligencia artificial personalizada</span>, desarrollada en El Salvador.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-xl hover-lift group"
              >
                Empieza hoy
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="glass" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-xl hover-lift text-white"
              >
                Ver demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-dark opacity-20 rounded-2xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="SIVAR IA - Asistente virtual inteligente"
                className="relative z-10 w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Descubre más</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;