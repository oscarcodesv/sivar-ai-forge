import { Separator } from "@/components/ui/separator";
import { MessageCircle, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#about" },
    { name: "Beneficios", href: "#benefits" },
    { name: "Contacto", href: "#contact" }
  ];

  const socialLinks = [
    { 
      name: "WhatsApp", 
      icon: MessageCircle, 
      href: "https://wa.me/50300000000",
      color: "hover:text-green-400"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://linkedin.com/company/sivaria",
      color: "hover:text-blue-400"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://instagram.com/sivaria",
      color: "hover:text-pink-400"
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      href: "https://youtube.com/@sivaria",
      color: "hover:text-red-400"
    }
  ];

  return (
    <footer className="bg-black-dark text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
                SIVAR IA
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                SIVAR IA es una empresa salvadoreña dedicada a democratizar la inteligencia artificial 
                para los negocios de la región. Transformamos procesos complejos en soluciones simples y efectivas.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Contáctanos:</p>
              <div className="space-y-1">
                <a 
                  href="mailto:contacto@sivaria.com" 
                  className="text-primary hover:text-primary-glow transition-colors block"
                >
                  contacto@sivaria.com
                </a>
                <a 
                  href="tel:+50300000000" 
                  className="text-gray-300 hover:text-white transition-colors block"
                >
                  +503 0000-0000
                </a>
                <p className="text-gray-400 text-sm">San Salvador, El Salvador</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-white">Enlaces rápidos</h4>
            <nav className="space-y-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Política de privacidad
              </a>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-white">Síguenos</h4>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-gray-300 transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © {currentYear} SIVAR IA. Todos los derechos reservados.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span>Hecho con ❤️ en</span>
              {/* Bandera de El Salvador */}
              <div className="flex flex-col w-6 h-4 border border-gray-600 rounded-sm overflow-hidden shadow-sm">
                <div className="h-1/3 bg-blue-600"></div>
                <div className="h-1/3 bg-white"></div>
                <div className="h-1/3 bg-blue-600"></div>
              </div>
              <span>El Salvador</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary">Innovación local, impacto global</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;