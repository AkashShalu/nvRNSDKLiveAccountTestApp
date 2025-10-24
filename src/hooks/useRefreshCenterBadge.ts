import React, {useState} from 'react';

const useRefreshCenterBadge = () => {
  const [shouldRefreshCenterBadge, setShouldRefreshCenterBadge] =
    useState(false);

  const refreshCenterBadgeNow = (shouldRefreshNow: boolean) => {
    setShouldRefreshCenterBadge(
      prevShouldRefreshCenterBadge => shouldRefreshNow,
    );
  };
  return [shouldRefreshCenterBadge, refreshCenterBadgeNow];
};

export default useRefreshCenterBadge;
