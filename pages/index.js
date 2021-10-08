import Head from 'next/head'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from "react-bootstrap/CardGroup";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Home() {

    return (
        <div className="container">
            <Head>
                <title>Wardley Mapping Learning Aid</title>
            </Head>

            <main>

                <h1 className="title">
                    What is that you want to practice?

                </h1>
                <br/>
                <br/>
                <CardGroup>

                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="/strategycycle.jpg"/>
                        <Card.Body>
                            <Card.Title>Strategy Cycle</Card.Title>
                            <Card.Text>
                                How well do you know Sun Tzu's Five Factors, the OODA loop and the two whys?
                            </Card.Text>
                            <Card.Footer>
                                <Button variant="primary" href="/strategycycle">Start</Button>
                            </Card.Footer>

                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="/cheatsheet.jpg"/>
                        <Card.Body>
                            <Card.Title>Evolution Stage Names</Card.Title>
                            <Card.Text>
                                Do you know what is Stage VI of component type 'Capability'? Do you know all the names?
                            </Card.Text>
                            <Card.Footer>
                                <Button variant="primary" href="/componentstostages">Start</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="/characteristics.png"/>
                        <Card.Body>
                            <Card.Title>Evolution Stage Characteristics</Card.Title>
                            <Card.Text>
                                Can you recognise the characteristics of components in various categories?
                            </Card.Text>
                            <Card.Footer>
                                <Button variant="primary" href="/characteristics">Start</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src="/generalproperties.png"/>
                        <Card.Body>
                            <Card.Title>Evolution Stage General Properties</Card.Title>
                            <Card.Text>
                                Can you name general properties of components in various categories?
                            </Card.Text>
                            <Card.Footer>
                                <Button variant="primary" href="/generalproperties">Start</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </main>

            <footer>
                More things will come one day! Follow&nbsp;<a href="https://twitter.com/wardleymaps">@wardleymaps on twitter</a>.
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

              .title {
                text-align: center;
              }
              
              .card-img {
                width: 100%;
                height: 15vw;
                object-fit: cover;
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
