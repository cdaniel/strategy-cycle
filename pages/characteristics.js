import Head from 'next/head'
import {useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';






export default function StageNameTester() {
    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max);
    };
    const activities = ['Ubiquity',
        'Certainty',
        'Publication Type'
    ];

    const ubiquityStageNames = ['Rare','Slowly increasing', 'Rapidly increasing', 'Widespread in the applicable market / ecosystem'];
    const certaintyStageNames = ['Poorly understood / exploring the unknown', 'Rapid increase in learning / discovery becomes refining', 'Rapid increases in use / increasing fit for purpose', 'Commonly understood (in terms of use)'];
    const publicationTypeStageNames = ['Describe the wonder of the thing / the discovery of some marvel / a new land / an unknown frontier',
                                        'Focused on build / construct / awareness and learning / many models of explanation / no accepted forms / a wild west',
                                        'Maintenance / operations / installation / comparison between competing forms / feature analysis eg. merits of one model over another',
                                        'Focused on use / increasingly an accepted, almost invisible component'];
    const marketStageNames = ['Undefined market',
                              'Forming market / an array of competing forms and different models of understanding',
                            'Growing market / consolidation to a few competing but more accepted forms',
                            'Mature market / stabilised to an accepted form'];

    const knowledgeManagementStageNames = ['Uncertain',
        'Learning on use / focused on testing prediction',
        'Learning on operation / using prediction / verification',
        'Known / accepted'];

    const marketEcosystemPerceptionStageNames = ['Chaotic (non linear) / Domain of the "crazy"',
        'Domain of "experts"',
        'Increasing expectation of use / Domain of "professionals"',
        'Ordered (appearance of being linear)/ trivial / formula to be applied'];


    const userPerceptionStageNames = ['Different / confusing / exciting / surprising / dangerous',
        'Leading edge / emerging / uncertainty over results',
        'Increasingly common / disappointed if not used or available / feeling left behind',
        'Standard / expected / feeling of shock if not used'];


    const perceptionInIndustryStageNames = ['Future source of competitive advantage / unpredictable / unknown',
        'Seen as competitive advantage / a differential / looking for ROI and case examples',
        'Advantage through implementation / features / this model is better than that',
        'Cost of doing business / accepted /specific defined models'];


    const focusOnValueStageNames = ['High Future value but immediate investment',
        'Seeking ways to profit and a ROI / seeking confirmation of value',
        'High profitability per unit / a valuable model / a feeling of understanding / focus on exploitation',
        'High volume / reducing margin / important but invisible / an essential component of something more complex'];


    const understandingStageNames = ['Poorly understood / unpredictable',
        'Increasing understanding / development of measures',
        'Increasing education / constant refinement of needs / measures',
        'Believed to be well defined / stable / measurable'];

    const comparisonStageNames = ['Constantly changing / a differential / unstable',
        'Learning from others / testing the water / some evidential support',
        'Competing models / feautre difference / evidential support',
        'Essential / any advantage is operational / accepted norm'];

    const failureStageNames = ['High / tolerated / assumed to be wrong',
        'Moderate / unsurprising if wrong but disappointed',
        'Not tolerated / focus on constant improvement / assumed to be in the right direction / resistance to changing the model',
        'Surprised by failure / focus on operational efficiency'];

    const marketActionStageNames = ['Gambling / driven by gut',
        "Exploring a \"found\" value ",
        'Market analysis / listening to customers',
        'Metric driven / build what is'];

    const efficiencyStageNames = ['Reducing the cost of change (experimentation)',
        'Reducing cost of waste (Learning)',
        'Reducing cost of waste (Learning),',
        'Reducing cost of deviation (Volume)'];

    const decisionDriversStageNames = ['Heritage / culture',
        'Analysis & synthesis',
        'Analysis & synthesis',
        'Previous experience'];


    const allStageNames = ubiquityStageNames.concat(certaintyStageNames).concat(publicationTypeStageNames);

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
            What is the value of the characteristics <span style={{backgroundColor:"yellow"}}>{rightAnswer.componentType}</span> for the <span style={{backgroundColor:"yellow"}}>{counters[rightAnswer.stageNumber]}</span>  stage of Evolution?</h1>

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
          How well do you know the Evolution characteristics?
        </h1>
          <br/>
          <br/>

          {quizz}

      </main>

      <footer>
        Round: {round <= 10 ? round : 10} out of 10, Mistakes: {mistakes}
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          //padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }



        .title a {
          color: #0070f3;
          text-decoration: none;
        }


        .title {
          margin: 0;
          line-height: 1.15;
          fontSize: 4rem;
          color: silver;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          fontSize: 1.5rem;
        }
        

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          flex: 1 1 100% ;
          max-width: 60vw;
          max-height: 60vh;
          min-height: 300px;
          height: 60vh;
          aspect-ratio: 1/1;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
