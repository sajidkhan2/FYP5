
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  noFooter?: boolean;
}

export default function Layout({ 
  children, 
  className, 
  fullWidth = false,
  noFooter = false 
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className={cn(
        "flex-1 pt-24",
        className
      )}>
        <div className={cn(
          fullWidth ? "w-full" : "container mx-auto px-4 sm:px-6 lg:px-8"
        )}>
          {children}
        </div>
      </main>
      {!noFooter && <Footer />}
    </div>
  );
}
