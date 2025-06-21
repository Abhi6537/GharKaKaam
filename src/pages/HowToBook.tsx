
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, UserCheck, Calendar, CreditCard, MessageCircle, Star } from 'lucide-react';

const HowToBook = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-orange-500" />,
      title: 'Search Services',
      description: 'Browse through our wide range of services or use voice search to find what you need.'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-orange-500" />,
      title: 'Choose Professional',
      description: 'View profiles, ratings, and reviews to select the best professional for your needs.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      title: 'Schedule Service',
      description: 'Pick a convenient date and time that works for both you and the service provider.'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      title: 'Make Payment',
      description: 'Pay securely through our platform using various payment methods.'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
      title: 'Stay Connected',
      description: 'Chat with your service provider and track progress in real-time.'
    },
    {
      icon: <Star className="w-8 h-8 text-orange-500" />,
      title: 'Rate & Review',
      description: 'Share your experience to help other customers make informed decisions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">How to Book Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to book your desired service with verified professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-100 p-4 rounded-full">
                    {step.icon}
                  </div>
                </div>
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  {index + 1}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Need Help?</h2>
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Our customer support team is available 24/7 to assist you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <p className="font-medium">Call Us</p>
                  <p className="text-orange-600">+91 9876543210</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">Email Us</p>
                  <p className="text-orange-600">hello@gharkakaam.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default HowToBook;
