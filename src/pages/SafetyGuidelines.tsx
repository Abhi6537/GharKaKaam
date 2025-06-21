
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Star, UserCheck, Award, TrendingUp } from 'lucide-react';

const SafetyGuidelines = () => {
  const successStories = [
    {
      name: "Priya Sharma",
      profession: "House Cleaner",
      story: "Started with basic cleaning services, now manages a team of 5 cleaners and earns ₹25,000+ monthly.",
      achievement: "Top Rated Professional",
      rating: 4.9,
      jobs: 150
    },
    {
      name: "Rajesh Kumar", 
      profession: "Electrician",
      story: "From local electrician to verified professional serving 100+ customers with 24/7 emergency services.",
      achievement: "Most Trusted Electrician",
      rating: 4.8,
      jobs: 200
    },
    {
      name: "Sunita Devi",
      profession: "Tailor",
      story: "Traditional tailor who digitized her business, now takes orders online and delivers across the city.",
      achievement: "Digital Innovation Award",
      rating: 4.7,
      jobs: 300
    }
  ];

  const workerGuidelines = [
    {
      title: "Profile Completion",
      description: "Complete your profile with accurate information, skills, and portfolio images",
      importance: "High"
    },
    {
      title: "Professional Behavior",
      description: "Maintain professional conduct, punctuality, and clear communication with customers",
      importance: "Critical"
    },
    {
      title: "Quality Service",
      description: "Deliver high-quality work that meets or exceeds customer expectations",
      importance: "Critical"
    },
    {
      title: "Safety Protocols",
      description: "Follow all safety guidelines and use appropriate tools and equipment",
      importance: "Critical"
    },
    {
      title: "Pricing Transparency",
      description: "Provide clear, upfront pricing with no hidden charges",
      importance: "High"
    },
    {
      title: "Documentation",
      description: "Keep proper records of work done and maintain before/after photos when applicable",
      importance: "Medium"
    }
  ];

  const profileTips = [
    "Upload a clear, professional profile photo",
    "Write a detailed bio highlighting your skills and experience",
    "Add portfolio images of your best work",
    "List all your services with accurate pricing",
    "Include your certifications and training details",
    "Update your availability regularly",
    "Respond to messages within 2 hours",
    "Maintain a complete service area map"
  ];

  const reviewTips = [
    "Always request reviews after completing a job",
    "Provide exceptional service to earn 5-star ratings",
    "Respond professionally to all reviews, positive and negative",
    "Use customer feedback to improve your services",
    "Showcase your best reviews on your profile",
    "Follow up with customers to ensure satisfaction",
    "Address any concerns promptly and professionally",
    "Maintain consistent quality across all jobs"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Worker Resources & Guidelines</h1>
          <p className="text-gray-600 text-lg">Everything you need to succeed as a professional on GharKaKaam</p>
        </div>

        <Tabs defaultValue="guidelines" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="guidelines">Worker Guidelines</TabsTrigger>
            <TabsTrigger value="profile">Create Profile</TabsTrigger>
            <TabsTrigger value="reviews">Reviews & Ratings</TabsTrigger>
            <TabsTrigger value="success">Success Stories</TabsTrigger>
            <TabsTrigger value="working">Working</TabsTrigger>
          </TabsList>

          <TabsContent value="guidelines">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-blue-600" />
                    Worker Guidelines & Best Practices
                  </CardTitle>
                  <CardDescription>
                    Follow these guidelines to maintain your professional standing and build trust with customers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {workerGuidelines.map((guideline, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{guideline.title}</h3>
                          <Badge 
                            className={
                              guideline.importance === 'Critical' ? 'bg-red-100 text-red-800' :
                              guideline.importance === 'High' ? 'bg-orange-100 text-orange-800' :
                              'bg-blue-100 text-blue-800'
                            }
                          >
                            {guideline.importance}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{guideline.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="w-6 h-6 mr-2 text-green-600" />
                  Creating Your Professional Profile
                </CardTitle>
                <CardDescription>
                  Build a compelling profile that attracts customers and showcases your expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {profileTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-6 h-6 mr-2 text-yellow-600" />
                  Managing Reviews & Ratings
                </CardTitle>
                <CardDescription>
                  Build and maintain a strong reputation through excellent reviews and ratings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {reviewTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="success">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-6 h-6 mr-2 text-purple-600" />
                    Success Stories
                  </CardTitle>
                  <CardDescription>
                    Learn from professionals who have built successful businesses on our platform
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {successStories.map((story, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                          {story.name.charAt(0)}
                        </div>
                        <h3 className="font-bold text-lg">{story.name}</h3>
                        <p className="text-blue-600 font-medium">{story.profession}</p>
                        <Badge className="bg-green-100 text-green-800 mt-2">{story.achievement}</Badge>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">{story.story}</p>
                      
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="font-medium">{story.rating}</span>
                        </div>
                        <span className="text-gray-500">{story.jobs}+ jobs</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="working">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                    Working on GharKaKaam
                  </CardTitle>
                  <CardDescription>
                    Everything you need to know about working professionally on our platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Getting Started</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Complete your profile verification</li>
                        <li>• Set up your service offerings</li>
                        <li>• Define your working hours</li>
                        <li>• Upload required documents</li>
                        <li>• Complete platform training</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Managing Jobs</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Accept jobs within 30 minutes</li>
                        <li>• Communicate clearly with customers</li>
                        <li>• Arrive on time for appointments</li>
                        <li>• Complete work as per requirements</li>
                        <li>• Request payment upon completion</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Quality Standards</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Maintain 4.5+ star rating</li>
                        <li>• Complete 90%+ of accepted jobs</li>
                        <li>• Respond to messages within 2 hours</li>
                        <li>• Follow safety protocols</li>
                        <li>• Use professional equipment</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Payment & Earnings</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Weekly payment cycle</li>
                        <li>• Direct bank transfer</li>
                        <li>• Transparent fee structure</li>
                        <li>• Performance bonuses available</li>
                        <li>• Instant payment for premium workers</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default SafetyGuidelines;
