import React, { useState, useEffect } from 'react';
import { Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const UserTab = () => {
  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    // Fetch admin user data
    fetchAdminUsers();
  }, []);

  const fetchAdminUsers = () => {
    // Make an API call to fetch admin user data
    fetch('API_ENDPOINT')
      .then((response) => response.json())
      .then((data) => {
        setAdminUsers(data.readEmployeeData);
      })
      .catch((error) => {
        console.error('Error fetching admin users:', error);
      });
  };

  return (
    <div>
      <Typography variant="h4">Admin User List</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            {/* Add other table headers as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {adminUsers.map((user) => (
            <TableRow key={user.empID}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              {/* Add other table cells as needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const EmployeesTab = () => {
  const [employeeUsers, setEmployeeUsers] = useState([]);

  useEffect(() => {
    // Fetch employee user data
    fetchEmployeeUsers();
  }, []);

  const fetchEmployeeUsers = () => {
    // Make an API call to fetch employee user data
    fetch('API_ENDPOINT')
      .then((response) => response.json())
      .then((data) => {
        setEmployeeUsers(data.readEmployeeData);
      })
      .catch((error) => {
        console.error('Error fetching employee users:', error);
      });
  };

  return (
    <div>
      <Typography variant="h4">Employee User List</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            {/* Add other table headers as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeUsers.map((user) => (
            <TableRow key={user.empID}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              {/* Add other table cells as needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HomePage;