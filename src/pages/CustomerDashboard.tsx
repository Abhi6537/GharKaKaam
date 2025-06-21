
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Plus, Clock, CheckCircle, Calendar, User, Settings } from 'lucide-react';

const CustomerDashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();

  const recentBookings = [
    {
      id: '1',
      service: 'House Cleaning',
      worker: 'Priya Sharma',
      date: '2024-01-20',
      status: 'completed',
      amount: '₹499'
    },
    {
      id: '2',
      service: 'Electrical Repair',
      worker: 'Raj Kumar',
      date: '2024-01-22',
      status: 'in-progress',
      amount: '₹299'
    },
    {
      id: '3',
      service: 'Plumbing',
      worker: 'Amit Singh',
      date: '2024-01-25',
      status: 'scheduled',
      amount: '₹399'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'in-progress': return <Clock className="w-4 h-4" />;
      case 'scheduled': return <Calendar className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const handleViewAllBookings = () => {
    // Navigate to bookings page or show modal
    navigate('/bookings'); // Create this page if needed
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, {user?.name || 'User'}!
          </h1>
          <p className="text-gray-600">Manage your bookings and find new services</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate('/services')}>
            <CardContent className="p-6 text-center">
              <Plus className="w-8 h-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold">Book Service</h3>
              <p className="text-sm text-gray-600">Book a new service</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-orange-600" />
              <h3 className="font-semibold">History</h3>
              <p className="text-sm text-gray-600">Past bookings</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Settings className="w-8 h-8 mx-auto mb-3 text-purple-600" />
              <h3 className="font-semibold">Settings</h3>
              <p className="text-sm text-gray-600">Account settings</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">24</div>
              <p className="text-gray-600 text-sm">+3 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Favorite Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold text-purple-600">House Cleaning</div>
              <p className="text-gray-600 text-sm">8 bookings</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>Your latest service requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${getStatusColor(booking.status)}`}>
                      {getStatusIcon(booking.status)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{booking.service}</h4>
                      <p className="text-sm text-gray-600">with {booking.worker}</p>
                      <p className="text-xs text-gray-500">{booking.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{booking.amount}</div>
                    <Badge className={`${getStatusColor(booking.status)} border-0`}>
                      {booking.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" onClick={handleViewAllBookings}>
                View All Bookings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomerDashboard;
