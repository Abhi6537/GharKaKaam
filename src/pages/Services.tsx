
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Star, MapPin, Calendar } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Get search query from URL params
  const urlParams = new URLSearchParams(location.search);
  const initialQuery = urlParams.get('q') || '';

  React.useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  // Mock workers data - in a real app, this would come from an API
  const workers = [
    {
      id: '1',
      name: 'Priya Sharma',
      service: 'House Cleaning',
      rating: 4.8,
      reviews: 45,
      price: '₹500-800',
      location: 'Salt Lake, Kolkata',
      experience: '5 years',
      avatar: '/placeholder.svg',
      verified: true,
      responseTime: '15 min'
    },
    {
      id: '2',
      name: 'Raj Kumar',
      service: 'Electrician',
      rating: 4.9,
      reviews: 67,
      price: '₹300-600',
      location: 'Park Street, Kolkata',
      experience: '8 years',
      avatar: '/placeholder.svg',
      verified: true,
      responseTime: '30 min'
    },
    {
      id: '3',
      name: 'Amit Singh',
      service: 'Plumber',
      rating: 4.7,
      reviews: 32,
      price: '₹400-700',
      location: 'New Town, Kolkata',
      experience: '6 years',
      avatar: '/placeholder.svg',
      verified: false,
      responseTime: '45 min'
    },
    {
      id: '4',
      name: 'Meera Das',
      service: 'Beautician',
      rating: 4.9,
      reviews: 89,
      price: '₹800-1500',
      location: 'Jadavpur, Kolkata',
      experience: '4 years',
      avatar: '/placeholder.svg',
      verified: true,
      responseTime: '20 min'
    },
    {
      id: '5',
      name: 'Vikram Mehta',
      service: 'Mehendi Artist',
      rating: 4.6,
      reviews: 23,
      price: '₹500-1200',
      location: 'Howrah, Kolkata',
      experience: '3 years',
      avatar: '/placeholder.svg',
      verified: true,
      responseTime: '1 hour'
    }
  ];

  // Filter workers based on search query
  const filteredWorkers = workers.filter(worker =>
    worker.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
    worker.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    // The filtering is already reactive based on searchQuery state
    console.log('Searching for:', searchQuery);
  };

  const handleWorkerClick = (workerId: string) => {
    navigate(`/worker-profile/${workerId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Find Services</h1>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for services or workers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="pl-12 pr-20 h-14 text-lg"
                />
                <Button 
                  onClick={handleSearch}
                  className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700"
                >
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {searchQuery ? `Results for "${searchQuery}"` : 'All Available Workers'} 
            <span className="text-gray-500 font-normal ml-2">({filteredWorkers.length} found)</span>
          </h2>
        </div>

        {/* Workers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkers.map((worker) => (
            <Card 
              key={worker.id} 
              className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => handleWorkerClick(worker.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={worker.avatar} alt={worker.name} />
                      <AvatarFallback className="text-lg">{worker.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {worker.verified && (
                      <Badge className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 py-0.5">
                        ✓
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{worker.name}</h3>
                    <p className="text-orange-600 font-medium text-sm mb-2">{worker.service}</p>
                    
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{worker.rating}</span>
                      <span className="text-gray-500 text-sm">({worker.reviews})</span>
                    </div>
                    
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{worker.location}</span>
                      </div>
                      <div>Experience: {worker.experience}</div>
                      <div>Response: {worker.responseTime}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-green-600 font-semibold">{worker.price}</div>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <Calendar className="w-3 h-3 mr-1" />
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredWorkers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No workers found</h3>
            <p className="text-gray-500">Try searching with different keywords or browse all services</p>
            <Button 
              onClick={() => setSearchQuery('')} 
              variant="outline" 
              className="mt-4"
            >
              Show All Workers
            </Button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
