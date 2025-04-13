import { useState } from 'react';
import CaseCard from '@/components/ui/CaseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Mock data
const casesData = [
  {
    id: '1',
    title: 'Johnson Divorce Settlement',
    caseNumber: 'DIV-2023-0142',
    type: 'Divorce',
    status: 'Active',
    priority: 'High',
    client: {
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      phone: '(555) 123-4567'
    },
    advocate: {
      name: 'Michael Chen',
      avatar: ''
    },
    lastUpdated: '2023-11-15T10:30:00',
    nextHearing: '2023-12-10T09:00:00',
    description: 'Divorce settlement case involving property division and child custody arrangements.',
    progress: 65,
  },
  {
    id: '2',
    title: 'Rodriguez Immigration Appeal',
    caseNumber: 'IMM-2023-0089',
    type: 'Immigration',
    status: 'Active',
    priority: 'Medium',
    client: {
      name: 'Carlos Rodriguez',
      email: 'carlos.r@example.com',
      phone: '(555) 987-6543'
    },
    advocate: {
      name: 'Maria Rodriguez',
      avatar: ''
    },
    lastUpdated: '2023-11-12T15:45:00',
    nextHearing: '2023-12-15T13:30:00',
    description: 'Appeal against denial of work visa extension based on employment history.',
    progress: 40,
  },
  {
    id: '3',
    title: 'Thompson LLC Business Contract',
    caseNumber: 'BUS-2023-0257',
    type: 'Business',
    status: 'Pending',
    priority: 'Medium',
    client: {
      name: 'Robert Thompson',
      email: 'robert.t@example.com',
      phone: '(555) 456-7890'
    },
    advocate: {
      name: 'David Chen',
      avatar: ''
    },
    lastUpdated: '2023-11-10T09:15:00',
    nextHearing: null,
    description: 'Business contract review and negotiation for software development services.',
    progress: 25,
  },
  {
    id: '4',
    title: 'Davis Criminal Defense',
    caseNumber: 'CRM-2023-0198',
    type: 'Criminal',
    status: 'Active',
    priority: 'High',
    client: {
      name: 'James Davis',
      email: 'james.d@example.com',
      phone: '(555) 234-5678'
    },
    advocate: {
      name: 'David Chen',
      avatar: ''
    },
    lastUpdated: '2023-11-14T14:20:00',
    nextHearing: '2023-11-30T10:00:00',
    description: 'Defense case for misdemeanor charges related to traffic incident.',
    progress: 50,
  },
  {
    id: '5',
    title: 'Wilson Estate Planning',
    caseNumber: 'EST-2023-0073',
    type: 'Estate',
    status: 'Completed',
    priority: 'Low',
    client: {
      name: 'Elizabeth Wilson',
      email: 'elizabeth.w@example.com',
      phone: '(555) 876-5432'
    },
    advocate: {
      name: 'Sarah Johnson',
      avatar: ''
    },
    lastUpdated: '2023-11-08T11:00:00',
    nextHearing: null,
    description: 'Estate planning including will preparation and asset protection strategy.',
    progress: 100,
  },
];

interface CasesListProps {
  advocateView?: boolean;
}

export default function CasesList({ advocateView = false }: CasesListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  
  const filteredCases = casesData.filter(caseItem => {
    const matchesSearch = caseItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caseItem.caseNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? caseItem.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-legal-900">
          {advocateView ? 'Your Cases' : 'My Cases'}
        </h2>
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
          <div className="relative max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search cases..."
              className="pl-8 pr-4 py-2 w-full sm:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {advocateView && (
            <Button size="sm" variant="outline" asChild>
              <a href="/cases/new">+ New Case</a>
            </Button>
          )}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button 
          size="sm" 
          variant={statusFilter === null ? "default" : "outline"}
          onClick={() => setStatusFilter(null)}
        >
          All
        </Button>
        <Button 
          size="sm" 
          variant={statusFilter === 'Active' ? "default" : "outline"}
          onClick={() => setStatusFilter('Active')}
        >
          Active
        </Button>
        <Button 
          size="sm" 
          variant={statusFilter === 'Pending' ? "default" : "outline"}
          onClick={() => setStatusFilter('Pending')}
        >
          Pending
        </Button>
        <Button 
          size="sm" 
          variant={statusFilter === 'Completed' ? "default" : "outline"}
          onClick={() => setStatusFilter('Completed')}
        >
          Completed
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* {filteredCases.length > 0 ? (
          filteredCases.map((caseItem) => (
            // <CaseCard key={caseItem.id} caseData={caseItem} />
          ))
        ) : (
          <div className="text-center py-12 border rounded-lg">
            <p className="text-muted-foreground">No cases found matching your criteria.</p>
          </div>
        )} */}
      </div>
    </div>
  );
}
