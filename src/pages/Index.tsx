
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, MessageCircle, Search, Shield } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import AdvocateCard from '@/components/ui/AdvocateCard';
import ResourceCard from '@/components/ui/ResourceCard';

// Mock data
const featuredAdvocates = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: '',
    speciality: 'Family Law Attorney',
    rating: 4.9,
    reviewCount: 127,
    location: 'New York, NY',
    experience: 12,
    areas: ['Divorce', 'Child Custody', 'Alimony'],
    availability: 'Available next week',
    featured: true,
  },
  {
    id: '2',
    name: 'David Chen',
    avatar: '',
    speciality: 'Criminal Defense Lawyer',
    rating: 4.7,
    reviewCount: 89,
    location: 'Los Angeles, CA',
    experience: 8,
    areas: ['DUI Defense', 'Felony', 'White Collar'],
    availability: 'Available tomorrow',
  },
  {
    id: '3',
    name: 'Maria Rodriguez',
    avatar: '',
    speciality: 'Immigration Attorney',
    rating: 4.8,
    reviewCount: 113,
    location: 'Chicago, IL',
    experience: 15,
    areas: ['Visas', 'Green Cards', 'Citizenship'],
    availability: 'Available this week',
    featured: true,
  },
];

const testimonials = [
  {
    id: '1',
    content: "Working with AdvocateConnect transformed my experience as a client. The platform made it easy to communicate with my lawyer and track the progress of my case. I felt informed and involved every step of the way.",
    name: 'Jennifer Thompson',
    title: 'Client',
    avatar: '',
  },
  {
    id: '2',
    content: "As an attorney, this platform has revolutionized how I manage client relationships. The scheduling and case management tools save me hours each week, allowing me to focus more on my clients' needs.",
    name: 'Robert Garcia',
    title: 'Corporate Lawyer',
    avatar: '',
  },
  {
    id: '3',
    content: "The transparency and communication tools have significantly improved client satisfaction at our firm. Our clients appreciate the real-time updates and secure messaging features.",
    name: 'Michael Chen',
    title: 'Managing Partner, Chen & Associates',
    avatar: '',
  },
];

const resources = [
  {
    id: '1',
    title: 'Understanding Your Rights in Employment Disputes',
    description: 'A comprehensive guide to workplace rights and how to navigate employment-related legal challenges.',
    type: 'Article',
    category: 'Employment Law',
    date: '2023-06-15',
    readTime: '8 min read',
    viewCount: 1245,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=500&auto=format',
  },
  {
    id: '2',
    title: 'The Complete Guide to Estate Planning',
    description: 'Essential steps to protect your assets and provide for your loved ones through proper estate planning.',
    type: 'Guide',
    category: 'Estate Law',
    date: '2023-05-22',
    readTime: '12 min read',
    viewCount: 978,
    image: 'https://images.unsplash.com/photo-1537214643712-646fa00d5522?q=80&w=500&auto=format',
  },
  {
    id: '3',
    title: 'Navigating Child Custody Proceedings',
    description: 'Important information for parents going through custody disputes, focusing on the best interests of the child.',
    type: 'Article',
    category: 'Family Law',
    date: '2023-04-10',
    readTime: '10 min read',
    viewCount: 1567,
    image: 'https://images.unsplash.com/photo-1541959833400-049d37f98ccd?q=80&w=500&auto=format',
  },
];

const features = [
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: 'Secure Communication',
    description: 'End-to-end encrypted messaging between clients and advocates ensures that all communication remains confidential and secure.'
  },
  {
    icon: <Calendar className="h-12 w-12 text-primary" />,
    title: 'Seamless Scheduling',
    description: 'Integrated calendar system allows for easy appointment booking with automatic reminders to keep everyone on track.'
  },
  {
    icon: <MessageCircle className="h-12 w-12 text-primary" />,
    title: 'Real-time Updates',
    description: 'Receive instant notifications about case developments, document uploads, and important deadlines.'
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: 'Advanced Search',
    description: 'Find the right legal advocate based on specialization, location, language, and availability using our powerful search tools.'
  },
];

export default function Index() {
  return (
    <Layout fullWidth={true} className="pt-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-legal-50 to-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <div className="inline-block mb-3">
                <span className="bg-legal-100 text-legal-800 text-xs font-medium px-3 py-1 rounded-full">
                  Connecting Clients & Legal Advocates
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-legal-950 leading-tight mb-4">
                Modern Legal Services,<br />
                <span className="text-primary">Simplified</span>
              </h1>
              <p className="text-lg sm:text-xl text-legal-600 mb-8 max-w-xl">
                AdvocateConnect streamlines communication between legal advocates and clients, making legal services more transparent, efficient, and accessible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/register">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/advocates">
                    Find an Advocate
                  </Link>
                </Button>
              </div>
              <div className="flex items-center mt-8 text-legal-600">
                <div className="flex -space-x-2 mr-3">
                  <Avatar className="border-2 border-white h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=faces" />
                    <AvatarFallback>DC</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-white h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                </div>
                <p className="text-sm">
                  <span className="font-semibold">4.8/5</span> from over 500+ reviews
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center animate-fade-down">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-legal-100 rounded-full"></div>
                <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=600&auto=format" 
                    alt="Legal consultation" 
                    className="w-full h-auto"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-medium mb-2">Seamless Legal Consultation</h3>
                    <p className="text-legal-600 text-sm">Connect with qualified legal advocates for expert advice on your specific needs.</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-xs text-legal-500">"Exceptional service and results"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features stripe */}
        <div className="container mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-legal-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How AdvocateConnect Works</h2>
            <p className="text-legal-600 text-lg">
              Our platform simplifies the legal process by connecting clients with advocates and providing tools for efficient case management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-6 rounded-xl border border-legal-100 bg-white shadow-sm flex flex-col items-center text-center group hover-scale">
              <div className="absolute -top-5 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-semibold">1</div>
              <img 
                src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=300&auto=format" 
                alt="Search for advocates" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-medium mb-3">Find Your Advocate</h3>
              <p className="text-legal-600">
                Search for legal advocates based on specialization, location, ratings, and availability to find the perfect match for your needs.
              </p>
              <Button variant="link" className="mt-4" asChild>
                <Link to="/advocates">
                  Explore Advocates
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative p-6 rounded-xl border border-legal-100 bg-white shadow-sm flex flex-col items-center text-center group hover-scale">
              <div className="absolute -top-5 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-semibold">2</div>
              <img 
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=300&auto=format" 
                alt="Schedule consultations" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-medium mb-3">Schedule Consultations</h3>
              <p className="text-legal-600">
                Book appointments, consultations, or meetings directly through our platform with real-time availability and automated reminders.
              </p>
              <Button variant="link" className="mt-4" asChild>
                <Link to="/services">
                  View Services
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative p-6 rounded-xl border border-legal-100 bg-white shadow-sm flex flex-col items-center text-center group hover-scale">
              <div className="absolute -top-5 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-semibold">3</div>
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=300&auto=format" 
                alt="Manage cases" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-medium mb-3">Manage Your Case</h3>
              <p className="text-legal-600">
                Track case progress, communicate securely, share documents, and receive updates in real-time through our intuitive dashboard.
              </p>
              <Button variant="link" className="mt-4" asChild>
                <Link to="/register">
                  Get Started
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Advocates Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-legal-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Featured Advocates</h2>
              <p className="text-legal-600 max-w-2xl">
                Connect with top-rated legal professionals specialized in various practice areas.
              </p>
            </div>
            <Button className="mt-4 md:mt-0" variant="outline" asChild>
              <Link to="/advocates">
                View All Advocates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAdvocates.map((advocate) => (
              <AdvocateCard key={advocate.id} advocate={advocate} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-legal-600 text-lg">
              Discover how AdvocateConnect is transforming the experience of legal professionals and clients alike.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-8 rounded-xl border border-legal-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-legal-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-legal-100 text-legal-700">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-legal-900">{testimonial.name}</h4>
                    <p className="text-sm text-legal-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-legal-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Legal Resources</h2>
              <p className="text-legal-600 max-w-2xl">
                Access free articles, guides, and resources to help you understand your legal rights and options.
              </p>
            </div>
            <Button className="mt-4 md:mt-0" variant="outline" asChild>
              <Link to="/resources">
                Explore All Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-legal-950 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Legal Experience?
          </h2>
          <p className="text-legal-200 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of clients and legal advocates who are already benefiting from our streamlined communication and case management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-legal-950 hover:bg-legal-100" asChild>
              <Link to="/register">
                Create Free Account
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">5,000+</div>
              <p className="text-legal-300">Active Users</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">1,200+</div>
              <p className="text-legal-300">Legal Advocates</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">25,000+</div>
              <p className="text-legal-300">Cases Managed</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <p className="text-legal-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
