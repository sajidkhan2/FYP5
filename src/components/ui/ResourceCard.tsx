
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Clock, EyeIcon } from 'lucide-react';

interface ResourceCardProps {
  resource: {
    id: string;
    title: string;
    description: string;
    type: string;
    category: string;
    date: string;
    readTime: string;
    viewCount: number;
    image?: string;
  };
  className?: string;
}

export default function ResourceCard({ resource, className }: ResourceCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      {resource.image && (
        <div className="relative h-40 w-full overflow-hidden">
          <img
            src={resource.image}
            alt={resource.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader className={cn(resource.image ? "pt-4 pb-2" : "pb-2")}>
        <div className="flex justify-between items-start">
          <Badge className="bg-legal-100 text-legal-800 hover:bg-legal-200">
            {resource.category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <EyeIcon className="mr-1 h-3.5 w-3.5" />
            {resource.viewCount}
          </div>
        </div>
        <CardTitle className="line-clamp-2 text-lg font-medium mt-2">
          {resource.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-sm text-legal-600 line-clamp-3 mb-3">
          {resource.description}
        </p>
        
        <div className="flex justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <FileText className="mr-1 h-3.5 w-3.5" />
            {resource.type}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-3.5 w-3.5" />
            {resource.readTime}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link to={`/resources/${resource.id}`}>
            Read More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
