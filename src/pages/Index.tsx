import { useState, useEffect } from 'react';
import { Database, Server, Network, Users, Code, Globe, CircleDollarSign, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";

const ImageCarousel = () => {
  const images = [
    'partner/anthropic.png',
    'partner/attoresearch.png',
    'partner/commerce3.png',
    'partner/falconalpha.png',
    'partner/gbike.png',
    'partner/getlinks.png',
    'partner/goodcatch.png',
    'partner/innomatrix.png',
    'partner/klook.png',
    'partner/tornado.png',
    'partner/xtalpi.png',
    'partner/zetta.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="p-6 rounded-lg bg-white backdrop-blur relative aspect-[25/9] w-full overflow-hidden group">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 p-[7%] transition-transform duration-500 ease-in-out ${
            index === currentIndex ? 'translate-x-0' :
            index < currentIndex ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <img
            src={image}
            alt={`Portfolio ${index + 1}`}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button> */}

      {/* Indicators */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-cover bg-center" style={{ backgroundImage: "url('/centerimg.png')" }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
            OUR MISSION
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-50">
            Partnering with exceptional founders and management teams
            with flexible private equity and debt capital to build
            enduring technology businesses over time.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-mono font-bold mb-12 text-center text-blue-600">
            /INVESTMENT APPROACH
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Global"
              description="Increment Capital is a technology investment firm that fuses flexible capital with an active corporate development approach to investing across the capital structure in Asia and Asia-linked businesses in the US."
              icon={Globe}
            />
            <FeatureCard
              title="Active Corporate Development"
              description="A long-term strategic partner, we help accelerate growth through strategic acquisitions, operational improvement and AI/technology adoption."
              icon={CircleDollarSign}
            />
            <FeatureCard
              title="Technology Focus"
              description="Employing a sector driven approach, we invest in consumer technology, blockchain, artificial intelligence and AI/Digital infrastructure businesses."
              icon={Code}
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="partners" className="py-24 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold text-white mb-12">
            /PRIVATE EQUITY
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Tech Partners</h3>
              <p className="text-blue-100">With a sector-driven and active corporate development approach, our partners have supported innovative companies such as Klook Travel, Gbike, Zetta (with SK REIT), Anthropic, Scroll, XtalPi, Tornado, Atto Research, Falcon Alpha, Innomatrix, GETLINKS, GOOD CATCH, Commerce2 among many others.</p>
            </div>
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur">
              <ImageCarousel />
            </div>
            {/* <div className="p-6 rounded-lg bg-white/10 backdrop-blur">
              <Globe className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2"></h3>
              <p className="text-blue-100"></p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="infrastructure" className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-mono font-bold mb-6 text-blue-600">/PRIVATE CREDIT</h2>
              <p className="text-lg text-blue-600/80 mb-8">
                Integrating technology private equity, credit, special situations and real estate investment skillsets with data center operator partnerships, the Fund makes senior secured private credit investments in AI data centers and related infrastructure.
              </p>
              <p className="text-lg text-blue-600/80 mb-8">
              Private credit investments structured with:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-blue-600/80">Strong downside protection through significant asset coverage secured by liens and stable long-term cash flows</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-blue-600/80">Double digit contractual returns</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-blue-600/80">Equity upside participation through warrants, conversion features and liquidation preference</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white rounded-lg shadow-2xl p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="w-full lg:w-1/2">
                    <div className="h-full space-y-4">
                      <div className="capital-structure h-full flex flex-col">
                        <div className="bg-blue-400 text-white p-4 rounded-t-lg text-center font-semibold flex-1 flex items-center justify-center">
                          Common Equity
                        </div>
                        <div className="bg-blue-500 text-white p-4 text-center font-semibold flex-1 flex items-center justify-center">
                          Senior Preferred Equity
                        </div>
                        <div className="bg-blue-600 text-white p-4 text-center font-semibold flex-1 flex items-center justify-center">
                          Private Credit Hybrid
                        </div>
                        <div className="bg-blue-700 text-white p-4 rounded-b-lg text-center font-semibold flex-1 flex items-center justify-center">
                          Senior Secured Debt
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:w-16">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <h2 className="text-lg font-mono font-bold text-blue-600 mb-4">
                      Investment Strategy
                    </h2>
                    <ul className="space-y-3 text-blue-600/80">
                      <li className="flex items-center space-x-2">
                        <span>Investing in senior credit with equity features</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span>Strong downside protection while preserving equity upside participation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="font-semibold">Targeting 15%+ net returns, of which at least 11% is contractual</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-blue-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-mono font-bold mb-12 text-white">/TEAM</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Worldwide"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">Worldwide</h3>
              <p className="text-blue-100">Operating from Hong Kong, Seoul, Shanghai and Seattle</p>
            </div>
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1484557052118-f32bd25b45b5"
                alt="Skilled"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">Skilled</h3>
              <p className="text-blue-100">Strong technical expertise (Google, Microsoft, Amazon, AMD)</p>
            </div>
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1632507127789-eb70cc8757af"
                alt="Experienced"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">World Class Investment Experience</h3>
              <p className="text-blue-100">Unique blend of public and private investment experience
                at world class organizations including Warburg Pincus, Clearlake Capital, Apax Partners, Capital Group, Goldman Sachs, Credit Suisse, UBS and JPMorgan.</p>
            </div>
            <div className="p-6">
              <img
                src="https://images.unsplash.com/photo-1560221328-12fe60f83ab8"
                alt="Extensive"
                className="w-full h-48 object-cover roun</div>ded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">Multi Asset Class Expertise</h3>
              <p className="text-blue-100">Invest in early-stage venture, growth equity, buyouts, PIPEs, special situations credit, operational turnarounds, spin-offs and restructurings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-white border-t border-blue-100 py-12 w-full flex-shrink-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-600 text-center md:text-left whitespace-nowrap">
              © 2024 Increment Capital All rights reserved.
            </p>
            <p className="text-sm text-blue-600 text-center md:text-right whitespace-nowrap">
              Hong Kong | Shanghai | Seoul | Seattle
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
