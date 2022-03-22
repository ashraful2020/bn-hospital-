import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useAuth from "../../hooks/useAuth";
const MyAppointment = () => {
  const [singleAppointment, setSingleAppointment] = React.useState([]);
  const { user } = useAuth();

  const handleRemove = (id) => {
    const url = `https://salty-savannah-31637.herokuapp.com/appointment/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setSingleAppointment(data);
        window.confirm("R u sure ");
      });
  };

  React.useEffect(() => {
    fetch("https://salty-savannah-31637.herokuapp.com/appointment")
      .then((res) => res.json())
      .then((data) => setSingleAppointment(data));
  }, []);
  const remainingAppointment = singleAppointment?.filter(
    (myAppointment) => myAppointment?.user?.email === user.email
  );

  return (
   
    <>
      <Card sx={{ maxWidth: 345 }}>
        {remainingAppointment?.map((appoin) => (
          <Card
            key={appoin._id}
            // className='grid-container'
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {appoin?.email}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {appoin?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {appoin?.department}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {appoin?.mobile}
              </Typography>
            </CardContent>
            <CardActions>
            {appoin.status==="pending"?<Button>Remove</Button>:<Button disabled>Remove</Button> }
              
              <Button>{appoin.status}</Button>
            </CardActions>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default MyAppointment;
