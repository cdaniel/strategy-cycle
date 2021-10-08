import Head from 'next/head'
import {useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CommonStyle from "../components/CommonStyle";
import CommonGlobalStyle from "../components/CommonGlobalStyle";






export default function StageNameTester() {
    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max);
    };
    const activities = ['Activity',
        'Data',
        'Practice',
        'Knowledge'
    ];

    const activityStageNames = ['Genesis','Custom', 'Product (+Rental)', 'Commodity (+utility)'];
    const dataStageNames = ['Unmodelled', 'Divergent', 'Convergent', 'Modelled'];
    const practiceStageNames = ['Novel', 'Emerging', 'Good', 'Best'];
    const knowledgeStageNames = ['Concept', 'Hypothesis', 'Theory', 'Universally Accepted'];

    const allStageNames = activityStageNames.concat(dataStageNames).concat(practiceStageNames).concat(knowledgeStageNames);

    const initialDataStructure = [];
    for (let i = 0; i < allStageNames.length; i++){
        let dataQuestionObject = {
            stageName : allStageNames[i],
            stageNumber : i % 4,
            componentType : activities[Math.floor(i / 4)]
        }
        initialDataStructure.push(dataQuestionObject);
    }



    const [round, setRound] = useState(1);
    const [mistakes, setMistakes] = useState(0);
    const [unanswered, setUnanswered] = useState(initialDataStructure);
    const [currentIdIndex, setCurrentIdIndex] = useState(generateRandomInteger(unanswered.length));
    const [end, setEnd] = useState(false);

    function onClickRight(event){
        unanswered.splice(currentIdIndex, 1);
        setUnanswered(unanswered);
        setCurrentIdIndex(generateRandomInteger(unanswered.length));
        if(round == 10){
            setEnd(true);
        }
        setRound(round + 1);
    }
    function onClickWrong(event){
        setCurrentIdIndex(generateRandomInteger(unanswered.length));
        setMistakes(mistakes + 1);
        if(round == 10){
            setEnd(true);
        }
        setRound(round + 1);
    }
    function reset(event){
        setRound(1);
        setMistakes(0);
        setEnd(false);
        setUnanswered(initialDataStructure);
        setCurrentIdIndex(generateRandomInteger(unanswered.length));
    }


    // Question consist of:
    // * Activity Type
    //         Activity Type can be selected only if there is at least one potential correct answer available.
    // * Stage Number which indicated the correct answer.
    //         The stage number and the correct answer must not repeat if they were identified as a correct answer
    // * Three other distractors which arent the correct answer
    //         Distractors must be different from the correct answer. Distractors should NOT use previously
    //         chosen correct answers.
    //
    // To make this work, I need to track:
    //     * number of available answers per activity. The starting point is 4.
    //     * available correct answers per activity
    //     * distractors - correct answers which requires storing correct answers.
    function constructTheQuestion(){
        const counters = ['1st', '2nd', '3rd', '4th'];

        const rightAnswer = unanswered[currentIdIndex];

        const availableAnswers = [...unanswered];
        availableAnswers.splice(currentIdIndex, 1);

        let questionAnswers = [];
        let index = generateRandomInteger(availableAnswers.length);
        let answer = availableAnswers.splice(index, 1)[0];
        questionAnswers.push(<Button  variant="outline-dark" size="lg" onClick={onClickWrong}>{answer.stageName}</Button>);
        index = generateRandomInteger(availableAnswers.length);
        answer = availableAnswers.splice(index, 1)[0];
        questionAnswers.push(<Button variant="outline-dark" size="lg" onClick={onClickWrong}>{answer.stageName}</Button>);
        index = generateRandomInteger(availableAnswers.length);
        answer = availableAnswers.splice(index, 1)[0];
        questionAnswers.push(<Button variant="outline-dark" size="lg" onClick={onClickWrong}>{answer.stageName}</Button>);
        questionAnswers.push(<Button  variant="outline-dark" size="lg" onClick={onClickRight}>{rightAnswer.stageName}</Button>);



        let randomizedAnswers = questionAnswers.map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        return <div><h1 className="description">
            What is the  <span style={{backgroundColor:"yellow"}}>{counters[rightAnswer.stageNumber]}</span>  stage of Evolution for component type  <span style={{backgroundColor:"yellow"}}>{rightAnswer.componentType}</span> ?</h1>

                <div className="d-grid gap-2">

                {randomizedAnswers}
                </div>

        </div>;
    }

    function returnDescription(){
            let percentage = (10 - mistakes) * 10;
            let resultColor = {
                color: 'green'
            }
            if(percentage < 71){
                resultColor.color = 'orange';
            }
            if(percentage < 51){
                resultColor.color = 'red';
            }

            return <h1 className="description"> Your result: <b><span style={resultColor}>{percentage}</span>%</b>. &nbsp;
                <a style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer"
                }} onClick={reset}>
                    Try again!</a></h1>;
    }

  let quizz = null;
    if(!end){
        quizz = constructTheQuestion();
    } else {
        quizz = returnDescription();
    }
  return (
    <div className="container">
      <Head>
        <title>Wardley Mapping Learning Aid</title>
      </Head>

      <main>
        <h1 className="title">
          How well do you know the names of Evolution stages?
        </h1>
          <br/>
          <br/>

          {quizz}

      </main>

      <footer>
        Round: {round <= 10 ? round : 10} out of 10, Mistakes: {mistakes}
      </footer>



        <CommonStyle/>
        <CommonGlobalStyle/>
    </div>
  )
}
