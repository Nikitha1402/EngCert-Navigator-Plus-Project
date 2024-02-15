import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'; // Add this import
import { Link } from 'react-router-dom';
import './Card.css';
import RegistrationForm from '../user/Regis';

export default function ActionAreaCard() {
  return (
    <div className='app-wrapper'>
    <Container>
      <div className='cou'>
        <div>
          <h1> <center>COURSES AVAILABLE</center></h1>
        </div>

        <div className="media-container">
          <Card className="card-item">
            <CardMedia
              sx={{ height: 140 }}
              image="https://www.sd.fo/wp-content/uploads/2022/03/machine-learning-computing-concept-modern-technology-machine-learning-computing-concept-modern-technology-102520418.jpg"
              title="machine learning"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                machine learning
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Machine learning is an area of artificial intelligence and computer science that comprises supervised and unsupervised learning and includes the development of software and algorithms that can make predictions based on data.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">LEARN MORE</Button>
              <Link to='/regis'><Button size="small">REGISTER NOW</Button></Link>
            </CardActions>
          </Card>
        </div>
        <div className="media-container">
        <Card className="card-item">
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.sd.fo/wp-content/uploads/2022/03/machine-learning-computing-concept-modern-technology-machine-learning-computing-concept-modern-technology-102520418.jpg"
            title="machine learning"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              machine learning
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Machine learning is an area of artificial intelligence and computer science that comprises supervised and unsupervised learning and includes the development of software and algorithms that can make predictions based on data.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">LEARN MORE</Button>
            <Link to='/regis'><Button size="small">REGISTER NOW</Button></Link>
          </CardActions>
        </Card>
      </div>
      <div className="media-container">
      <Card className="card-item">
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.sd.fo/wp-content/uploads/2022/03/machine-learning-computing-concept-modern-technology-machine-learning-computing-concept-modern-technology-102520418.jpg"
          title="machine learning"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            machine learning
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Machine learning is an area of artificial intelligence and computer science that comprises supervised and unsupervised learning and includes the development of software and algorithms that can make predictions based on data.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">LEARN MORE</Button>
          <Link to='/regis'><Button size="small">REGISTER NOW</Button></Link>
        </CardActions>
      </Card>
    </div>
    
        

        {/* ... Repeat the same structure for other cards ... */}

      </div>
      </Container>
      </div>
  );
}
