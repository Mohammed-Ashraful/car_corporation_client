import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './MyOrders.css'
import useAuth from '../../../hooks/useAuth';
const MyOrder = () => {

  const [singleOrder, setSingleOrder] = React.useState([]);
  const { user } = useAuth();

  const handleRemove = id => {
    const url = `http://localhost:5000/orders/${id}`
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        setSingleOrder(data)
        window.confirm("R u sure ")
      })
  }

  React.useEffect(() => {
    fetch('https://safe-tundra-89323.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => setSingleOrder(data))
  }, []);

  const remainingOrder = singleOrder?.filter(myOrder => myOrder.email === user.email)
  console.log(remainingOrder);
  return (
    // <div className="grid-container">
    //   {/* <h1 style={{color:'green'}}>My Orders </h1> */}
    //   {
    //     remainingOrder?.map(order =>
    //       <div
    //         key={order._id}
    //         // className='grid-container'
    //       >
    //         <div className='order-card'>
    //           <div >
    //             <img src={order?.car.img} alt='img' className='order-img' style={{objectFit:'cover', width: "100%" }} />
    //           </div>
    //           <div className="order-info">
    //             <h2>{order?.car?.name} </h2>
    //             <b> Email : {order?.email} </b>
    //             <h6> Phone : {order?.phone} </h6>
    //             <p> Address : {order?.address} </p>
    //           </div>
    //           <div>
    //             <h5>Status : {order?.status} </h5>
    //           
    //           </div>
    //         </div>
    //       </div>)
    //   }
    // </div>
    <>
      <Card sx={{ maxWidth: 345 }}>
        {
          remainingOrder?.map(order =>
            <Card
              key={order._id}
            // className='grid-container'
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
              </CardContent>
              <CardActions>
                <Button>Remove</Button>
                <Button>Approved</Button>
              </CardActions>
            </Card>
          )}
      </Card>
    </>
  );
};

export default MyOrder;


