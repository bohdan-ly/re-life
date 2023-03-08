import Head from 'next/head';

const Fallback = () => (
  <>
    <Head>
      <meta
        name="description"
        content="ReLifeRPG is a gamified daily routine app that helps you level up your productivity and turn your daily tasks into a fun RPG game. Complete quests, gain experience points, and unlock rewards as you progress through your daily routines. With ReLifeRPG, you can transform your boring daily tasks into an exciting adventure and stay motivated to achieve your goals."
      />
      <meta name="application-name" content={process.env.NEXT_APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={process.env.NEXT_APP_NAME} />
      <meta name="description" content={process.env.NEXT_APP_DESCRIPTION} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#191919" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/reliferpg-logo.ico" />
      <style>{`
      html, body, #__next {
        height: 100%;
      }
      #__next {
        margin: 0 auto;
      }
      h1 {
        text-align: center;
      }
      `}</style>
    </Head>
    <h1>This is offline fallback page</h1>
    <h2>When offline, any page route will fallback to this page</h2>
  </>
);

export default Fallback;
