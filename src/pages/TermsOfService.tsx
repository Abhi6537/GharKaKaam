
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                By accessing and using GharKaKaam, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Platform Services</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>GharKaKaam provides a platform that:</p>
              <ul>
                <li>Connects customers with local service providers</li>
                <li>Facilitates communication and booking</li>
                <li>Processes payments securely</li>
                <li>Provides customer support</li>
              </ul>
              <p>We act as an intermediary and are not responsible for the quality of services provided by individual workers.</p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>As a user, you agree to:</p>
              <ul>
                <li>Provide accurate and truthful information</li>
                <li>Use the platform lawfully and respectfully</li>
                <li>Not engage in fraudulent activities</li>
                <li>Respect other users and service providers</li>
                <li>Pay for services as agreed</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <ul>
                <li>All payments are processed securely through our platform</li>
                <li>Service charges and fees are clearly displayed before booking</li>
                <li>Refunds are subject to our refund policy</li>
                <li>We may charge platform fees for our services</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                GharKaKaam is not liable for any damages arising from the use of our platform or services provided by third-party workers. Our liability is limited to the amount paid for the specific service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                For questions about these Terms of Service, contact us at:
              </p>
              <p className="mt-4">
                Email: legal@gharkakaam.com<br />
                Phone: +91 9876543210
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
