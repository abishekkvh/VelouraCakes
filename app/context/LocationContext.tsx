'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LocationContextType {
  location: string;
  setLocation: (location: string) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<string>('Madurai');

  useEffect(() => {
    const savedLocation = localStorage.getItem('veloura-location');
    if (savedLocation) {
      setLocation(savedLocation);
    }
  }, []);

  const handleSetLocation = (newLocation: string) => {
    setLocation(newLocation);
    localStorage.setItem('veloura-location', newLocation);
  };

  return (
    <LocationContext.Provider value={{ location, setLocation: handleSetLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
