
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import AdvocateCard from '@/components/ui/AdvocateCard';
import SearchFilters from '@/components/ui/SearchFilters';
import { Button } from '@/components/ui/button';

// Mock data for advocates
const advocatesData = [
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
  {
    id: '4',
    name: 'James Wilson',
    avatar: '',
    speciality: 'Personal Injury Lawyer',
    rating: 4.6,
    reviewCount: 95,
    location: 'Houston, TX',
    experience: 10,
    areas: ['Car Accidents', 'Workplace Injuries', 'Medical Malpractice'],
    availability: 'Available today',
  },
  {
    id: '5',
    name: 'Emily Taylor',
    avatar: '',
    speciality: 'Corporate Law Attorney',
    rating: 4.9,
    reviewCount: 142,
    location: 'Boston, MA',
    experience: 17,
    areas: ['Contracts', 'Business Formation', 'Mergers & Acquisitions'],
    availability: 'Available next week',
  },
  {
    id: '6',
    name: 'Michael Brown',
    avatar: '',
    speciality: 'Real Estate Lawyer',
    rating: 4.7,
    reviewCount: 78,
    location: 'San Francisco, CA',
    experience: 9,
    areas: ['Property Law', 'Landlord-Tenant', 'Real Estate Contracts'],
    availability: 'Available in 3 days',
  },
  {
    id: '7',
    name: 'Jennifer Lopez',
    avatar: '',
    speciality: 'Intellectual Property Attorney',
    rating: 4.8,
    reviewCount: 104,
    location: 'Seattle, WA',
    experience: 14,
    areas: ['Patents', 'Trademarks', 'Copyright'],
    availability: 'Available this week',
  },
  {
    id: '8',
    name: 'Robert Smith',
    avatar: '',
    speciality: 'Employment Lawyer',
    rating: 4.5,
    reviewCount: 67,
    location: 'Denver, CO',
    experience: 7,
    areas: ['Discrimination', 'Wrongful Termination', 'Labor Laws'],
    availability: 'Available tomorrow',
  },
  {
    id: '9',
    name: 'Amanda Parker',
    avatar: '',
    speciality: 'Tax Law Attorney',
    rating: 4.9,
    reviewCount: 88,
    location: 'Phoenix, AZ',
    experience: 11,
    areas: ['Tax Planning', 'IRS Disputes', 'Corporate Taxation'],
    availability: 'Available next week',
    featured: true,
  },
];

export default function AdvocatesPage() {
  const [advocates, setAdvocates] = useState(advocatesData);
  const [loading, setLoading] = useState(false);
  
  // In a real application, this would filter the actual data or make an API call
  const handleSearch = (filters: any) => {
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      // This is just a simple filter for demonstration
      // In a real app, you would implement proper filtering logic
      const filtered = advocatesData.filter(advocate => {
        // Filter by location
        if (filters.location !== 'All Locations' && !advocate.location.includes(filters.location)) {
          return false;
        }
        
        // Filter by search query
        if (filters.query && !advocate.name.toLowerCase().includes(filters.query.toLowerCase()) &&
            !advocate.speciality.toLowerCase().includes(filters.query.toLowerCase())) {
          return false;
        }
        
        // Filter by practice areas
        if (filters.practiceAreas.length > 0) {
          const hasMatchingArea = filters.practiceAreas.some((area: string) => 
            advocate.areas.some(advocateArea => advocateArea.includes(area))
          );
          if (!hasMatchingArea) return false;
        }
        
        return true;
      });
      
      setAdvocates(filtered);
      setLoading(false);
    }, 500);
  };
  
  const resetSearch = () => {
    setAdvocates(advocatesData);
  };

  return (
    <Layout className="page-transition">
      <div className="pb-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-3">Find Legal Advocates</h1>
          <p className="text-lg text-legal-600 max-w-3xl">
            Connect with experienced legal professionals specializing in various practice areas. 
            Use the filters below to find the perfect advocate for your specific needs.
          </p>
        </div>
        
        <SearchFilters className="mb-8" onSearch={handleSearch} />
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {advocates.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-xl font-medium mb-2">No advocates found</h3>
                <p className="text-legal-600 mb-6">Try adjusting your search filters</p>
                <Button onClick={resetSearch}>
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {advocates.map((advocate) => (
                  <AdvocateCard key={advocate.id} advocate={advocate} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
