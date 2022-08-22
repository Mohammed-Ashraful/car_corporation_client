import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyOrders.css';
const MyOrder = () => {
  const [singleOrder, setSingleOrder] = React.useState([]);
  const { user } = useAuth();
  const [newOrder,setNewOrder]=useState(false)

  const handleRemove = id => {
    const url = `https://pacific-shore-00017.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setNewOrder(!newOrder);
        // setSingleOrder(data)
        // window.confirm("R u sure ")
      })
  }

  React.useEffect(() => {
    fetch("https://pacific-shore-00017.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setSingleOrder(data));
  }, [newOrder]);

  const remainingOrder = singleOrder?.filter(myOrder => myOrder.email === user.email)
  console.log(remainingOrder);
  return (
    <Grid container spacing={2}>
      {remainingOrder?.map((order) => (
        <Grid item xs={12} sm={6} md={4} key={order._id}>
          <Grid
            sx={{ backgroundColor: "#ccded1", p: 2, w: 100 }}
            style={{ width: "100%" }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={order.car_img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {order.car_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                price : ${order.car_price}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Button
                variant="contained"
                onClick={() => handleRemove(order._id)}
                sx={{bgcolor:'red'}}
                >
                Remove
              </Button>
              <Button variant="contained"
                 sx={{bgcolor:`${order.status==='pending'? "Blue":"Green"}`}}
                 onClick={()=> {order.status==='pending'? alert(`please Wait your order is ${order.status}` ): alert('you may get your some within few days')}}
              >{order.status}</Button>
            </CardActions>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default MyOrder;


