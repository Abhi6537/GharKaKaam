
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';

const SignupWorker = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    location: '',
    services: [] as string[],
    idProof: null as File | null,
    certificate: null as File | null,
    drivingLicense: null as File | null
  });
  const [isLoading, setIsLoading] = useState(false);

  const serviceCategories = [
    'Electrician', 'Plumber', 'House Cleaning', 'Cook', 'Beautician', 
    'Car Wash', 'Driver', 'AC/Fridge Repair', 'Mehendi Artist', 
    'Inventory Helper', 'Parcel Runner', 'Tech Solution', 'Mechanic'
  ];

  const drivingRequiredServices = ['Driver', 'Parcel Runner'];

  const requiresDrivingLicense = formData.services.some(service => 
    drivingRequiredServices.includes(service)
  );

  const handleServiceToggle = (service: string) => {
    if (formData.services.includes(service)) {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      });
    } else if (formData.services.length < 2) {
      setFormData({
        ...formData,
        services: [...formData.services, service]
      });
    }
  };

  const handleFileChange = (field: 'idProof' | 'certificate' | 'drivingLicense', file: File | null) => {
    setFormData({ ...formData, [field]: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      setIsLoading(false);
      return;
    }

    if (formData.services.length === 0) {
      alert('Please select at least one service');
      setIsLoading(false);
      return;
    }

    if (!formData.idProof) {
      alert('ID proof is mandatory');
      setIsLoading(false);
      return;
    }

    if (requiresDrivingLicense && !formData.drivingLicense) {
      alert('Driving license is mandatory for selected services');
      setIsLoading(false);
      return;
    }
    
    // Simulate API call
    console.log('Worker signup:', formData);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">{t('worker')} {t('signup')}</CardTitle>
              <CardDescription>
                Join {t('appName')} to offer your services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Service Location</Label>
                    <Input
                      id="location"
                      type="text"
                      placeholder="e.g., Delhi, Mumbai"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label>Services Offered (Select up to 2)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {serviceCategories.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                          disabled={!formData.services.includes(service) && formData.services.length >= 2}
                        />
                        <Label htmlFor={service} className="text-sm">{service}</Label>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Selected: {formData.services.length}/2
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="idProof">Government ID Proof (Required)</Label>
                    <Input
                      id="idProof"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange('idProof', e.target.files?.[0] || null)}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Aadhaar, Voter ID, etc.</p>
                  </div>

                  <div>
                    <Label htmlFor="certificate">Skill Certificate (Optional)</Label>
                    <Input
                      id="certificate"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange('certificate', e.target.files?.[0] || null)}
                    />
                    <p className="text-xs text-gray-500 mt-1">Trade certification, experience letter</p>
                  </div>
                </div>

                {requiresDrivingLicense && (
                  <div>
                    <Label htmlFor="drivingLicense">Driving License (Required for selected services)</Label>
                    <Input
                      id="drivingLicense"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange('drivingLicense', e.target.files?.[0] || null)}
                      required
                    />
                    <p className="text-xs text-red-500 mt-1">Mandatory for Driver and Parcel Runner services</p>
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Creating Account...' : 'Create Worker Account'}
                </Button>
              </form>

              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="text-blue-600 hover:underline">
                    {t('login')}
                  </Link>
                </p>
                <p className="text-gray-600 mt-2">
                  Looking for services?{' '}
                  <Link to="/signup-customer" className="text-blue-600 hover:underline">
                    Sign up as Customer
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignupWorker;
