import Head from 'next/head'
import Link from 'next/link'

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
          <h1 className="title">
              <ul>
                  <li><Link href="/strategycycle">Strategy Cycle</Link></li>
                  <li><Link href="/componentstostages">Stage Names for Various Component Types</Link></li>
              </ul>
          </h1>
      </main>

      <footer>
        More things will come one day!
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
