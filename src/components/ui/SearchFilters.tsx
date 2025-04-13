
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Search, MapPin, X } from 'lucide-react';

interface SearchFiltersProps {
  className?: string;
  onSearch?: (filters: any) => void;
}

const locationOptions = [
  'All Locations',
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
];

const practiceAreas = [
  'Family Law',
  'Criminal Defense',
  'Corporate Law',
  'Immigration',
  'Real Estate',
  'Intellectual Property',
  'Tax Law',
  'Labor & Employment',
  'Personal Injury',
  'Bankruptcy',
];

const languages = [
  'English',
  'Spanish',
  'French',
  'Mandarin',
  'Hindi',
  'Arabic',
  'Portuguese',
  'Bengali',
  'Russian',
  'Japanese',
];

export default function SearchFilters({ className, onSearch }: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('All Locations');
  const [experienceRange, setExperienceRange] = useState([0]);
  const [selectedPracticeAreas, setSelectedPracticeAreas] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const handleSearch = () => {
    // Build filters object
    const filters = {
      query: searchQuery,
      location,
      experience: experienceRange[0],
      practiceAreas: selectedPracticeAreas,
      languages: selectedLanguages,
    };
    
    // Update active filters for display
    const newActiveFilters = [];
    if (searchQuery) newActiveFilters.push(`Query: ${searchQuery}`);
    if (location !== 'All Locations') newActiveFilters.push(`Location: ${location}`);
    if (experienceRange[0] > 0) newActiveFilters.push(`Experience: ${experienceRange[0]}+ years`);
    selectedPracticeAreas.forEach(area => newActiveFilters.push(`Practice: ${area}`));
    selectedLanguages.forEach(lang => newActiveFilters.push(`Language: ${lang}`));
    
    setActiveFilters(newActiveFilters);
    
    // Call search callback if provided
    if (onSearch) {
      onSearch(filters);
    }
  };
  
  const removeFilter = (filter: string) => {
    const type = filter.split(':')[0].trim();
    const value = filter.split(':')[1].trim();
    
    if (type === 'Query') setSearchQuery('');
    if (type === 'Location') setLocation('All Locations');
    if (type === 'Experience') setExperienceRange([0]);
    if (type === 'Practice') {
      setSelectedPracticeAreas(prev => prev.filter(area => area !== value));
    }
    if (type === 'Language') {
      setSelectedLanguages(prev => prev.filter(lang => lang !== value));
    }
    
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };
  
  const clearAllFilters = () => {
    setSearchQuery('');
    setLocation('All Locations');
    setExperienceRange([0]);
    setSelectedPracticeAreas([]);
    setSelectedLanguages([]);
    setActiveFilters([]);
  };
  
  const togglePracticeArea = (area: string) => {
    setSelectedPracticeAreas(prev => 
      prev.includes(area) 
        ? prev.filter(a => a !== area) 
        : [...prev, area]
    );
  };
  
  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language) 
        : [...prev, language]
    );
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input 
            type="text" 
            placeholder="Search advocates by name, expertise..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex-shrink-0 w-full md:w-48">
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Location" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {locationOptions.map(loc => (
                <SelectItem key={loc} value={loc}>{loc}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <Button onClick={handleSearch}>
          Search
        </Button>
      </div>
      
      {/* Active filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {activeFilters.map(filter => (
            <Badge 
              key={filter} 
              variant="secondary"
              className="flex items-center gap-1 bg-legal-100"
            >
              {filter}
              <button 
                onClick={() => removeFilter(filter)}
                className="ml-1 rounded-full hover:bg-legal-200 p-0.5"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {filter}</span>
              </button>
            </Badge>
          ))}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearAllFilters}
            className="text-sm h-7 px-2 text-muted-foreground"
          >
            Clear all
          </Button>
        </div>
      )}
      
      {/* Advanced filters */}
      <Accordion type="single" collapsible className="w-full border rounded-md">
        <AccordionItem value="advanced-filters" className="border-b-0">
          <AccordionTrigger className="px-4">Advanced Filters</AccordionTrigger>
          <AccordionContent className="px-4 pb-4 pt-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Experience slider */}
              <div className="space-y-2">
                <Label>Experience (years)</Label>
                <div className="pt-2 px-1">
                  <Slider
                    value={experienceRange}
                    onValueChange={setExperienceRange}
                    max={30}
                    step={1}
                  />
                </div>
                <div className="text-sm text-right text-muted-foreground">
                  {experienceRange[0]}+ years
                </div>
              </div>
              
              {/* Practice areas */}
              <div className="space-y-3">
                <Label>Practice Areas</Label>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                  {practiceAreas.map(area => (
                    <div key={area} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`area-${area}`} 
                        checked={selectedPracticeAreas.includes(area)}
                        onCheckedChange={() => togglePracticeArea(area)}
                      />
                      <label 
                        htmlFor={`area-${area}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {area}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Languages */}
              <div className="space-y-3">
                <Label>Languages</Label>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                  {languages.map(language => (
                    <div key={language} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`lang-${language}`} 
                        checked={selectedLanguages.includes(language)}
                        onCheckedChange={() => toggleLanguage(language)}
                      />
                      <label 
                        htmlFor={`lang-${language}`}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {language}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button
                size="sm"
                onClick={handleSearch}
              >
                Apply Filters
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
