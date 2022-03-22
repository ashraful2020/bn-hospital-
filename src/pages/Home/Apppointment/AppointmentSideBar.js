import React from 'react';
import AppointmentContact from './AppointmentContact';
import VisitRules from './VisitRules';

const AppointmentSideBar = () => {
    return (
        <div>
          <AppointmentContact/>
          <VisitRules/>
        </div>
    );
};

export default AppointmentSideBar;