import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseCard.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar11';

function CourseCard() {
    const youtubeVideoUrl = 'https://www.youtube.com/watch?v=your-video-id';

  return (

    
    <div className='banj'>
    <Navbar/>
   
      <h1 className='koa'>Welcome to Our Courses Platform</h1>


    <div className="course-card-container">
    <Card className="course-card">
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6B80rg4AVLijQKl4hmsquR3ybxuPrWKAZjLX_klNsX7Wht95CF9u9kwCwqxo1eg8e1M&usqp=CAU" />
    <Card.Body>
      <Card.Title>Effective Communication</Card.Title>
      <Card.Text>
        Develop effective communication skills to succeed in any field.
      </Card.Text>
      <Button variant="success" className="start-course-button">
      <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
        Start Course
      </a>
    </Button>
    <Button variant="primary" className="register-now-button">
    <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
      Register Now
    </Link>
  </Button>
    </Card.Body>
  </Card>



      {/* IELTS Course */}
      <Card className="course-card">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfe10JHSQc_Lqai0ku1bkO9-b4FaCnm0loL-KjE-putqo6c5KX-pZF5uzJ6zQkU5MkaA&usqp=CAU" />
        <Card.Body>
          <Card.Title>IELTS Preparation</Card.Title>
          <Card.Text>
            Prepare for the IELTS exam and improve your English language skills.
          </Card.Text>
          <Button variant="success" className="start-course-button">
          <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            Start Course
          </a>
        </Button>
        <Button variant="primary" className="register-now-button">
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
          Register Now
        </Link>
      </Button>
        </Card.Body>
      </Card>

      {/* Verbal Communication Course */}
      <Card className="course-card">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhOZEQk3Ia9MLwjlvTImP0U-gLSIXLuhflH6aTd1bGq2Rz1dJ8WePMXNxIqlKWvvwSzLE&usqp=CAU" />
        <Card.Body>
          <Card.Title>Verbal Communication Skills</Card.Title>
          <Card.Text>
            Enhance your verbal communication skills with this course.
          </Card.Text>
          <Button variant="success" className="start-course-button">
          <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            Start Course
          </a>
        </Button>
        <Button variant="primary" className="register-now-button">
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
          Register Now
        </Link>
      </Button>
        </Card.Body>
      </Card>

      {/* Pronunciation Course */}
      <Card className="course-card">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOEflLKNBosWDxhuC3IjZFAu968m0klAv232OTC29Q1xzov7zwKhE6u1p0YOHzlxt6M2E&usqp=CAU" />
        <Card.Body>
          <Card.Title>Pronunciation Mastery</Card.Title>
          <Card.Text>
            Master the art of pronunciation with this comprehensive course.
          </Card.Text>
          <Button variant="success" className="start-course-button">
          <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            Start Course
          </a>
        </Button>
        <Button variant="primary" className="register-now-button">
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
          Register Now
        </Link>
      </Button>
        </Card.Body>
      </Card>

      {/* Communication Skills Course */}
      <Card className="course-card">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJvxhkZT136-OTy0qgK12e6n6eq9LLNinchHQurYMGgRXlY9T6xubgGAuvTBdNA5npi8&usqp=CAU" />
        <Card.Body>
          <Card.Title>Verbal Certification</Card.Title>
          <Card.Text>
            Test your verbal skills with this certification quiz.
          </Card.Text>
          
          <Button variant="success" className="start-course-button">
          <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
            Start Course
          </a>
        </Button>
        <Button variant="primary" className="register-now-button">
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
          Register Now
        </Link>
      </Button>

        </Card.Body>
      </Card>
      <Card className="course-card">
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoklls6kDh8hr0_q2UipnLIhGS4fxiux2JBtyvaJ6lk3k9PLxJ3wUt7mM7P-hLd6pJe9A&usqp=CAU" />
      <Card.Body>
        <Card.Title>Grammer</Card.Title>
        <Card.Text>
        Rules of a language governing the sounds, words, sentences, and other elements.        </Card.Text>
        <Button variant="success" className="start-course-button">
        <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
          Start Course
        </a>
      </Button>
      <Button variant="primary" className="register-now-button">
      <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
        Register Now
      </Link>
    </Button>
      </Card.Body>
    </Card>
    <Card className="course-card">
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrD43-ViZtho7B0u_RcjhJccCu_eZ3-XMyjlbQXdVmkGSElVyrfTA0vrZ3x0SpexM0RWg&usqp=CAU" />
    <Card.Body>
      <Card.Title>Active and Passive Voice</Card.Title>
      <Card.Text>
      The sentence's subject performs the action on the action's target and the verb acts upon the subject.        </Card.Text>
      <Button variant="success" className="start-course-button">
      <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
        Start Course
      </a>
    </Button>
    <Button variant="primary" className="register-now-button">
    <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
      Register Now
    </Link>
  </Button>
    </Card.Body>
  </Card>      <Card className="course-card">
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS3_vKHdSONC0skUwD76KFX_tkk1fmMBqz00M-G1sA2ydWRauHBL_BiG6jC3RKT6AATI&usqp=CAU" />
  <Card.Body>
    <Card.Title>Idioms</Card.Title>
    <Card.Text>
    Rules of a language governing the sounds, words, sentences, and other elements.      </Card.Text>
    <Button variant="success" className="start-course-button">
    <a href={youtubeVideoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
      Start Course
    </a>
  </Button>
  <Button variant="primary" className="register-now-button">
  <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
    Register Now
  </Link>
</Button>
  </Card.Body>
</Card>     

      {/* Add more courses as needed */}
    </div>
    </div>
  );
}

export default CourseCard;
