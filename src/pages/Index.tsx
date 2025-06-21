
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedWorkers from '@/components/FeaturedWorkers';
import VoiceSearch from '@/components/VoiceSearch';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search } from 'lucide-react';

const Index = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const popularServices = [
    'House Cleaning', 'Electrician', 'Plumber', 'AC Repair', 'Beauty Services', 
    'Car Wash', 'Home Tutor', 'Cook', 'Carpenter', 'Painter', 'Mehendi Artist',
    'Catering', 'Photographer', 'Tailor', 'Gardener', 'Security Guard'
  ];

  const allServices = [
    { name: 'House Cleaning', category: 'Home Services', price: '₹500-800' },
    { name: 'Electrician', category: 'Home Services', price: '₹300-600' },
    { name: 'Plumber', category: 'Home Services', price: '₹400-700' },
    { name: 'AC Repair', category: 'Home Services', price: '₹600-1000' },
    { name: 'Beauty Services', category: 'Personal Care', price: '₹800-1500' },
    { name: 'Car Wash', category: 'Automotive', price: '₹300-500' },
    { name: 'Home Tutor', category: 'Professional Services', price: '₹500-1000/month' },
    { name: 'Cook', category: 'Professional Services', price: '₹600-1200' },
    { name: 'Carpenter', category: 'Home Services', price: '₹400-800' },
    { name: 'Painter', category: 'Home Services', price: '₹300-600' },
    { name: 'Mehendi Artist', category: 'Personal Care', price: '₹500-1200' },
    { name: 'Catering', category: 'Food Services', price: '₹200-500/person' },
    { name: 'Photographer', category: 'Professional Services', price: '₹2000-5000' },
    { name: 'Tailor', category: 'Personal Care', price: '₹200-800' },
    { name: 'Gardener', category: 'Home Services', price: '₹300-600' },
    { name: 'Security Guard', category: 'Professional Services', price: '₹400-800/day' }
  ];

  const handleSearch = (query: string = searchQuery) => {
    if (query.trim()) {
      navigate(`/services?q=${encodeURIComponent(query)}`);
    } else {
      navigate('/services');
    }
  };

  const handleVoiceResult = (transcript: string) => {
    setSearchQuery(transcript);
    handleSearch(transcript);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to {t('appName')}
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connecting skilled workers with customers in semi-urban and rural India. Empowering local communities through digital visibility and trust.
          </p>
          
          {/* Search Bar */}
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pl-12 pr-20 h-14 text-lg"
                />
                <VoiceSearch onResult={handleVoiceResult} />
                <Button 
                  onClick={() => handleSearch()}
                  className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700"
                >
                  {t('search')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Popular Searches */}
          <div className="mt-6">
            <p className="text-sm mb-3">{t('popularSearches')}:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {popularServices.map((service, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600"
                  onClick={() => handleSearch(service)}
                >
                  {service}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">All Services</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {allServices.map((service, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => navigate(`/services?q=${encodeURIComponent(service.name)}`)}
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 text-sm mb-2">{service.name}</h3>
                  <p className="text-xs text-gray-600 mb-1">{service.category}</p>
                  <p className="text-xs text-green-600 font-medium">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workers Section */}
      <FeaturedWorkers />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Platform</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('joinDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100"
              onClick={() => navigate('/signup-customer')}
            >
              {t('becomeCustomer')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-600"
              onClick={() => navigate('/signup-worker')}
            >
              {t('becomeWorker')}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
