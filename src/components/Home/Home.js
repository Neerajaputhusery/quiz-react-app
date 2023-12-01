import React, { useState } from 'react';
import QuestionComponent from '../Quiz/Question'; // Changed the import name
import quizData from '../../StaticData/data';

function Home() {
  const [questions, setQuestions] = useState(quizData); // Changed the state variable name

  return (
    <main>
      <div className='container'>
        <h3>Techflix AI <br/> Quiz App</h3>
        <section>
          {questions.map((question) => (
            <QuestionComponent key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Home;