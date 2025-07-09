import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, TrendingUp, Cross } from "lucide-react";
import estateImage from '../images/estate.jpg'; // adjust path if needed
import Family from '../images/family.jpg';
import Retirement from '../images/retirement.jpg';
import Health from '../images/health.jpg'
import { Link } from 'react-router-dom';




const Index = () => {
  const pillars = [



    {
      id: 2,
      title: "Estate Planning",
      description: "Ensures wealth transfer, legacy preservation, and legal control over assets after death.",
      icon: Heart,
      image: estateImage,
    },
    {
      id: 1,
      title: "Family Protection",
      description: "Involves life insurance and income replacement strategies to safeguard loved ones.",
      icon: Shield,
      image: Family,
    },
    
    {
      id: 3,
      title: "Retirement Planning",
      description: "Involves life insurance and income replacement strategies to safeguard loved ones.",
      icon: TrendingUp,
      image: Retirement,
    },
    {
      id: 4,
      title: "Health & Disability Planning",
      description: "Prepares for medical emergencies, long-term care, and loss of income due to illness or disability.",
      icon: Cross,
      image: Health,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Focus
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto">
            The four pillars of financial planning
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card 
              key={pillar.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <pillar.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Let our expert team help you build a comprehensive financial plan tailored to your unique needs.
            </p>
            < Link to="/book-meeting">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Started Today
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;