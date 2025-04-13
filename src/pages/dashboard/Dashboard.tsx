
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import CasesList from '@/components/cases/CasesList';
import AppointmentList from '@/components/appointments/AppointmentList';
import MessageCenter from '@/components/messaging/MessageCenter';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, MessageCircle, ChevronRight, FileText, RefreshCw, Bell } from 'lucide-react';

// Mock notifications data
const notifications = [
  {
    id: '1',
    type: 'case_update',
    title: 'Case Update: Johnson Divorce Settlement',
    message: 'New document has been uploaded to your case file.',
    timestamp: '2023-11-18T14:30:00',
    read: false
  },
  {
    id: '2',
    type: 'appointment_reminder',
    title: 'Appointment Reminder',
    message: 'Your consultation with Sarah Johnson is scheduled for tomorrow at 10:00 AM.',
    timestamp: '2023-11-18T09:15:00',
    read: false
  },
  {
    id: '3',
    type: 'message',
    title: 'New Message from Maria Rodriguez',
    message: 'Ive reviewed the documents you sent and have a few questions...',
    timestamp: '2023-11-17T16:45:00',
    read: true
  }
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's an overview of your legal matters.
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0">
            <Link to="/appointments/new">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Consultation
            </Link>
          </Button>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Overview
            </TabsTrigger>
            <TabsTrigger value="cases" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Cases
            </TabsTrigger>
            <TabsTrigger value="appointments" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Appointments
            </TabsTrigger>
            <TabsTrigger value="messages" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Messages
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Briefcase className="mr-2 h-5 w-5 text-primary" />
                    Active Cases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3</div>
                  <p className="text-muted-foreground text-sm">
                    2 high priority, 1 medium priority
                  </p>
                  <Button variant="link" size="sm" className="px-0 mt-2" asChild>
                    <Link to="/cases">
                      View all cases
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Upcoming Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2</div>
                  <p className="text-muted-foreground text-sm">
                    Next: Tomorrow at 10:00 AM
                  </p>
                  <Button variant="link" size="sm" className="px-0 mt-2" asChild>
                    <Link to="/appointments">
                      View calendar
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5 text-primary" />
                    Unread Messages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">4</div>
                  <p className="text-muted-foreground text-sm">
                    From 2 different conversations
                  </p>
                  <Button variant="link" size="sm" className="px-0 mt-2" asChild>
                    <Link to="/messages">
                      View messages
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>Recent Case Activity</CardTitle>
                      <Button variant="ghost" size="sm">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Refresh
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5">
                      <div className="flex">
                        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">New document uploaded</p>
                          <p className="text-sm text-muted-foreground">
                            Property Settlement Agreement - Johnson Divorce Settlement
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Today at 2:30 PM by Sarah Johnson
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <MessageCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Case note added</p>
                          <p className="text-sm text-muted-foreground">
                            "Opposing counsel has requested an extension for document submission..."
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Yesterday at 11:15 AM by Maria Rodriguez
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Hearing scheduled</p>
                          <p className="text-sm text-muted-foreground">
                            Motion Hearing - Rodriguez Immigration Appeal
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            2 days ago by David Chen
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4" asChild>
                      <Link to="/cases">View All Activity</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center">
                        <Bell className="mr-2 h-5 w-5 text-primary" />
                        Notifications
                      </CardTitle>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        Mark all read
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id} 
                          className={`p-3 rounded-md ${notification.read ? 'bg-background' : 'bg-primary/5 border-l-2 border-primary'}`}
                        >
                          <p className={`text-sm font-medium ${notification.read ? '' : 'text-primary'}`}>
                            {notification.title}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {new Date(notification.timestamp).toLocaleString()}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="link" size="sm" className="w-full mt-2" asChild>
                      <Link to="/notifications">
                        View All Notifications
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cases">
            <CasesList />
          </TabsContent>
          
          <TabsContent value="appointments">
            <AppointmentList clientView={true} />
          </TabsContent>
          
          <TabsContent value="messages">
            <MessageCenter />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
