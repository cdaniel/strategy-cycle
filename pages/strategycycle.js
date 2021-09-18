import Head from 'next/head'
import {useState} from "react";

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
}






export default function Home() {
    //console.log(describeArc(400,400,300,-72, 72));
    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max);
    };

    const [texts, setTexts] = useState([
        ['thegame', '"The Game"'],
        ['observe', 'Observe'],
        ['orient', 'Orient'],
        ['decide', 'Decide'],
        ['act', 'Act'],
        ['landscape', 'Landscape'],
        ['climate', 'Climate'],
        ['doctrine', 'Doctrine'],
        ['leadership', 'Leadership'],
        ['whyofmovement', 'Why of movement'],
        ['whyofpurpose', 'Why of Purpose']
    ]);
    const [round, incRound] = useState(1);
    const [mistakes, setMistakes] = useState(0);
    const [currentIdIndex, setCurrentIdIndex] = useState(generateRandomInteger(texts.length));

    function onClick (event){
        if(event.target.id && (round <= 10)){
            if(event.target.id === texts[currentIdIndex][0]){
                texts.splice(currentIdIndex,1);
                setTexts(texts);
                setCurrentIdIndex(generateRandomInteger(texts.length));
            } else {
                setCurrentIdIndex(generateRandomInteger(texts.length));
                setMistakes(mistakes  + 1);
            }
            incRound(round + 1);
        }
    };
    function returnDescription(){
        if(round <= 10){
            return <h1 className="description"> Where is "<span style={{backgroundColor:"yellow"}}>{currentTextSearch}</span>" ?</h1>;
        } else {
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

            return <h1 className="description"> Your result: <b><span style={resultColor}>{percentage}</span>%</b>.</h1>;
        }
    }
  let currentTextSearch = '...';
  if(texts && texts[currentIdIndex]){
      currentTextSearch = texts[currentIdIndex][1];
  }
  let description = returnDescription();
  return (
    <div className="container">
      <Head>
        <title>Strategy Cycle Learning Aid</title>
      </Head>

      <main>
        <h1 className="title">
          How well do you know the strategy cycle?
        </h1>

          {description}



        <div className="grid">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="300px" height="300px">
                <defs>
                    <g id="why-short-arrow" style={{strokeWidth: 1, stroke: "black" }}>
                        <path  d="M 457.0633909777092 381.45898033750314 A 60 60 0 0 0 400 340" style={{fill:'transparent', strokeDasharray:"3,1"}}/>
                            <g transform="translate(56.8,-19)">
                                <line x1="400" y1="400" x2="390" y2="400" transform="rotate(87,400,400)"/> // 15 + 72
                                <line x1="400" y1="400" x2="390" y2="400" transform="rotate(57,400,400)"/> //-15 + 72
                            </g>
                    </g>
                    <g id="why-long-arrow" style={{strokeWidth: 1, stroke: "black"}}>
                        <path  d="M 457.0633909777092 381.45898033750314 A 60 60 0 1 0 435.2671151375484 448.54101966249686" style={{fill:'transparent', strokeDasharray:"3,1"}}/>
                        <g transform="translate(56.8,-19)">
                            <line x1="400" y1="400" x2="390" y2="400" style={{strokeWidth: 1, stroke: "black" }} transform="rotate(87,400,400)"/> // 15 + 72
                            <line x1="400" y1="400" x2="390" y2="400" style={{strokeWidth: 1, stroke: "black" }} transform="rotate(57,400,400)"/> //-15 + 72
                        </g>
                    </g>
                    <g id="long-cycle-arrow" style={{strokeWidth: 2, stroke: "black" }}>
                        <path  d="M 685.316954888546 307.2949016875158 A 300 300 0 0 0 114.68304511145396 307.29490168751573" style={{fill:'transparent', strokeDasharray:"5,5"}}/>
                        <g transform="translate(285.5,-92)">
                            <line x1="400" y1="400" x2="390" y2="400" transform="rotate(87,400,400)"/> // 15 + 72
                            <line x1="400" y1="400" x2="390" y2="400" transform="rotate(57,400,400)"/> //-15 + 72
                        </g>
                    </g>
                    <g id="short-cycle-arrow" style={{strokeWidth: 1.5, stroke: "black" }}>
                        <g transform="translate(285.5,-92)">
                            <line x1="400" y1="400" x2="390" y2="400"  transform="rotate(87,400,400)"/> // 15 + 72
                            <line x1="400" y1="400" x2="390" y2="400"  transform="rotate(57,400,400)"/> //-15 + 72
                        </g>
                        <path  d="M 685.316954888546 307.2949016875158 A 300 300 0 0 0 400 100" style={{fill:'transparent', strokeDasharray:"5,5"}}/>
                    </g>
                    <g id="line-template">
                        <line x1="400" y1="350" x2="400" y2="80" style={{strokeWidth: 1, stroke: "black"}}/>
                    </g>
                    <g id="OODA-block" style={{strokeWidth: 1, stroke: "black"}}>
                        <path d="M 514.1267819554184 362.9179606750063 A 120 120 0 0 0 400 280 L 400 240 A 160 160 0 0 1 552.1690426072246 350.55728090000844 z"/>
                    </g>
                </defs>
              <g>
                  <use xlinkHref="#why-short-arrow" transform="rotate(15,400,400)"/>
                  <use xlinkHref="#why-long-arrow" transform="rotate(303,400,400)"/>

                  <use xlinkHref="#line-template" transform="rotate(15,400,400)"/>
                  <use xlinkHref="#line-template" transform="rotate(87,400,400)"/>
                  <use xlinkHref="#line-template" transform="rotate(231,400,400)"/>
                  <use xlinkHref="#line-template" transform="rotate(303,400,400)"/>
                  <use xlinkHref="#long-cycle-arrow" transform="rotate(159,400,400)"/>
                  <use xlinkHref="#short-cycle-arrow" transform="rotate(15,400,400)"/>
                  <use xlinkHref="#short-cycle-arrow" transform="rotate(231,400,400)"/>
                  <use xlinkHref="#short-cycle-arrow" transform="rotate(303,400,400)"/>

                  <use xlinkHref="#OODA-block" transform="rotate(15,400,400)" style={{fill:'#EEEEEE' }}/>
                  <use xlinkHref="#OODA-block" transform="rotate(87,400,400)" style={{fill:'#BBBBBB' }}/>
                  <use xlinkHref="#OODA-block" transform="rotate(159,400,400)" style={{fill:'#AAAAAA' }}/>
                  <use xlinkHref="#OODA-block" transform="rotate(231,400,400)" style={{fill:'#666666' }}/>
                  <use xlinkHref="#OODA-block" transform="rotate(303,400,400)" style={{fill:'#000000' }}/>

                  <text id="whyofpurpose" x="380" y="360"  fontSize="12px" onClick={onClick}>
                      <tspan dy="1em" dx="2em">Why of</tspan>
                      <tspan dy="1em" dx="-3em">purpose</tspan>
                  </text>
                  <text id="whyofmovement" x="330" y="400" fontSize="12px">
                      <tspan dy="1em" dx="2em">Why of</tspan>
                      <tspan dy="1em" dx="-3em">movement</tspan>
                  </text>
                  <text id="thegame" x="620" y="190" fontSize="30px">
                      "The Game"
                  </text>
                  <text  id="observe" x="450" y="730" fontSize="30px">
                      Observe
                  </text>
                  <text id="orient" x="0" y="410" fontSize="30px">
                      Orient
                  </text>
                  <text id="decide" x="220" y="100" fontSize="30px">
                      Decide
                  </text>
                  <text id="act" x="470" y="70" fontSize="30px">
                      Act
                  </text>



                  <text id="purpose" x="530" y="280" fontSize="30px">
                      Purpose
                  </text>
                  <text id="landscape" x="530" y="530" fontSize="30px">
                      Landscape
                  </text>
                  <text id="climate" x="300" y="620" fontSize="30px">
                      Climate
                  </text>
                  <text id="doctrine" x="120" y="410" fontSize="30px">
                      Doctrine
                  </text>
                  <text id="leadership" x="250" y="210" fontSize="30px">
                      Leadership
                  </text>


                  <rect id="purpose" x="530" y="250" width="130" height="40" style={{fill:"gray"}} onClick={onClick}/>
                  <rect id="landscape" x="530" y="500" width="140" height="40" style={{fill:"gray"}} onClick={onClick}/>
                  <rect id="climate" x="300" y="590" width="130" height="40" style={{fill:"gray"}} onClick={onClick}/>
                  <rect id="doctrine" x="120" y="380" width="130" height="40" style={{fill:"gray"}} onClick={onClick}/>
                  <rect id="leadership" x="250" y="180" width="150" height="40" style={{fill:"gray"}} onClick={onClick}/>


                  <rect id="whyofpurpose" x="380" y="360"  width="90" height="35" style={{fill:"gray"}} onClick={onClick}/>
                  <rect id="whyofmovement" x="330" y="400" width="90" height="35" style={{fill:"gray"}} onClick={onClick}/>
                  <rect id="thegame" x="620" y="160" width="160" height="40" style={{fill:"gray"}} onClick={onClick}/>
                  <rect id="observe" x="440" y="700" width="130" height="40" style={{fill:"gray"}} onClick={onClick}/>
                  <rect id="orient" x="0" y="380" width="110" height="40" style={{fill:"gray"}} onClick={onClick}/>
                  <rect id="decide" x="220" y="60" width="130" height="40" style={{fill:"gray"}} onClick={onClick}/>
                  <rect id="act" x="440" y="30" width="130" height="40" style={{fill:"gray"}} onClick={onClick}/>
              </g>

            </svg>
        </div>
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
          padding: 5rem 0;
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
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          fontSize: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          fontSize: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
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
