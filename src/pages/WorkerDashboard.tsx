
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Star, TrendingUp, Calendar, MapPin, DollarSign, Settings } from 'lucide-react';

const WorkerDashboard = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  const availableJobs = [
    {
      id: '1',
      title: 'House Deep Cleaning',
      location: 'Connaught Place, Delhi',
      budget: '₹800',
      distance: '2.5 km',
      urgent: true,
      description: 'Need deep cleaning for 3BHK apartment'
    },
    {
      id: '2',
      title: 'Electrical Wiring Repair',
      location: 'Karol Bagh, Delhi',
      budget: '₹500',
      distance: '4.1 km',
      urgent: false,
      description: 'Kitchen electrical points not working'
    },
    {
      id: '3',
      title: 'Plumbing Fix',
      location: 'Lajpat Nagar, Delhi',
      budget: '₹350',
      distance: '6.2 km',
      urgent: true,
      description: 'Bathroom tap leakage repair needed'
    }
  ];

  const recentJobs = [
    {
      id: '1',
      title: 'AC Repair',
      customer: 'Rajesh Kumar',
      date: '2024-01-20',
      rating: 5,
      earnings: '₹600'
    },
    {
      id: '2',
      title: 'House Cleaning',
      customer: 'Priya Sharma',
      date: '2024-01-18',
      rating: 4,
      earnings: '₹450'
    }
  ];

  const handleViewAllJobs = () => {
    // Navigate to jobs page or show modal with all available jobs
    console.log('Viewing all available jobs');
    // You could navigate to a dedicated jobs page: navigate('/available-jobs');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome, {user?.name || 'Worker'}!
          </h1>
          <p className="text-gray-600">Manage your work and earnings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">₹12,450</div>
              <p className="text-gray-600 text-sm">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Jobs Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">28</div>
              <p className="text-gray-600 text-sm">+5 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-600" />
                Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">4.8</div>
              <p className="text-gray-600 text-sm">Average rating</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">+23%</div>
              <p className="text-gray-600 text-sm">vs last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Available Jobs */}
          <Card>
            <CardHeader>
              <CardTitle>Available Jobs Near You</CardTitle>
              <CardDescription>New job opportunities in your area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {availableJobs.map((job) => (
                  <div key={job.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{job.title}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-800">{job.budget}</Badge>
                        {job.urgent && (
                          <Badge className="bg-red-100 text-red-800">Urgent</Badge>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">{job.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location} • {job.distance} away
                      </div>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" onClick={handleViewAllJobs}>
                  View All Jobs
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Jobs & Quick Actions */}
          <div className="space-y-6">
            {/* Recent Completed Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Completed Jobs</CardTitle>
                <CardDescription>Your latest work history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentJobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{job.title}</h4>
                        <p className="text-sm text-gray-600">Customer: {job.customer}</p>
                        <p className="text-xs text-gray-500">{job.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">{job.earnings}</div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < job.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-16 flex flex-col space-y-1">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm">Schedule</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col space-y-1">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">Location</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col space-y-1">
                    <Star className="w-5 h-5" />
                    <span className="text-sm">Profile</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex flex-col space-y-1">
                    <Settings className="w-5 h-5" />
                    <span className="text-sm">Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
