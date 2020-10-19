import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('UA-28344012-1');
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

export default usePageTracking;
