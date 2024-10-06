import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from "@mui/material";
import styled from '@emotion/styled';
import { Navbar } from './navbar/navbar';
import { useLocation, useParams  } from 'react-router-dom';
import axios from "axios";
import { useEffect } from 'react';


  // ...
const FormContainer = {
  "background-color": "white",
  "display": "flex",
  "align-items": "center",
  "justify-content": "center",
  "flex-direction": "column",
  "padding": "32px",
  "border-radius": "8px",
  "box-shadow": "0px 3px 6px rgba(0, 0, 0, 0.16)",
  "max-width": "500px",
 
  "margin": "0 auto",
  

};





const FormField = styled(TextField)`
  margin: 16px 0;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  margin: 16px 0;
`;

export default function Studentdatas({HandlDownloaddatas=()=>{}}) {
  
  const [isanyfieldempty , setisanyfieldempty] = useState(false);
  const [issubmitted , setissubmitted] = useState(false);
 
  

  const [userCredentials, setUserCredentials] = useState({
    Username: '',
    email: '',
    phonenumber: '',
    studentdetails : ''
  });

  const [errors, setErrors] = useState({
    Username: false,
    email: false,
    phonenumber: false,
    studentdetails : false
  });

  const handleChange = (event) => {
    setisanyfieldempty(false);
    const { name, value } = event.target;
  
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  
   

    if (value.length > 0) {
      console.log(`hitttt 4`);
      setErrors({
        ...errors,
        [name]: false
      });
   
    }
  
  };

  const  handleSubmit =  async (event) => {
    console.log(userCredentials);

console.log(`test`);

    
  if(userCredentials.Username.length > 0 && userCredentials.email.length > 0 &&
    userCredentials.studentdetails.length > 0 && userCredentials.phonenumber.length > 0 ){

const response = await axios.post('https://guvi-studentdetails.onrender.com/addstudentdetails', { ...userCredentials});
   
console.log(response.status);

if(response.status === 200){
  console.log(`hit iside`);
  setissubmitted(true);
  setUserCredentials(
    {
      ...userCredentials,
      Username: '',
      email: '',
      phonenumber: '',
      studentdetails : ''}
  
  )
  
  
  HandlDownloaddatas(datas);
  

}





    }
  
   
   
    
    if(userCredentials.studentdetails.length === 0){


      setErrors({...errors , studentdetails : true})
    }if(userCredentials.phonenumber.length === 0){


      setErrors({...errors , phonenumber : true})

    }
    if(userCredentials.email.length === 0){


      setErrors({...errors , email : true})
    }
    
    if(userCredentials.Username.length === 0){


      setErrors({...errors , Username : true})
    }
  
  };

  return (
    

<Grid  container style={{"backgroundColor"  : "black"}}>
<Navbar/>
<Grid container sx={12} style={{"backgroundColor" : "black" , "padding-top" : "60px" , "textAlign" : "center",
  "display" : "flex",
"alignItems" : "center" , "justifyContent" : "center" , "maxHeight" : "30px"
}}>





   
        
        </Grid>
    
      <Grid container style={FormContainer}>

{ issubmitted ?
 (<Typography style={{"color" : "Black"}}>


</Typography>) : "please Enter the student details Here!"


}


     
<Typography  variant='h6' style={{  "textAlign" : "center" , "color" : "white"
, "fontFamily" : "revert-layer"



}}>
      { issubmitted ? "Student details are saved successfully" : "" }


      
      </Typography>


      <Typography  variant='h6' style={{  "textAlign" : "center" , "color" : "green",
        "fontFamily" : "revert-layer"
      }}>
{ issubmitted ?  
"Student details are saved successfully!" :
"" 



}




      
      </Typography>







      <FormField
          autoFocus
          required
          margin="dense"
          id="username"
          name="Username"
          label="Name"
          variant="standard"
          onChange={handleChange}
          error={errors.Username}
          
          value={userCredentials.Username}
          helperText={errors.Username ? 'Username is required' : ''}
        />


        <FormField
          required
          margin="dense"
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="standard"
          onChange={handleChange}
          value={userCredentials.email}
          error={errors.email}
          helperText={errors.email ? 'Email is required' : ''}
        />
        <FormField
          required
          margin="dense"
          id="phonenumber"
          name="phonenumber"
          label="Phone Number"
          type="number"
          variant="standard"
          onChange={handleChange}
          value={userCredentials.phonenumber}
          error={errors.phonenumber}
          helperText={errors.phonenumber ? 'Phone number is required' : ''}
        />
         <FormField
          autoFocus
          required
          margin="dense"
          id="studentdetails"
          name="studentdetails"
          label="studentdetails"
          variant="standard"
          onChange={handleChange}
          error={errors.studentdetails}
          value={userCredentials.studentdetails}
          helperText={errors.studentdetails ? 'studentdetails is required' : ''}
        />
    
        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
          onClick={()=>{
            console.log();

            handleSubmit();
          }}
          style={{"backgroundColor" : "black"}}
        >
          Submit
        </SubmitButton>
        </Grid>
      </Grid>

  );
}
