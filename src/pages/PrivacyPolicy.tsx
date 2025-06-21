
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                At GharKaKaam, we collect information to provide better services to our users. This includes:
              </p>
              <ul>
                <li>Personal information like name, email, and phone number when you register</li>
                <li>Location data to match you with nearby service providers</li>
                <li>Payment information for processing transactions</li>
                <li>Communication data from messages and calls through our platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Connect customers with appropriate service providers</li>
                <li>Process payments and manage transactions</li>
                <li>Improve our services and user experience</li>
                <li>Send important updates and notifications</li>
                <li>Ensure safety and security on our platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We do not sell your personal information. We only share information in these situations:
              </p>
              <ul>
                <li>With service providers to facilitate bookings</li>
                <li>With payment processors to handle transactions</li>
                <li>When required by law or to protect our users</li>
                <li>With your explicit consent</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We implement strong security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4">
                Email: privacy@gharkakaam.com<br />
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

export default PrivacyPolicy;
