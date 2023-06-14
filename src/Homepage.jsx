import React, { useState } from 'react';
import { Tabs, Tab, Typography } from '@mui/material';

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label = "Welcome" />
        <Tab label="User" />
        <Tab label="Employees" />
      </Tabs>
      {selectedTab === 0 && <Welcome />}
      {selectedTab === 1 && <UserTab />}
      {selectedTab === 2 && <EmployeesTab />}
    </div>
  );
};
const Welcome = () => {
  return (
    <div>
      <Typography variant="h4">Welcome</Typography>
      {/* Display the admin user list here */}
    </div>
  );
};
const UserTab = () => {
  return (
    <div>
      <Typography variant="h4">Admin User List</Typography>
      {/* Display the admin user list here */}
    </div>
  );
};

const EmployeesTab = () => {
  return (
    <div>
      <Typography variant="h4">Employee User List</Typography>
      {/* Display the employee user list here */}
    </div>
  );
};

export default HomePage;