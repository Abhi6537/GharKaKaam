
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturedWorkers = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const workers = [
    {
      id: '1',
      name: 'Priya Sharma',
      profession: 'Beautician',
      rating: 4.8,
      reviews: 45,
      location: 'Salt Lake, Kolkata',
      experience: '5 years',
      priceRange: '₹500-800',
      services: ['Facial', 'Hair Cut', 'Mehendi', '+1 more'],
      verified: true,
      avatar: '/placeholder.svg'
    },
    {
      id: '2',
      name: 'Rajesh Kumar',
      profession: 'Electrician',
      rating: 4.9,
      reviews: 67,
      location: 'Garia, Kolkata',
      experience: '8 years',
      priceRange: '₹300-600',
      services: ['Wiring', 'Fan Installation', 'AC Repair', '+1 more'],
      verified: true,
      avatar: '/placeholder.svg'
    },
    {
      id: '3',
      name: 'Sunita Devi',
      profession: 'Tailor',
      rating: 4.7,
      reviews: 89,
      location: 'Bagbazar, Kolkata',
      experience: '12 years',
      priceRange: '₹200-500',
      services: ['Suit Stitching', 'Alteration', 'Blouse', '+1 more'],
      verified: true,
      avatar: '/placeholder.svg'
    },
    {
      id: '4',
      name: 'Amit Das',
      profession: 'Photographer',
      rating: 4.9,
      reviews: 56,
      location: 'Park Street, Kolkata',
      experience: '6 years',
      priceRange: '₹2000-5000',
      services: ['Wedding', 'Portrait', 'Event', '+1 more'],
      verified: true,
      avatar: '/placeholder.svg'
    },
    {
      id: '5',
      name: 'Meera Gupta',
      profession: 'Mehendi Artist',
      rating: 4.8,
      reviews: 34,
      location: 'Tollygunge, Kolkata',
      experience: '4 years',
      priceRange: '₹500-1200',
      services: ['Bridal Mehendi', 'Arabic Design', 'Simple', '+1 more'],
      verified: true,
      avatar: '/placeholder.svg'
    },
    {
      id: '6',
      name: 'Ravi Pandey',
      profession: 'Catering Chef',
      rating: 4.6,
      reviews: 78,
      location: 'Howrah, Kolkata',
      experience: '10 years',
      priceRange: '₹200-500/person',
      services: ['Bengali Cuisine', 'North Indian', 'Snacks', '+1 more'],
      verified: true,
      avatar: '/placeholder.svg'
    }
  ];

  const displayedWorkers = showAll ? workers : workers.slice(0, 3);

  const handleBookNow = (workerId: string) => {
    navigate(`/worker-profile/${workerId}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Featured Workers
            {language === 'bn' && (
              <span className="text-orange-600"> | বিশেষ কারিগর</span>
            )}
          </h2>
          <p className="text-gray-600 text-lg">
            Meet some of our top-rated professionals in your area
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedWorkers.map((worker) => (
            <Card key={worker.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={worker.avatar} alt={worker.name} />
                      <AvatarFallback>{worker.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {worker.verified && (
                      <Badge className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2 py-1">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800">{worker.name}</h3>
                    <p className="text-orange-600 font-medium">{worker.profession}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{worker.rating}</span>
                      <span className="text-gray-500 text-sm">({worker.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{worker.location}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {worker.services.map((service, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Experience</span>
                    <div className="font-medium">{worker.experience}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500">Starting at</span>
                    <div className="font-bold text-orange-600">{worker.priceRange}</div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  onClick={() => handleBookNow(worker.id)}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View All Professionals'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkers;
