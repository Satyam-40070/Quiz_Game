import React, { useState } from 'react'
import {Button, MenuItem, TextField} from "@mui/material";
import Categories, { } from "../../Data/Categories";
import "./Home.css";
import {useNavigate} from "react-router-dom";
import ErrorMessage, { } from "../../Components/ErrorMessage/ErrorMessage";
import { useAuth0 } from "@auth0/auth0-react";


const Home = ({name, setName, fetchQuestions}) => {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  
  const handleSubmit = () => {
    if(!category || !difficulty || !name){
      setError(true);
      return;
    }
    else{
      setError(false);
      fetchQuestions(category,difficulty);
      navigate("/quiz");
    }
  };
  const handleAlert = () => {
    alert("LogIn to start the quiz")
  }
  

  return (
    <div className='content'>
      <div className='settings'>
        <span style={{fontSize: 40, color: "aliceblue", fontWeight: 30}}>Quiz Settings</span>

        <div className="settings_select">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}

          <TextField style={{marginBottom: 25, color:"aliceblue"}} 
            label="Enter Your Name" 
            variant="outlined" 
            onChange={(e) => setName(e.target.value)}
            />

          <TextField
            select
            label="Select Category"
            variant='outlined'
            style={{marginBottom: 30, color:"aliceblue"}}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            
            {
              Categories.map((cat) =>(
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))
}
           
                
                         
                       
          </TextField> 

          <TextField select
            label="Select Difficulty"
            variant='outlined'
            style={{marginBottom: 30 ,color:"aliceblue"}}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
                      
          >
          
           <MenuItem key="Easy" value="easy" style={{display:'block'}}>
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium" style={{display:'block'}}>
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard" style={{display:'block'}}>
              Hard
            </MenuItem>
                      
            
          </TextField> 
            {
              isAuthenticated?(
                <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>
              Start Quiz
            </Button>
              ):(
                <Button variant='contained' color='primary' size='large' onClick={handleAlert}>
              Start Quiz
            </Button>
              )
              }
            

        </div>
      </div>

      <img src="/quiz.svg" className='banner' alt="quiz img"></img>

      <div className="about">
        <h1>About Us</h1>
        <p>At QuizNest, we believe in the power of curiosity, the thrill of discovery, and the joy of learning.
         We've built a platform that transcends the boundaries of subjects, bringing together a diverse 
         array of quizzes to cater to the inquisitive minds of all ages.</p><br/>
         <h3 style={{marginTop:19}}>Our Mission</h3><br />
         <div className="mission">
         <p> Igniting Curiosity: We are on a mission to ignite the spark of curiosity within every 
          individual. Whether you're a mathematics enthusiast, a science buff, a cricket fanatic, a 
          history lover, or someone who finds joy in the world of cartoons and animation, QuizNest is 
          your playground for exploration.</p>
          <img src="/mission.svg" alt="mission" height={220} width={220}/>
         </div>
         
          <h3>What Sets Us Apart?</h3>
          <div className="apart">
              <img src="/distinct.svg" alt="apart" height={300} width={250}/>
          <div className="para">
          <p>Wide Spectrum of Subjects: We take pride in offering quizzes across 22 subjects, creating a 
            vibrant tapestry of knowledge that spans from the depths of mathematics to the heights of 
            animated worlds. Our diverse range includes science, cricket, cartoons, animation, history, 
            and much more.</p>
            <p>Community Engagement: QuizNest isn't just a platform; it's a community. Join a network of 
              like-minded individuals who share your passion for knowledge. Connect, compete, and 
              collaborate with fellow quizzers from around the globe.</p>
              <p>Fun and Learning Combined: We understand that learning is most effective when it's 
                enjoyable. Our quizzes are designed not just to test your knowledge but to make the 
                journey entertaining and memorable.</p>
          </div>
          
          </div>
          
              <br />
              <p>Join Us in the Quest for Knowledge!
                Embark on a journey of discovery with QuizNest. Whether you're a student, a professional, or just someone 
                who loves to learn, our platform welcomes you to explore, engage, and elevate your 
                understanding of the world.</p>
    </div>
    </div>

    
  )
}

export default Home
