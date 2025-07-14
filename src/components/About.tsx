import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, HeartHandshake, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Creación de páginas web",
      description: "Sitios web modernos y optimizados para tu negocio"
    },
    {
      icon: HeartHandshake,
      title: "Contratación de personal para empresas en el extranjero",
      description: "Conectamos talento salvadoreño con oportunidades globales"
    },
    {
      icon: Shield,
      title: "Soluciones con IA",
      description: "Automatización inteligente para optimizar tus procesos"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            IA accesible, local y pensada para{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              el futuro
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              IA ElSalvador.com es una empresa salvadoreña que diseña soluciones a la medida de tu negocio.
            </p>
            <p className="text-2xl font-semibold text-foreground">
              Olvídate de sistemas genéricos. Nuestra tecnología se adapta a ti, no al revés.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift border-0 shadow-elegant bg-card/50 backdrop-blur-sm fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mockup Section */}
        <div className="mt-20 text-center fade-in-up">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-16 shadow-elegant">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div className="h-4 bg-primary/20 rounded-full"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-primary/20 rounded-full w-5/6"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-2/3"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-primary/20 rounded-full w-4/5"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-1/3"></div>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <div className="w-12 h-12 gradient-primary rounded-full animate-pulse-glow"></div>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 text-lg">
              Panel de automatización inteligente - Visualiza el control total de tus procesos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;