import { Outlet } from 'react-router';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BackgroundEffect } from '../components/BackgroundEffect';

export function Root() {
  useEffect(() => {
    
    document.documentElement.classList.add('dark');
    
   
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <BackgroundEffect />
      <div className="relative z-10">
        <Header />
        <main className="pt-16 sm:pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
