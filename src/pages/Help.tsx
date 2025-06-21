
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Phone, Mail, MessageCircle, Search, HelpCircle } from 'lucide-react';

const Help = () => {
  const faqData = [
    {
      question: "How do I book a service?",
      answer: "You can book a service by searching for the service you need on our homepage, browsing through available workers, and clicking 'Book Now' on their profile."
    },
    {
      question: "How do I become a worker?",
      answer: "Click on 'Sign up as Worker' from the homepage, fill in your details, upload required documents, and wait for verification."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept cash payments, UPI, and digital wallets. Payment is made directly to the worker after service completion."
    },
    {
      question: "How do I cancel a booking?",
      answer: "You can cancel a booking from your dashboard up to 2 hours before the scheduled time without any charges."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Contact our customer support immediately. We have a satisfaction guarantee and will work to resolve any issues."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Phone className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Get immediate assistance</p>
              <Button className="w-full">
                +91 7063488278
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Mail className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">We'll respond within 24 hours</p>
              <Button variant="outline" className="w-full">
                support@gharkaakaam.com
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our AI assistant</p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Can't find what you're looking for? Send us a message</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this about?" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your issue or question in detail..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Search className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2">How to Book Services</h3>
                <p className="text-gray-600 mb-4">Step-by-step guide to booking your first service</p>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-10 h-10 mx-auto mb-4 text-green-600" />
                <h3 className="text-lg font-semibold mb-2">Worker Guidelines</h3>
                <p className="text-gray-600 mb-4">Safety and quality guidelines for workers</p>
                <Button variant="outline" size="sm">Read Guidelines</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <HelpCircle className="w-10 h-10 mx-auto mb-4 text-orange-600" />
                <h3 className="text-lg font-semibold mb-2">Customer Support</h3>
                <p className="text-gray-600 mb-4">Get help with your account and bookings</p>
                <Button variant="outline" size="sm">Get Support</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Help;
