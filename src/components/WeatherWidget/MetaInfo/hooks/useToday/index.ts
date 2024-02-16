import {useEffect, useState} from 'react';
import {getCurrentDayInfo} from '@utils/date.ts';

export const useToday = () => {
  const [today, setToday] = useState(getCurrentDayInfo());

  useEffect(() => {
    // Every 10 minutes
    const interval = setInterval(() => {
      setToday(getCurrentDayInfo());
    }, 1000 * 60 * 10);
    return () => clearInterval(interval);
  }, []);

  return today;
};
