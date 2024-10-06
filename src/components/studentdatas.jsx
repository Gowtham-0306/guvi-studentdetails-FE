import { Grid } from "@mui/material";
import { Navbar } from "./navbar/navbar";
import Grid2 from "@mui/material/Unstable_Grid2";
import styled from '@emotion/styled';
import { Projectcards } from "./projectcards";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export function SeeStudentdatas({  }) {
const [datas , setdatas] = useState([]);
     useEffect(() => {
         const fetchData = async () => {
           try {
            const response = await axios.get('https://guvi-studentdetails.onrender.com/getstudentdetails');
            console.log('Status:', response.status); 
            setdatas(...datas , response.data.studentdetails);
            
            

             console.log('Data:', response.data.studentdetails); // Log the actual data
         } catch (error) {
            console.error("Error fetching student data:", error); // Log error if occurs
          }
        };
    
        fetchData(); // Call the function to fetch data
      }, []);

      console.log(datas);
      
  return (

   <Grid container sx={12} style={{"backgroundColor" : "red" , "height" : "100vh"
  }} > 

            <Navbar/>


            <Grid container style={{"display" : "flex" , "alignItems" : "start" , "justifyContent" : "center" 
      , "backgroundColor": "grey" , "paddingTop" : "64px"
    }}>


{

    datas.map((details)=>(
   
<Projectcards

studentdatas = {details}
/>


    ))
}


</Grid>

  

    
        </Grid> 
  
  );
}
