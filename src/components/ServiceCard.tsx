
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  category: string;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  price, 
  rating, 
  image, 
  category, 
  onClick 
}) => {
  const { t } = useLanguage();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Badge className="absolute top-3 left-3 bg-blue-600">
          {category}
        </Badge>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">{price}</span>
          <Button onClick={onClick} className="bg-blue-600 hover:bg-blue-700">
            {t('bookNow')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
