import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Users, 
  ShieldCheck, 
  Puzzle, 
  TrendingUp, 
  Zap 
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Ahorro de tiempo y recursos",
      description: "Automatiza tareas repetitivas y libera a tu equipo para actividades estratégicas"
    },
    {
      icon: Users,
      title: "Atención automatizada 24/7",
      description: "Responde a tus clientes las 24 horas, los 7 días de la semana sin interrupciones"
    },
    {
      icon: ShieldCheck,
      title: "Reducción de errores humanos",
      description: "Procesos consistentes y precisos que minimizan las equivocaciones"
    },
    {
      icon: Puzzle,
      title: "Integración con tus herramientas actuales",
      description: "Se conecta perfectamente con los sistemas que ya utilizas"
    },
    {
      icon: TrendingUp,
      title: "Mejora continua y escalabilidad",
      description: "Evoluciona con tu negocio y se adapta a nuevas necesidades"
    },
    {
      icon: Zap,
      title: "Optimización operativa inmediata",
      description: "Resultados visibles desde el primer día de implementación"
    }
  ];

  return (
    <section className="py-24 gradient-dark relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-purple-dark/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            ¿Por qué elegir{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              IA ElSalvador.com
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones de inteligencia artificial transforman la manera en que operas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover-lift bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-500 fade-in-up"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="w-8 h-1 bg-primary/30 rounded-full group-hover:bg-primary/60 transition-colors"></div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Checkmark indicator */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-sm text-primary font-medium">Beneficio incluido</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Únete a las empresas que ya están aprovechando el poder de la inteligencia artificial
            </p>
            <div className="inline-flex items-center gap-2 text-primary font-semibold">
              <span>Más de 500 procesos automatizados exitosamente</span>
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;