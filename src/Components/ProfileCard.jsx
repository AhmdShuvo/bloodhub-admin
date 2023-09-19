
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ProfileCard({user,MakeAdmin}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user.email}
        </Typography>
        <Typography variant="h5" component="div">
          {user.displayName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user.phone}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    {  !user.role&&<CardActions>
        <Button onClick={MakeAdmin} size="small">Make Admin</Button>
      </CardActions>}
    </Card>
  );
}
