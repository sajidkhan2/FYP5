
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Calendar } from 'lucide-react';

interface AdvocateCardProps {
  advocate: {
    id: string;
    name: string;
    avatar: string;
    speciality: string;
    rating: number;
    reviewCount: number;
    location: string;
    experience: number;
    areas: string[];
    availability: string;
    featured?: boolean;
  };
  className?: string;
}

export default function AdvocateCard({ advocate, className }: AdvocateCardProps) {
  const initials = advocate.name
    .split(' ')
    .map(part => part.charAt(0))
    .join('');

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl border border-legal-100 bg-white p-5 shadow-sm transition-all hover:shadow-md",
        advocate.featured && "ring-2 ring-primary ring-offset-2",
        className
      )}
    >
      {advocate.featured && (
        <div className="absolute -right-10 top-4 rotate-45 bg-primary px-10 py-1 text-xs font-medium text-white">
          Featured
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <Avatar className="h-16 w-16 rounded-md">
          <AvatarImage src={advocate.avatar} alt={advocate.name} />
          <AvatarFallback className="rounded-md bg-legal-100 text-legal-800">
            {initials}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-lg font-medium text-legal-900">{advocate.name}</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "h-4 w-4", 
                      i < advocate.rating ? "fill-amber-400 text-amber-400" : "text-legal-200"
                    )} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-legal-600">
                ({advocate.reviewCount} reviews)
              </span>
            </div>
          </div>
          
          <p className="text-sm font-medium text-legal-700">{advocate.speciality}</p>
          
          <div className="flex flex-wrap gap-2">
            {advocate.areas.map((area) => (
              <Badge key={area} variant="secondary" className="bg-legal-100 text-legal-700 hover:bg-legal-200">
                {area}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-legal-600">
            <div className="flex items-center">
              <MapPin className="mr-1 h-4 w-4 text-legal-400" />
              {advocate.location}
            </div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4 text-legal-400" />
              {advocate.availability}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 pt-3">
            <Button asChild size="sm" className="w-full sm:w-auto">
              <Link to={`/advocates/${advocate.id}`}>
                View Profile
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
