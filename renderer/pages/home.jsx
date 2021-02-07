import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '../static/change'

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>100 | JacobHQ</title>
      </Head>
      <div>
      <header className="h-screen center">
        <div className="center">
          <p className="font-mono text-neon">👋 This is my 100th</p>
          <h1 className="text-6xl text-neon font-semibold">Repo!</h1>
          <div className="flex space-2 mt-6">
            <a className="btn" href="#green">Begin</a>
          </div>
        </div>
      </header>
      <section className="h-screen center" id="green">
        <div className="center">
          <p className="font-mono text-neon" id="header">✨ The background can</p>
          <h1 className="text-6xl text-neon font-semibold" id="text">Change</h1>
          <div className="flex space-2 mt-6">
            <a className="btn" id="btn" href="#">Go back</a>
          </div>
        </div>
      </section>
      </div>
    </React.Fragment>
  );
};

export default Home;
