import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
// Removed hero image import

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-dark opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-purple-dark/20"></div>
      

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
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 rounded-xl hover-lift group">
                Empieza hoy
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="glass" size="lg" className="text-lg px-8 py-6 rounded-xl hover-lift text-white">
                Ver demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img alt="IA ElSalvador.com - Tecnología de inteligencia artificial" src="/lovable-uploads/36e20004-2775-4dda-9f2b-3620194d20fa.jpg" className="relative z-10 w-3/4 h-auto rounded-2xl shadow-elegant object-scale-down mx-auto" />
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
    </section>;
};
export default Hero;