import React from 'react';
import ActivityBadge from './ActivityBadge';
import MyCertificationList from './MyCertificationList';

const MyCertificationPage = () => {
  return (
    <div className="w-full">
      <ActivityBadge />
      <MyCertificationList />
    </div>
  );
};

export default MyCertificationPage;
