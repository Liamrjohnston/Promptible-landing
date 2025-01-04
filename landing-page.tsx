import React from 'react';
import { Brain, Target, Zap, ChevronRight, MessageSquare } from 'lucide-react';

const Header = () => (
  <header className="bg-white shadow-sm">
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Brain className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">Promptible</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-indigo-600">Services</a>
          <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  </header>
);

const HeroSection = () => (
  <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Unlock the Power of AI with Expert Prompt Engineering
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your AI interactions with our specialized prompt engineering consulting. 
            Get better results, faster responses, and more accurate outputs.
          </p>
          <div className="flex space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
              Book Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=800&q=80" 
            alt="AI Visualization" 
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: "Tailored Solutions",
      description: "Custom prompt engineering strategies designed for your specific use case and industry."
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: "Rapid Optimization",
      description: "Quick iterations and improvements to your existing prompts for better performance."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
      title: "Expert Guidance",
      description: "Direct access to experienced prompt engineers for ongoing support and training."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Why Choose Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="bg-indigo-600 py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-8">
        Ready to Transform Your AI Experience?
      </h2>
      <p className="text-xl text-indigo-100 mb-10">
        Book a consultation call today and discover how we can optimize your AI prompts.
      </p>
      <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-lg font-semibold">
        Schedule Your Call
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Brain className="h-6 w-6 text-indigo-400" />
            <span className="ml-2 text-lg font-bold">Promptible</span>
          </div>
          <p className="text-gray-400">
            Elevating AI interactions through expert prompt engineering.
          </p>
        </div>
        {["Services", "Company", "Resources", "Legal"].map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold mb-4">{section}</h3>
            <ul className="space-y-2">
              {[1, 2, 3].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {section} Link {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Promptible. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;