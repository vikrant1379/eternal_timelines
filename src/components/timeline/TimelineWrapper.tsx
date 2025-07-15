'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { TimelineEvent } from '@/types/timeline';

// Dynamically import the InteractiveTimeline component
const InteractiveTimeline = dynamic(
  () => import('./InteractiveTimeline'),
  {
    ssr: false,
    loading: () => <LoadingSpinner />
  }
);

interface TimelineWrapperProps {
  events: TimelineEvent[];
}

export default function TimelineWrapper({ events }: TimelineWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingSpinner />;
  }

  return <InteractiveTimeline events={events} />;
} 