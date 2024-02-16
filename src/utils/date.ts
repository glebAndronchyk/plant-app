import {getDeviceLocale} from '@utils/locale.ts';

export const getCurrentDayInfo = (locale?: string) => {
  const date = new Date();
  const dayLocale = locale || getDeviceLocale();
  const dayInfo = date.toLocaleDateString(dayLocale, {
    weekday: 'long',
    month: 'numeric',
    day: 'numeric',
  });

  return dayInfo;
};
