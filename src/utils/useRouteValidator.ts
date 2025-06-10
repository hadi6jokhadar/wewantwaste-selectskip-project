import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { globalService } from "../services";

export const useRouteValidator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const validation = globalService.validateRoute(location.pathname);

    if (!validation.isValid && validation.redirectTo) {
      // Redirect to the appropriate route
      navigate(validation.redirectTo, { replace: true });
    }
  }, [location.pathname, navigate]);

  return {
    isCurrentStepValid: () =>
      globalService.validateRoute(location.pathname).isValid,
  };
};
