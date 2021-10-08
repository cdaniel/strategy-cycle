

const CommonStyle = () =>
    <style jsx="true">{`
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

export default CommonStyle;