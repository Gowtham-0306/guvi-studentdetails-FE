import { Grid } from "@mui/material";
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";

export function Projectcards({studentdatas= studentdatas}) {
  const [expanded, setExpanded] = useState(false);
  console.log(`cards`);
  console.log(studentdatas);
  
  

  return (


   
<Grid>

<Card
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      margin: "20px auto",
      marginLeft  : " 40px", // Center and add vertical spacing
      minWidth: 350, 
      minHeight : 300
      ,
      // Fixed maxwidth for better layout in grid
      backgroundColor: "black",
      borderRadius: "16px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-10px)", // 
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      },
       // C
    }}
  >

    <div
      style={{
        position: "absolute",
        top: "16px",
        right: "16px",
        color: "gold",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
 
    </div>

 



    <CardContent
      sx={{
        padding: "16px",
        textAlign: "center",
        flexGrow: 1, // Makes the content grow to fill space
      }}
    >
           <WorkspacesIcon style={{ color: "gold" }} />
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontWeight: "bold",
          marginBottom: "8px",
          color: "gold",
        }}
      >
Student Name : 
      </Typography>

      <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            color: "red",
            overflow: "hidden",
          }}
        >
{studentdatas.Username}
        </Typography>





      <Typography
          variant="body1"
          sx={{
            fontWeight: "italic",
            color: "white",
            overflow: "hidden",
          }}
        >
Student Phone : 
        </Typography>

        <Typography
          variant="body3"
          sx={{
            fontWeight: "italic",
            color: "red",
            overflow: "hidden",
          }}
        >
{studentdatas.phonenumber}
        </Typography>





        <Typography
          variant="body1"
          sx={{
            fontWeight: "italic",
            color: "white",
            overflow: "hidden",
          }}
        >






          
Student Details  :
        </Typography>

        <Typography
          variant="body3"
          sx={{
            fontWeight: "italic",
            color: "red",
            overflow: "hidden",
          }}
        >
{studentdatas.studentdetails}
        </Typography>

      {/* Description Box */}
      <Box sx={{ overflow: "hidden", marginBottom: "8px" }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "italic",
            color: "white",
            overflow: "hidden",
          }}
        >
Student Email : 
        </Typography>


        <Typography
          variant="body3"
          sx={{
            fontWeight: "italic",
            color: "red",
            overflow: "hidden",
          }}
        >
{studentdatas.email}
        </Typography>



      
      </Box>
    </CardContent>

   
    <Button
      variant="contained"
      color="primary"
      sx={{
        width: "100%",
        borderRadius: "8px",
        marginTop: "auto",
      }}
      onClick={() => {}}
    >
           
    </Button>
  </Card>

</Grid>






  
   






  );
}
