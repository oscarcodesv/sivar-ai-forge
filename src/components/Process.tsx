import { Card, CardContent } from "@/components/ui/card";
import { Search, Lightbulb, Rocket, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Evaluamos tus procesos",
      description: "Analizamos en detalle cómo funciona tu negocio para identificar las mejores oportunidades de automatización."
    },
    {
      number: "02", 
      icon: Lightbulb,
      title: "Diseñamos una solución con IA a medida",
      description: "Creamos una estrategia personalizada que se adapte perfectamente a tus necesidades específicas."
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implementamos la automatización",
      description: "Ponemos en marcha la solución y te acompañamos hasta lograr resultados concretos y medibles."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Así es como{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              te ayudamos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso simple y transparente que garantiza resultados desde el primer día
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline for desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                    {/* Timeline dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-glow z-10"></div>
                    
                    <Card className="mt-16 hover-lift shadow-elegant border-0 bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-8 text-center space-y-6">
                        <div className="space-y-4">
                          <div className="text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent opacity-30">
                            {step.number}
                          </div>
                          <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                            <step.icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <Card className="hover-lift shadow-elegant border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 space-y-4">
                        <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent opacity-40">
                          {step.number}
                        </div>
                        <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                          <step.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      
                      <div className="space-y-3 flex-1">
                        <h3 className="text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-6">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center fade-in-up">
          <div className="bg-gradient-subtle rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Tienes un proceso que te gustaría automatizar?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Conversemos sobre cómo la IA puede transformar tu negocio
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>✓ Consulta gratuita</span>
              <span>✓ Sin compromisos</span>
              <span>✓ Resultados medibles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;