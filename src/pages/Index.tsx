import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Scale, 
  Shield, 
  Users, 
  Clock,
  CheckCircle,
  Star,
  FileText,
  Gavel,
  Home,
  Heart
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/law-firm-hero.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const practiceAreas = [
    { icon: Scale, title: "Civil Law", description: "Comprehensive civil litigation and dispute resolution services" },
    { icon: Shield, title: "Criminal Law", description: "Expert criminal defense and prosecution services" },
    { icon: Heart, title: "Matrimonial & Family Law", description: "Sensitive handling of family matters and matrimonial disputes" },
    { icon: Home, title: "Property Disputes", description: "Resolution of property-related legal issues and transactions" },
    { icon: FileText, title: "Legal Documentation", description: "Complete assistance for official documents and certifications" }
  ];

  const whyChooseUs = [
    { icon: Users, title: "Experienced Legal Team", description: "Decades of combined legal expertise" },
    { icon: Clock, title: "Affordable Consultation", description: "Transparent pricing with no hidden costs" },
    { icon: CheckCircle, title: "Hassle-free Process", description: "Streamlined legal procedures for your convenience" },
    { icon: Gavel, title: "Transparent Results", description: "Clear communication and honest legal advice" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Ambit Law Partners helped me resolve my property dispute efficiently. Their professional approach and dedication were exceptional.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      text: "The team's expertise in family law matters is commendable. They listened to my concerns and provided practical solutions.",
      rating: 5
    },
    {
      name: "Vikash Singh",
      text: "Excellent service for legal documentation. Made the entire process smooth and hassle-free.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-serif font-bold text-law-blue">Ambit Law Partners</h1>
              <p className="text-sm text-law-grey">Lawyers Who Listen. Solutions That Work.</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button variant="default" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Ambit Law Partners
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              Lawyers Who Listen. Solutions That Work.
            </p>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Professional legal services with a personal touch. We prioritize understanding your needs 
              before crafting effective legal solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-law-gold hover:bg-law-gold/90 text-law-blue font-semibold px-8 py-3">
                Book a Free Consultation
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-law-blue">
                  <Phone className="h-5 w-5 mr-2" />
                  Call
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-law-blue">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-law-blue">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-law-grey-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-law-blue mb-6">
              About Ambit Law Partners
            </h2>
            <p className="text-lg text-law-grey mb-8 leading-relaxed">
              At Ambit Law Partners, we believe that effective legal representation begins with listening. 
              Our team of experienced attorneys is dedicated to understanding your unique situation and 
              delivering practical, results-oriented legal solutions.
            </p>
            <p className="text-lg text-law-grey leading-relaxed">
              <strong className="text-law-blue">Our Mission:</strong> To provide accessible, professional 
              legal services while maintaining the highest standards of integrity and client care. We are 
              committed to being your trusted legal advisors, offering transparent guidance and achieving 
              favorable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-law-blue mb-4">
              Practice Areas
            </h2>
            <p className="text-lg text-law-grey max-w-2xl mx-auto">
              Comprehensive legal services across multiple practice areas to meet all your legal needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="card-elegant p-6 text-center">
                <area.icon className="h-12 w-12 text-law-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-law-blue mb-3">{area.title}</h3>
                <p className="text-law-grey leading-relaxed">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-law-grey-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-law-blue mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-law-grey max-w-2xl mx-auto">
              Discover what sets Ambit Law Partners apart in providing exceptional legal services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-law-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-law-gold" />
                </div>
                <h3 className="text-lg font-semibold text-law-blue mb-2">{reason.title}</h3>
                <p className="text-law-grey text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-law-blue mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-law-grey max-w-2xl mx-auto">
              Read what our satisfied clients have to say about our legal services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-law-gold fill-current" />
                  ))}
                </div>
                <p className="text-law-grey mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-law-blue">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-law-grey-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-law-blue mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-law-grey">
                Get in touch for a free consultation. We're here to help with your legal needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Card className="card-elegant p-6">
                  <h3 className="text-xl font-semibold text-law-blue mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <Textarea
                      name="message"
                      placeholder="Describe your legal matter..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                    <Button type="submit" className="w-full bg-law-blue hover:bg-law-blue-light text-white">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-law-blue mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-law-gold/10 p-2 rounded">
                        <Phone className="h-5 w-5 text-law-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-law-blue">Phone</p>
                        <p className="text-law-grey">+91 98765 43210</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-law-gold/10 p-2 rounded">
                        <Mail className="h-5 w-5 text-law-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-law-blue">Email</p>
                        <p className="text-law-grey">contact@ambitlawpartners.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-law-gold/10 p-2 rounded">
                        <MapPin className="h-5 w-5 text-law-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-law-blue">Office</p>
                        <p className="text-law-grey">123 Legal District, New Delhi, India</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-law-blue mb-3">Quick Contact</h4>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-law-gold text-law-gold hover:bg-law-gold hover:text-white">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="border-law-blue text-law-blue hover:bg-law-blue hover:text-white">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-law-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Ambit Law Partners</h3>
              <p className="text-white/80 mb-4">
                Lawyers Who Listen. Solutions That Work.
              </p>
              <p className="text-white/60 text-sm">
                Professional legal services with integrity and dedication to client success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>Civil Law</li>
                <li>Criminal Law</li>
                <li>Matrimonial & Family Law</li>
                <li>Property Disputes</li>
                <li>Legal Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>Phone: +91 98765 43210</p>
                <p>Email: contact@ambitlawpartners.com</p>
                <p>Office: 123 Legal District, New Delhi</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2024 Ambit Law Partners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;