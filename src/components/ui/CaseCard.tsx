
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FileText, CalendarDays, Clock } from 'lucide-react';

interface CaseCardProps {
  caseData: {
    id: string;
    title: string;
    clientName: string;
    clientAvatar: string;
    type: string;
    status: 'active' | 'pending' | 'closed' | 'on-hold';
    lastUpdate: string;
    nextHearing?: string;
    description: string;
  };
  className?: string;
}

export default function CaseCard({ caseData, className }: CaseCardProps) {
  const initials = caseData.clientName
    .split(' ')
    .map(part => part.charAt(0))
    .join('');
    
  const statusColors = {
    'active': 'bg-green-100 text-green-800',
    'pending': 'bg-amber-100 text-amber-800',
    'closed': 'bg-slate-100 text-slate-800',
    'on-hold': 'bg-red-100 text-red-800',
  };

  return (
    <Card className={cn("hover:shadow-md transition-all", className)}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{caseData.title}</CardTitle>
          <Badge className={cn(statusColors[caseData.status])}>
            {caseData.status.charAt(0).toUpperCase() + caseData.status.slice(1)}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground pt-1">
          <FileText className="mr-1 h-4 w-4" />
          {caseData.type}
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex items-center mb-3">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarImage src={caseData.clientAvatar} alt={caseData.clientName} />
            <AvatarFallback className="bg-legal-100 text-legal-700 text-xs">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{caseData.clientName}</p>
            <p className="text-xs text-muted-foreground">Client</p>
          </div>
        </div>
        
        <p className="text-sm text-legal-600 line-clamp-2 mb-3">
          {caseData.description}
        </p>
        
        <div className="flex flex-col space-y-1 text-xs">
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-1 h-3.5 w-3.5" />
            <span>Last updated: {caseData.lastUpdate}</span>
          </div>
          {caseData.nextHearing && (
            <div className="flex items-center text-muted-foreground">
              <CalendarDays className="mr-1 h-3.5 w-3.5" />
              <span>Next hearing: {caseData.nextHearing}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link to={`/dashboard/cases/${caseData.id}`}>
            View Case Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
