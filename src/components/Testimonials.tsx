import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Campos",
      position: "Gerente de Operaciones",
      company: "TechCorp SV",
      content: "Con IA ElSalvador.com automatizamos el 80% de nuestra atención al cliente. Ahora respondemos más rápido, con menos esfuerzo y nuestros clientes están más satisfechos que nunca.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Ramírez",
      position: "Director de Tecnología", 
      company: "Innovación Digital",
      content: "La implementación fue sorprendentemente fácil. En menos de un mes ya estábamos viendo resultados concretos en nuestros procesos de ventas.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "María González",
      position: "CEO",
      company: "Soluciones Empresariales",
      content: "IA ElSalvador.com nos ayudó a escalar nuestro negocio sin contratar más personal. La IA se encarga de las tareas repetitivas mientras nosotros nos enfocamos en crecer.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Lo que nuestros{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              clientes opinan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas salvadoreñas que ya están transformando sus operaciones con nuestras soluciones de IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-lift shadow-elegant border-0 bg-card/80 backdrop-blur-sm relative overflow-hidden fade-in-up"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              <CardContent className="p-8 space-y-6 relative z-10">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground leading-relaxed text-lg font-medium italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 fade-in-up">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  500+
                </div>
                <p className="text-muted-foreground">Procesos automatizados</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  95%
                </div>
                <p className="text-muted-foreground">Satisfacción del cliente</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  24/7
                </div>
                <p className="text-muted-foreground">Soporte especializado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;