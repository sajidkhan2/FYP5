
import { useState, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarTrigger, 
  SidebarProvider 
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Bell, 
  Calendar, 
  FileText, 
  Home, 
  Inbox, 
  LogOut, 
  MessageSquare, 
  Search, 
  Settings, 
  Users,
  User
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const location = useLocation();
  const [notificationCount, setNotificationCount] = useState(3);
  const [messageCount, setMessageCount] = useState(2);

  // Mock user data for the avatar
  const user = {
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Advocate',
    avatar: '',
    initials: 'JS'
  };

  const userNavigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Cases', href: '/dashboard/cases', icon: FileText },
    { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare, count: messageCount },
    { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
    { name: 'Clients', href: '/dashboard/clients', icon: Users },
    { name: 'Notifications', href: '/dashboard/notifications', icon: Bell, count: notificationCount },
  ];

  const bottomNavigation = [
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    { name: 'Sign Out', href: '/logout', icon: LogOut },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-legal-50">
        <Sidebar className="border-r border-legal-100">
          <SidebarHeader className="px-4 py-6">
            <Link to="/" className="flex items-center">
              <span className="text-lg font-semibold tracking-tight">
                <span className="text-legal-950">Advocate</span>
                <span className="text-primary">Connect</span>
              </span>
            </Link>
          </SidebarHeader>
          <SidebarContent className="px-2">
            <div className="space-y-1">
              {userNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all",
                    location.pathname === item.href
                      ? "bg-legal-100 text-legal-950"
                      : "text-legal-600 hover:bg-legal-100/60 hover:text-legal-900"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                  {item.count && (
                    <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-medium text-white">
                      {item.count}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </SidebarContent>
          <SidebarFooter className="border-t border-legal-100 px-4 py-4">
            <div className="space-y-1">
              {bottomNavigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all",
                    location.pathname === item.href
                      ? "bg-legal-100 text-legal-950"
                      : "text-legal-600 hover:bg-legal-100/60 hover:text-legal-900"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 px-3">
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-legal-200 text-legal-700">
                  {user.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-legal-900">{user.name}</span>
                <span className="text-xs text-legal-500">{user.role}</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="bg-white shadow-sm border-b border-legal-100">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              <div className="flex items-center gap-3">
                <SidebarTrigger />
                <div className="relative hidden md:block">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-4 w-4 text-legal-400" />
                  </div>
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full rounded-md border border-legal-200 bg-white py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-legal-600" />
                  {notificationCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-medium text-white">
                      {notificationCount}
                    </span>
                  )}
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Search className="h-5 w-5 text-legal-600" />
                </Button>
                <div className="hidden md:flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-legal-200 text-legal-700 text-xs">
                      {user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium text-legal-900">{user.name}</p>
                    <p className="text-xs text-legal-500">{user.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className={cn("flex-1 overflow-auto p-4 sm:p-6", className)}>
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
