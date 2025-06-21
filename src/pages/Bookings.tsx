
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, CheckCircle, Clock, MapPin, Star } from 'lucide-react';

const Bookings = () => {
  const { user } = useAuth();

  const allBookings = [
    {
      id: '1',
      service: 'House Cleaning',
      worker: 'Priya Sharma',
      date: '2024-01-20',
      time: '2:00 PM',
      status: 'completed',
      amount: '₹499',
      location: 'Salt Lake, Kolkata',
      rating: 5
    },
    {
      id: '2',
      service: 'Electrical Repair',
      worker: 'Raj Kumar',
      date: '2024-01-22',
      time: '10:00 AM',
      status: 'in-progress',
      amount: '₹299',
      location: 'Park Street, Kolkata',
      rating: null
    },
    {
      id: '3',
      service: 'Plumbing',
      worker: 'Amit Singh',
      date: '2024-01-25',
      time: '3:00 PM',
      status: 'scheduled',
      amount: '₹399',
      location: 'New Town, Kolkata',
      rating: null
    },
    {
      id: '4',
      service: 'Beauty Services',
      worker: 'Meera Das',
      date: '2024-01-18',
      time: '11:00 AM',
      status: 'completed',
      amount: '₹1200',
      location: 'Jadavpur, Kolkata',
      rating: 4
    },
    {
      id: '5',
      service: 'Car Wash',
      worker: 'Suresh Kumar',
      date: '2024-01-15',
      time: '9:00 AM',
      status: 'completed',
      amount: '₹350',
      location: 'Howrah, Kolkata',
      rating: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h1>
          <p className="text-gray-600">View and manage all your service bookings</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Bookings</CardTitle>
            <CardDescription>Complete history of your service requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {allBookings.map((booking) => (
                <div key={booking.id} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full ${getStatusColor(booking.status)}`}>
                        {getStatusIcon(booking.status)}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{booking.service}</h3>
                        <p className="text-gray-600 mb-2">with {booking.worker}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {booking.date} at {booking.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {booking.location}
                          </div>
                        </div>
                        
                        {booking.rating && (
                          <div className="flex items-center mt-2">
                            <span className="text-sm text-gray-600 mr-2">Your rating:</span>
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < booking.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-800 mb-2">{booking.amount}</div>
                      <Badge className={`${getStatusColor(booking.status)} border-0 mb-2`}>
                        {booking.status}
                      </Badge>
                      
                      <div className="space-y-2">
                        {booking.status === 'scheduled' && (
                          <>
                            <Button size="sm" variant="outline" className="w-full">
                              Reschedule
                            </Button>
                            <Button size="sm" variant="outline" className="w-full text-red-600 hover:text-red-700">
                              Cancel
                            </Button>
                          </>
                        )}
                        
                        {booking.status === 'completed' && !booking.rating && (
                          <Button size="sm" className="w-full">
                            Rate Service
                          </Button>
                        )}
                        
                        {booking.status === 'completed' && (
                          <Button size="sm" variant="outline" className="w-full">
                            Book Again
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Bookings;
