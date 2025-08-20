import React from 'react';
import { 
  MapPin, 
  Building2, 
  DollarSign, 
  Users, 
  Mail, 
  Phone, 
  ExternalLink,
  Palette,
  Brush,
  Layers,
  Sparkles,
  Package,
  Lightbulb,
  Rocket,
  Handshake,
  Globe,
  Linkedin,
  Instagram,
  Twitter
} from 'lucide-react';


function App() {
  return (
    
    <div className="min-h-screen bg-dark-charcoal text-silver">
      {/* Header */}
      <header className="bg-metallic-gradient shadow-2xl border-b border-metallic-gray/50 sticky top-0 z-50 backdrop-blur-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://res.cloudinary.com/dvkcwmkua/image/upload/v1742798692/aroora-og-image_gusfw0.png" 
                  alt="Arooracro Logo" 
                  className="h-16 w-20 rounded-lg shadow-lg animate-pulse-glow object-cover"
                />
                <div>
                  <h1 className="text-3xl font-bold text-silver tracking-tight">Arooracro</h1>
                  <p className="text-sm text-neon-blue font-medium">Innovating Preclinical Research</p>
                </div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#job-details" className="text-silver hover:text-neon-blue transition-colors duration-300 font-medium">Job Details</a>
              <a href="#skills" className="text-silver hover:text-neon-blue transition-colors duration-300 font-medium">Skills</a>
              <a href="#benefits" className="text-silver hover:text-neon-blue transition-colors duration-300 font-medium">Benefits</a>
              <a href="#apply" className="text-silver hover:text-neon-blue transition-colors duration-300 font-medium">Apply</a>
            </nav>
          </div>
        </div>
      </header>
  

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-dark-gradient">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-neon-blue/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-silver/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-neon-blue/40 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              We're Hiring |{' '}
              <span className="bg-neon-gradient bg-clip-text text-transparent animate-pulse-glow">
                Graphic Designer
              </span>
            </h1>
            <p className="text-xl text-silver/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join us in creating impactful designs for labels, posters, and products that shape the future of preclinical research.
            </p>
            <a 
              href="https://forms.gle/H361z4juTcVVuu3A6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-neon-gradient text-white px-10 py-5 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              Apply Now
              <ExternalLink className="h-6 w-6 ml-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Job Details Section */}
      <section id="job-details" className="py-20 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-silver mb-4">Job Details</h2>
            <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Job Highlights */}
            <div className="bg-subtle-metallic p-8 rounded-xl shadow-2xl border border-metallic-gray/30 hover:border-neon-blue/50 hover:shadow-neon-blue/10 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-silver mb-8 flex items-center">
                <Building2 className="h-8 w-8 text-neon-blue mr-3" />
                Job Highlights
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-dark-charcoal/50 rounded-lg hover:bg-dark-charcoal/70 border border-metallic-gray/20 hover:border-neon-blue/30 transition-all duration-300">
                  <MapPin className="h-6 w-6 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-silver">Location</p>
                    <p className="text-silver/70">Namagiripettai, Rasipuram | Onsite</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-dark-charcoal/50 rounded-lg hover:bg-dark-charcoal/70 border border-metallic-gray/20 hover:border-neon-blue/30 transition-all duration-300">
                  <Building2 className="h-6 w-6 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-silver">Company</p>
                    <p className="text-silver/70">Arooracro</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-dark-charcoal/50 rounded-lg hover:bg-dark-charcoal/70 border border-metallic-gray/20 hover:border-neon-blue/30 transition-all duration-300">
                  <DollarSign className="h-6 w-6 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-silver">Salary</p>
                    <p className="text-silver/70">Based on Performance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-dark-charcoal/50 rounded-lg hover:bg-dark-charcoal/70 border border-metallic-gray/20 hover:border-neon-blue/30 transition-all duration-300">
                  <Users className="h-6 w-6 text-neon-blue flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-silver">Experience</p>
                    <p className="text-silver/70">Freshers & Experienced Welcome</p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Arooracro */}
            <div className="bg-subtle-metallic p-8 rounded-xl shadow-2xl border border-metallic-gray/30 hover:border-neon-blue/50 hover:shadow-neon-blue/10 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-silver mb-8 flex items-center">
                <Sparkles className="h-8 w-8 text-neon-blue mr-3" />
                About Arooracro
              </h3>
              <p className="text-silver/80 mb-6 leading-relaxed">
                We're at the forefront of preclinical research innovation, developing cutting-edge solutions 
                that accelerate scientific discovery and improve research outcomes. Our team combines 
                scientific expertise with creative design to communicate complex concepts effectively.
              </p>
              <p className="text-silver/80 mb-8 leading-relaxed">
                Join us in our mission to transform how scientific research is visualized and communicated 
                to the world. Your designs will directly impact the advancement of medical science and 
                help researchers share their groundbreaking discoveries.
              </p>
              <a 
                href="http://www.arooracro.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-neon-blue hover:text-white font-semibold transition-colors duration-300"
              >
                Visit our website
                <ExternalLink className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-metallic-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-silver mb-4">What We're Looking For</h2>
            <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: 'Adobe Illustrator', desc: 'Vector graphics and logo design' },
              { icon: Brush, title: 'Photoshop', desc: 'Photo editing and digital art' },
              { icon: Layers, title: 'CorelDRAW', desc: 'Professional design software' },
              { icon: Sparkles, title: 'Branding & Packaging', desc: 'Brand identity and packaging design' },
              { icon: Package, title: 'Product Design', desc: 'Creative product visualization' },
              { icon: ExternalLink, title: 'Poster Creativity', desc: 'Scientific poster design' }
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-subtle-metallic p-8 rounded-xl shadow-2xl border border-metallic-gray/30 hover:border-neon-blue/60 hover:shadow-neon-blue/20 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="bg-neon-blue/15 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:bg-neon-blue/25 border border-neon-blue/20 group-hover:border-neon-blue/40 transition-all duration-300">
                  <skill.icon className="h-8 w-8 text-neon-blue" />
                </div>
                <h3 className="text-xl font-semibold text-silver mb-3 text-center">{skill.title}</h3>
                <p className="text-silver/70 text-center text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-dark-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-silver mb-4">Why Join Arooracro?</h2>
            <div className="w-24 h-1 bg-neon-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: 'Creative Freedom', desc: 'Express your creativity with cutting-edge projects' },
              { icon: Rocket, title: 'Growth Opportunities', desc: 'Advance your career with learning and development' },
              { icon: Handshake, title: 'Work with Experts', desc: 'Collaborate with leading scientists and researchers' },
              { icon: Globe, title: 'Impactful Projects', desc: 'Create designs that advance medical science' }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-subtle-metallic p-8 rounded-xl shadow-2xl border border-metallic-gray/30 hover:border-neon-blue/60 hover:shadow-neon-blue/20 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group text-center"
              >
                <div className="bg-neon-blue/15 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:bg-neon-blue/25 border border-neon-blue/20 group-hover:border-neon-blue/40 transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-neon-blue" />
                </div>
                <h3 className="text-xl font-semibold text-silver mb-3">{benefit.title}</h3>
                <p className="text-silver/70 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-20 bg-subtle-metallic relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-blue/8"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-silver mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl text-silver/80 mb-12 max-w-2xl mx-auto">
            Join our innovative team and help visualize the next generation of preclinical research. 
            Your creativity will drive scientific discovery forward.
          </p>
          <a 
            href="https://forms.gle/H361z4juTcVVuu3A6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-neon-gradient text-white px-12 py-6 rounded-lg font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            Apply Now
            <ExternalLink className="h-6 w-6 ml-3" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-metallic-gray border-t border-dark-charcoal/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://res.cloudinary.com/dvkcwmkua/image/upload/v1742798692/aroora-og-image_gusfw0.png" 
                  alt="Arooracro Logo" 
                  className="h-10 w-15 rounded-lg shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-silver">Arooracro</h3>
                  <p className="text-sm text-silver/70">Innovating Preclinical Research</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-silver mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-neon-blue" />
                  <span className="text-silver/70">info@arooracro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-neon-blue" />
                  <span className="text-silver/70">+91 7418545060</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-neon-blue" />
                  <span className="text-silver/70">Namagiripettai, Rasipuram</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-silver mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/aroora-centre-for-preclinical-research/" className="text-silver hover:text-neon-blue transition-colors duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/arooracro/" className="text-silver hover:text-neon-blue transition-colors duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://x.com/ArooraCRO" className="text-silver hover:text-neon-blue transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-metallic-gray/30 pt-8 text-center">
            <p className="text-silver/60">
              © 2025 Arooracro. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;