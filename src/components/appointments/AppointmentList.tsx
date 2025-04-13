
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar as CalendarIcon, Clock, MapPin, Video, Phone } from 'lucide-react';

// Mock appointment data
const appointmentsData = [
  {
    id: '1',
    title: 'Initial Consultation',
    date: '2023-11-20',
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    type: 'video',
    status: 'upcoming',
    client: {
      name: 'James Wilson',
      avatar: '',
    },
    advocate: {
      name: 'Sarah Johnson',
      avatar: '',
      speciality: 'Family Law',
    },
    notes: 'Initial discussion about divorce proceedings and custody arrangements.',
  },
  {
    id: '2',
    title: 'Document Review',
    date: '2023-11-22',
    startTime: '2:00 PM',
    endTime: '3:00 PM',
    type: 'in-person',
    location: '123 Legal Street, Suite 100, Lawsville',
    status: 'upcoming',
    client: {
      name: 'Emily Parker',
      avatar: '',
    },
    advocate: {
      name: 'David Chen',
      avatar: '',
      speciality: 'Corporate Law',
    },
    notes: 'Review of partnership agreement draft.',
  },
  {
    id: '3',
    title: 'Case Strategy Discussion',
    date: '2023-11-25',
    startTime: '11:30 AM',
    endTime: '12:30 PM',
    type: 'phone',
    status: 'upcoming',
    client: {
      name: 'Robert Thomas',
      avatar: '',
    },
    advocate: {
      name: 'Maria Rodriguez',
      avatar: '',
      speciality: 'Immigration Law',
    },
    notes: 'Strategy discussion for visa appeal process.',
  },
  {
    id: '4',
    title: 'Settlement Negotiation',
    date: '2023-11-15',
    startTime: '9:00 AM',
    endTime: '10:30 AM',
    type: 'in-person',
    location: '555 Court Avenue, Room 302, Lawsville',
    status: 'completed',
    client: {
      name: 'Lisa Johnson',
      avatar: '',
    },
    advocate: {
      name: 'Michael Chen',
      avatar: '',
      speciality: 'Personal Injury',
    },
    notes: 'Final settlement negotiation with insurance company representatives.',
  },
  {
    id: '5',
    title: 'Contract Review Follow-up',
    date: '2023-11-10',
    startTime: '3:30 PM',
    endTime: '4:30 PM',
    type: 'video',
    status: 'completed',
    client: {
      name: 'Daniel Brown',
      avatar: '',
    },
    advocate: {
      name: 'Sarah Johnson',
      avatar: '',
      speciality: 'Family Law',
    },
    notes: 'Follow-up discussion on employment contract terms.',
  },
];

const today = new Date();

interface AppointmentListProps {
  clientView?: boolean;
}

export default function AppointmentList({ clientView = false }: AppointmentListProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(today);
  const [showUpcoming, setShowUpcoming] = useState(true);
  
  // Filtered appointments based on date selection and upcoming/past toggle
  const filteredAppointments = appointmentsData.filter(appointment => {
    const appointmentDate = new Date(appointment.date);
    const isSelectedDate = selectedDate ? 
      appointmentDate.toDateString() === selectedDate.toDateString() : 
      true;
    
    const isUpcoming = new Date(`${appointment.date} ${appointment.startTime}`) >= today;
    
    return isSelectedDate && (showUpcoming ? isUpcoming : !isUpcoming);
  });

  // Function to get the icon based on appointment type
  const getAppointmentTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="h-4 w-4" />;
      case 'in-person':
        return <MapPin className="h-4 w-4" />;
      case 'phone':
        return <Phone className="h-4 w-4" />;
      default:
        return <CalendarIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border mx-auto"
          />
          
          <div className="flex justify-center space-x-2 mt-4">
            <Button
              size="sm"
              variant={showUpcoming ? "default" : "outline"}
              onClick={() => setShowUpcoming(true)}
            >
              Upcoming
            </Button>
            <Button
              size="sm"
              variant={!showUpcoming ? "default" : "outline"}
              onClick={() => setShowUpcoming(false)}
            >
              Past
            </Button>
          </div>
          
          {!clientView && (
            <Button className="w-full mt-6" asChild>
              <a href="/appointments/schedule">+ Schedule Appointment</a>
            </Button>
          )}
        </CardContent>
      </Card>
      
      <div className="lg:col-span-2 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {showUpcoming ? 'Upcoming Appointments' : 'Past Appointments'}
          </h2>
          
          {clientView && (
            <Button size="sm" asChild>
              <a href="/appointments/new">Request Appointment</a>
            </Button>
          )}
        </div>
        
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => (
            <Card key={appointment.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/4 bg-primary/5 p-4 flex flex-col justify-center items-center text-center">
                  <p className="text-lg font-bold">{new Date(appointment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                  <p className="text-sm text-muted-foreground">{appointment.startTime} - {appointment.endTime}</p>
                  <Badge className={`mt-2 ${appointment.status === 'completed' ? 'bg-legal-100 text-legal-800' : 'bg-primary/10 text-primary'}`}>
                    {appointment.status === 'completed' ? 'Completed' : 'Upcoming'}
                  </Badge>
                </div>
                
                <div className="sm:w-3/4 p-4">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">{appointment.title}</h3>
                    <div className="flex items-center">
                      {getAppointmentTypeIcon(appointment.type)}
                      <span className="ml-1 text-sm capitalize">{appointment.type}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{appointment.startTime} - {appointment.endTime}</span>
                  </div>
                  
                  {appointment.location && (
                    <div className="flex items-center mb-3">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{appointment.location}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-1">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={clientView ? appointment.advocate.avatar : appointment.client.avatar} />
                      <AvatarFallback>
                        {clientView 
                          ? appointment.advocate.name.split(' ').map(n => n[0]).join('')
                          : appointment.client.name.split(' ').map(n => n[0]).join('')
                        }
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">
                      {clientView 
                        ? `${appointment.advocate.name} (${appointment.advocate.speciality})`
                        : appointment.client.name
                      }
                    </span>
                  </div>
                  
                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/appointments/${appointment.id}`}>View Details</a>
                    </Button>
                    {appointment.status !== 'completed' && (
                      <Button size="sm" asChild>
                        <a href={`/appointments/${appointment.id}/join`}>
                          {appointment.type === 'video' 
                            ? 'Join Video Call' 
                            : appointment.type === 'phone' 
                              ? 'Start Call' 
                              : 'Get Directions'
                          }
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No appointments found for the selected date.</p>
            {!clientView && (
              <Button variant="outline" className="mt-4" asChild>
                <a href="/appointments/schedule">Schedule New Appointment</a>
              </Button>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
