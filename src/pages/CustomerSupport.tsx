
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, Clock, HelpCircle, Send } from 'lucide-react';

const CustomerSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support request submitted:', formData);
    // Handle form submission
  };

  const faqs = [
    {
      question: "How do I book a service?",
      answer: "Simply search for the service you need, select a professional, choose your preferred time, and make payment through our secure platform."
    },
    {
      question: "Are the workers verified?",
      answer: "Yes, all our workers go through a verification process including ID verification, background checks, and skill assessment."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major payment methods including UPI, credit/debit cards, net banking, and digital wallets."
    },
    {
      question: "Can I reschedule my booking?",
      answer: "Yes, you can reschedule your booking up to 2 hours before the scheduled time through the app or by contacting support."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Customer Support</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help! Get in touch with our support team for any assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Phone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <CardTitle>Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-orange-600 mb-2">+91 9876543210</p>
              <p className="text-gray-600">Available 24/7</p>
              <p className="text-sm text-gray-500 mt-2">Average wait time: 2 minutes</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium text-blue-600 mb-2">support@gharkakaam.com</p>
              <p className="text-gray-600">We'll respond within 24 hours</p>
              <p className="text-sm text-gray-500 mt-2">For detailed inquiries</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <CardTitle>Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="bg-green-500 hover:bg-green-600 mb-2">
                Start Chat
              </Button>
              <p className="text-gray-600">Instant support</p>
              <p className="text-sm text-gray-500 mt-2">Available 9 AM - 9 PM</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Describe your issue or question..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HelpCircle className="w-6 h-6 text-orange-500" />
                <span>Frequently Asked Questions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-medium text-gray-800 mb-2">{faq.question}</h4>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-orange-50 border-orange-200">
          <CardContent className="p-8 text-center">
            <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Support Hours</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-medium">Phone Support</p>
                <p className="text-gray-600">24/7 Available</p>
              </div>
              <div>
                <p className="font-medium">Live Chat</p>
                <p className="text-gray-600">9 AM - 9 PM</p>
              </div>
              <div>
                <p className="font-medium">Email Support</p>
                <p className="text-gray-600">24/7 Response within 24hrs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerSupport;
