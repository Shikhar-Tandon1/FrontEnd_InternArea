import { useNavigate } from 'react-router-dom';
import { checkForMobile } from "./checkMobile";
import { AllowedTime } from "./checkTime";

const AccessControl = () => {
  const isMobileUser = checkForMobile();
  const isAllowedTime = AllowedTime();
  const navigate= useNavigate();

  if (isMobileUser && !isAllowedTime) {
    navigate('/restricted');
  }
};
    

export default AccessControl;