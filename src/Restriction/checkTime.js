export const AllowedTime = () => {
    const now = new Date();
    const hours = now.getHours();
  
    const startAllowed = 10; 
    const endAllowed = 13; 
  
    return hours >= startAllowed && hours < endAllowed;
  };