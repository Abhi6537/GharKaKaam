
import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, CheckCircle, AlertTriangle, TrendingUp, Calendar } from 'lucide-react';

const AdminDashboard = () => {
  const { t } = useLanguage();

  const monthlyData = [
    { month: 'Jan', bookings: 120, revenue: 45000 },
    { month: 'Feb', bookings: 145, revenue: 52000 },
    { month: 'Mar', bookings: 178, revenue: 61000 },
    { month: 'Apr', bookings: 203, revenue: 71000 },
    { month: 'May', bookings: 234, revenue: 83000 },
    { month: 'Jun', bookings: 267, revenue: 95000 },
  ];

  const pendingVerifications = [
    { id: '1', name: 'Rahul Kumar', service: 'Electrician', submitted: '2024-01-20' },
    { id: '2', name: 'Priya Singh', service: 'House Cleaning', submitted: '2024-01-21' },
    { id: '3', name: 'Amit Sharma', service: 'Plumber', submitted: '2024-01-22' },
  ];

  const recentDisputes = [
    { id: '1', customer: 'Rajesh Kumar', worker: 'Priya Sharma', service: 'Cleaning', status: 'pending' },
    { id: '2', customer: 'Sunita Devi', worker: 'Raj Singh', service: 'Electrical', status: 'resolved' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Platform overview and management</p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                Total Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">2,847</div>
              <p className="text-gray-600 text-sm">+12% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">₹95,000</div>
              <p className="text-gray-600 text-sm">This month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-600" />
                Completed Jobs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">1,234</div>
              <p className="text-gray-600 text-sm">+8% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                Active Disputes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">12</div>
              <p className="text-gray-600 text-sm">-3 from last week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Bookings & Revenue</CardTitle>
              <CardDescription>Platform growth over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="bookings" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Active Workers</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Customers</span>
                    <span className="font-semibold">1,600</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Verified Workers</span>
                    <span className="font-semibold">89%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Rating</span>
                    <span className="font-semibold">4.7/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Commission Earned</span>
                    <span className="font-semibold text-green-600">₹14,250</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>House Cleaning</span>
                    <Badge>342 bookings</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Electrical Work</span>
                    <Badge>234 bookings</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Plumbing</span>
                    <Badge>189 bookings</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Driver Services</span>
                    <Badge>156 bookings</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pending Verifications */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Verifications</CardTitle>
              <CardDescription>Worker documents awaiting review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingVerifications.map((verification) => (
                  <div key={verification.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{verification.name}</h4>
                      <p className="text-sm text-gray-600">{verification.service}</p>
                      <p className="text-xs text-gray-500">Submitted: {verification.submitted}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">Review</Button>
                      <Button size="sm">Approve</Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline">View All Verifications</Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Disputes */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Disputes</CardTitle>
              <CardDescription>Customer-worker conflicts to resolve</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDisputes.map((dispute) => (
                  <div key={dispute.id} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{dispute.service} Service</h4>
                      <Badge className={dispute.status === 'resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                        {dispute.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      Customer: {dispute.customer} • Worker: {dispute.worker}
                    </p>
                    <div className="mt-3">
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline">View All Disputes</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
