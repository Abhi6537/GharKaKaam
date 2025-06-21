import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Star, Clock, Phone, MessageCircle, Calendar, Shield } from 'lucide-react';

const WorkerProfile = () => {
  const { workerId } = useParams();

  // This would normally come from an API call
  const worker = {
    id: workerId || '1',
    name: 'Priya Sharma',
    profession: 'Beautician',
    rating: 4.8,
    reviews: 45,
    location: 'Salt Lake, Kolkata',
    experience: '5 years',
    priceRange: '₹500-800',
    services: ['Facial', 'Hair Cut', 'Mehendi', 'Massage', 'Threading', 'Pedicure'],
    verified: true,
    avatar: '/placeholder.svg',
    bio: 'Professional beautician with 5 years of experience in providing high-quality beauty services at home. Specialized in bridal makeup, facial treatments, and traditional mehendi designs.',
    availability: 'Mon-Sat: 9 AM - 7 PM',
    responseTime: '15 minutes',
    completedJobs: 150,
    repeatCustomers: 85
  };

  const reviews = [
    {
      id: 1,
      customerName: 'Anjali Das',
      rating: 5,
      comment: 'Excellent service! Very professional and skilled. Highly recommended.',
      date: '2024-01-15',
      service: 'Bridal Makeup'
    },
    {
      id: 2,
      customerName: 'Ritu Singh',
      rating: 5,
      comment: 'Amazing mehendi work. Very intricate designs and good quality.',
      date: '2024-01-10',
      service: 'Mehendi'
    },
    {
      id: 3,
      customerName: 'Priya Roy',
      rating: 4,
      comment: 'Good facial service. Skin feels much better. Will book again.',
      date: '2024-01-05',
      service: 'Facial'
    }
  ];

  const portfolio = [
    { id: 1, title: 'Bridal Makeup', image: '/placeholder.svg' },
    { id: 2, title: 'Mehendi Design', image: '/placeholder.svg' },
    { id: 3, title: 'Facial Treatment', image: '/placeholder.svg' },
    { id: 4, title: 'Hair Styling', image: '/placeholder.svg' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Worker Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={worker.avatar} alt={worker.name} />
                    <AvatarFallback className="text-2xl">{worker.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {worker.verified && (
                    <Badge className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 py-0.5">
                      <Shield className="w-2 h-2 mr-0.5" />
                      ✓
                    </Badge>
                  )}
                </div>
                
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{worker.name}</h1>
                  <p className="text-xl text-orange-600 font-medium mb-3">{worker.profession}</p>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-medium text-lg">{worker.rating}</span>
                      <span className="text-gray-500">({worker.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{worker.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{worker.bio}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Experience</span>
                      <div className="font-medium">{worker.experience}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Price Range</span>
                      <div className="font-medium text-green-600">{worker.priceRange}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Response Time</span>
                      <div className="font-medium">{worker.responseTime}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Completed Jobs</span>
                      <div className="font-medium">{worker.completedJobs}+</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3 md:w-64">
                <Button className="bg-orange-500 hover:bg-orange-600" size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services and Details */}
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Services Offered</CardTitle>
                <CardDescription>Professional beauty services at your doorstep</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {worker.services.map((service, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <h3 className="font-medium text-gray-800">{service}</h3>
                      <p className="text-gray-600 text-sm mt-1">Professional {service.toLowerCase()} service</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-green-600 font-medium">₹500+</span>
                        <Button size="sm">Book Service</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
                <CardDescription>{worker.reviews} verified reviews from customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{review.customerName}</h4>
                          <p className="text-sm text-gray-500">{review.service} • {review.date}</p>
                        </div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="portfolio" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio</CardTitle>
                <CardDescription>Sample work and previous projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {portfolio.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                      />
                      <h3 className="mt-2 font-medium text-center">{item.title}</h3>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="availability" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
                <CardDescription>Current schedule and booking slots</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-3 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Working Hours
                    </h3>
                    <p className="text-gray-600">{worker.availability}</p>
                    <p className="text-sm text-gray-500 mt-2">Sunday: Closed</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Quick Stats</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Response Time:</span>
                        <span className="font-medium">{worker.responseTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Repeat Customers:</span>
                        <span className="font-medium">{worker.repeatCustomers}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">On-time Delivery:</span>
                        <span className="font-medium">98%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default WorkerProfile;
