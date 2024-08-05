export const getSystemInfo = () => {
  const userAgent = navigator.userAgent;
  const isMobile = /Mobi|Android/i.test(userAgent);

  const browser = userAgent.includes('Chrome') ? 'Chrome' :
                  userAgent.includes('Firefox') ? 'Firefox' :
                  userAgent.includes('Safari') ? 'Safari' :
                  userAgent.includes('Edge') ? 'Edge' : 'Other';

  const os = userAgent.includes('Win') ? 'Windows' :
             userAgent.includes('Mac') ? 'Mac OS' :
             userAgent.includes('X11') ? 'UNIX' :
             userAgent.includes('Linux') ? 'Linux' : 'Other';

  return {
    browser,
    os,
    device: isMobile ? 'Mobile' : 'Desktop'
  };
};