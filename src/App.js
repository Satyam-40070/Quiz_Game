import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import axios from "axios";
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import { useState } from "react";


function App() {

  const [name, setName] = useState("");
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions= async(category="",difficulty="")=>{
    const {data}=await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`); 

      setQuestions(data.results);
  };

  return (
    <BrowserRouter>
  <div className="app" >
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
      <Route path="/quiz" element={<Quiz 
        name={name}
        questions={questions}
        score={score}
        setScore={setScore}
        setQuestions={setQuestions}
      />}/>
      <Route path="/result" element={<Result name={name} score={score}/>}/>
        
    </Routes>

  </div>
  <Footer/>
  </BrowserRouter>
  );
}

export default App;
