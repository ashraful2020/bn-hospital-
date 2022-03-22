import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleDepartment from './SingleDepartment';

const Department = () => {
  const [department,setDepartment]=useState([])
    useEffect(() => {
      fetch("./department.json")
        .then((res) => res.json())
        .then((data) => setDepartment(data)); 
    }, []);

    return <Container> 
        <h1 className="features-header">All Department's of our hospital</h1>
          <Grid container spacing={2}>
            {department.map((data) => ( 
              <SingleDepartment key={data.name} data={data}></SingleDepartment>
            ))}
          </Grid>  
    </Container>;
};

export default Department;