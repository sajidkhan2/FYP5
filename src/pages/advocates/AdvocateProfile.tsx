
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Briefcase, 
  FileText, 
  Star, 
  MessageCircle,
  Clock,
  ExternalLink
} from 'lucide-react';

// Mock data
const advocateData = {
  id: '1',
  name: 'Sarah Johnson',
  avatar: '',
  speciality: 'Family Law Attorney',
  title: 'Senior Partner',
  firm: 'Johnson & Associates Legal',
  rating: 4.9,
  reviewCount: 127,
  location: 'New York, NY',
  experience: 12,
  bio: 'Sarah Johnson is a highly experienced family law attorney with over 12 years of practice focused on divorce, child custody, and domestic violence cases. She is known for her compassionate approach and dedication to achieving the best outcomes for families in difficult situations. Sarah is certified in mediation and collaborative law, offering clients alternatives to traditional litigation when appropriate.',
  education: [
    {
      degree: 'Juris Doctor',
      institution: 'Harvard Law School',
      year: '2010',
    },
    {
      degree: 'Bachelor of Arts in Political Science',
      institution: 'Columbia University',
      year: '2007',
    }
  ],
  certifications: [
    'New York State Bar Association',
    'American Bar Association',
    'Certified Family Law Specialist',
    'Certified Mediator'
  ],
  practiceAreas: [
    'Divorce',
    'Child Custody',
    'Alimony',
    'Domestic Violence Protection',
    'Mediation',
    'Collaborative Law'
  ],
  languages: ['English', 'Spanish'],
  contactInfo: {
    email: 'sarah.johnson@johnsonlegal.com',
    phone: '(555) 123-4567',
    office: '123 Legal Street, Suite 500, New York, NY 10001',
    website: 'www.johnsonlegal.com'
  },
  availability: {
    status: 'Available',
    nextAvailable: '2023-11-21',
    consultationFee: '$250',
    consultationLength: '60 minutes'
  },
  reviews: [
    {
      id: '1',
      client: 'Jennifer T.',
      rating: 5,
      date: '2023-10-15',
      comment: 'Sarah was incredibly supportive and knowledgeable throughout my difficult divorce process. She explained everything clearly and fought for what was fair. I couldn\'t have asked for better representation.',
    },
    {
      id: '2',
      client: 'Michael R.',
      rating: 5,
      date: '2023-09-22',
      comment: 'Excellent attorney who genuinely cares about her clients. Sarah helped me navigate a complex custody issue with professionalism and compassion. Highly recommended!',
    },
    {
      id: '3',
      client: 'Robert L.',
      rating: 4,
      date: '2023-08-05',
      comment: 'Very knowledgeable and responsive. Sarah helped me understand my options clearly and developed a strategy that worked for my situation. The only reason for 4 stars instead of 5 is that sometimes responses took a bit longer than expected, but that\'s understandable given her caseload.',
    },
  ],
  caseResults: [
    {
      type: 'Child Custody',
      outcome: 'Successfully secured primary custody for client while ensuring generous visitation rights for the other parent.',
      year: '2022',
    },
    {
      type: 'Divorce Settlement',
      outcome: 'Negotiated equitable distribution of $2.5M in assets without lengthy court proceedings.',
      year: '2021',
    },
    {
      type: 'Domestic Violence',
      outcome: 'Obtained comprehensive protection order and favorable custody arrangement for client and children.',
      year: '2023',
    },
  ],
  consultationTimes: [
    {
      date: '2023-11-21',
      times: ['9:00 AM', '11:30 AM', '2:00 PM'],
    },
    {
      date: '2023-11-22',
      times: ['10:00 AM', '3:30 PM'],
    },
    {
      date: '2023-11-23',
      times: ['9:00 AM', '1:00 PM', '4:00 PM'],
    },
  ],
};

export default function AdvocateProfile() {
  const { id } = useParams<{ id: string }>();
  const [selectedTab, setSelectedTab] = useState('overview');
  
  // In a real app, we would fetch the advocate data based on the ID
  // For this example, we'll use the mock data
  const advocate = advocateData;
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col items-center lg:items-start">
              <Avatar className="h-24 w-24 lg:h-32 lg:w-32">
                <AvatarImage src={advocate.avatar} alt={advocate.name} />
                <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                  {advocate.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="mt-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <div className="flex items-center">
                    <Star className="fill-amber-400 text-amber-400 h-4 w-4" />
                    <span className="ml-1 font-medium">{advocate.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({advocate.reviewCount} reviews)
                  </span>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start text-muted-foreground text-sm">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  <span>{advocate.location}</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-2xl lg:text-3xl font-bold mb-1">{advocate.name}</h1>
              <p className="text-legal-600 text-lg mb-2">{advocate.speciality}</p>
              <p className="text-sm text-muted-foreground mb-4">
                {advocate.title} at {advocate.firm} • {advocate.experience} years experience
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                {advocate.practiceAreas.slice(0, 4).map((area, index) => (
                  <Badge key={index} variant="outline" className="bg-legal-50">
                    {area}
                  </Badge>
                ))}
                {advocate.practiceAreas.length > 4 && (
                  <Badge variant="outline" className="bg-legal-50">
                    +{advocate.practiceAreas.length - 4} more
                  </Badge>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <a href={`/appointments/new?advocate=${advocate.id}`}>
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`/messages/new?recipient=${advocate.id}`}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Message
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-64 mt-6 lg:mt-0">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Consultation Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-medium text-green-600">
                      {advocate.availability.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Next Available:</span>
                    <span className="font-medium">
                      {new Date(advocate.availability.nextAvailable).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fee:</span>
                    <span className="font-medium">{advocate.availability.consultationFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{advocate.availability.consultationLength}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Profile Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="experience">Experience & Education</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="schedule">Availability</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About {advocate.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-legal-600">{advocate.bio}</p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Practice Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5">
                    {advocate.practiceAreas.map((area, index) => (
                      <li key={index} className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-primary" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-4 w-4 mr-2 mt-1 text-legal-500" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href={`mailto:${advocate.contactInfo.email}`} className="text-sm text-primary hover:underline">
                        {advocate.contactInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-4 w-4 mr-2 mt-1 text-legal-500" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a href={`tel:${advocate.contactInfo.phone}`} className="text-sm">
                        {advocate.contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-1 text-legal-500" />
                    <div>
                      <p className="text-sm font-medium">Office Address</p>
                      <p className="text-sm">{advocate.contactInfo.office}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 mt-1 text-legal-500" />
                    <div>
                      <p className="text-sm font-medium">Website</p>
                      <a href={`https://${advocate.contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                        {advocate.contactInfo.website}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {advocate.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-legal-200 pl-4 py-1">
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-legal-600">{edu.institution}, {edu.year}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Certifications & Bar Admissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {advocate.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="h-4 w-4 mr-2 text-primary" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {advocate.languages.map((lang, index) => (
                    <Badge key={index} variant="outline" className="bg-legal-50 px-3 py-1">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Notable Case Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {advocate.caseResults.map((result, index) => (
                    <div key={index} className="border-l-2 border-legal-200 pl-4 py-1">
                      <div className="flex justify-between">
                        <p className="font-medium">{result.type}</p>
                        <p className="text-sm text-muted-foreground">{result.year}</p>
                      </div>
                      <p className="text-legal-600 mt-1">{result.outcome}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews">
            <Card>
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle>Client Reviews</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {advocate.reviewCount} reviews with an average rating of {advocate.rating}/5
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="mr-1 text-2xl font-bold">{advocate.rating}</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(advocate.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {advocate.reviews.map((review) => (
                    <div key={review.id} className="border-b border-legal-100 pb-5 last:border-b-0">
                      <div className="flex justify-between mb-2">
                        <div className="font-medium">{review.client}</div>
                        <div className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString()}</div>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-legal-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Consultation Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-legal-600">
                    {advocate.name} offers {advocate.availability.consultationLength} consultations for {advocate.availability.consultationFee}. 
                    Select a time below to schedule your consultation.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {advocate.consultationTimes.map((slot, index) => (
                      <Card key={index} className="border-legal-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">
                            {new Date(slot.date).toLocaleDateString('en-US', { 
                              weekday: 'short', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 gap-2">
                            {slot.times.map((time, timeIndex) => (
                              <Button key={timeIndex} variant="outline" className="justify-start" asChild>
                                <a href={`/appointments/new?advocate=${advocate.id}&date=${slot.date}&time=${time}`}>
                                  <Clock className="mr-2 h-4 w-4 text-legal-500" />
                                  {time}
                                </a>
                              </Button>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <Button asChild>
                      <a href={`/appointments/new?advocate=${advocate.id}`}>
                        <Calendar className="mr-2 h-4 w-4" />
                        View More Available Times
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
