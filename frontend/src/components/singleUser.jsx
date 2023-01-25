import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {id} = useParams();
  const [user, setUser] = React.useState(null)

  const fetchData = async () => {
    const response = await fetch(`http://localhost:8000/member/${id}/`);
    const data = await response.json();
    setUser(data);
  }

  React.useEffect(() => {
    fetchData();
  }, [])
  
  if (user === null) return (
    <div>Loading...</div>
  )
  return (
    <Card>
      <CardMedia component="img" src={user.profile_pic} title={user.name}/>
      <CardHeader>{user.name}</CardHeader>
      <CardContent>
        <Typography variant="body1">{user.email}</Typography>
        <Typography variant="body1">{user.phone}</Typography>
        <Typography variant="body1">{user.address}</Typography>
        <Typography variant="body1">{user.city}</Typography>
        <Typography variant="body1">{user.zip}</Typography>
        <Typography variant="body1">{user.birthdate}</Typography>
        <Typography variant="body1">{user.branch}</Typography>
        <Typography variant="body1">{user.college}</Typography>
        <Typography variant="body1">{user.enrollment}</Typography>
        {/* <Typography variant="body1">{user.profile_pic}</Typography> */}
      </CardContent>
    </Card>
  )
}

export default User