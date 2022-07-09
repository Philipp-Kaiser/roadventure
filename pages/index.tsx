import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Roadventure</title>
      </Head>

      <section>
        <h2>Plan your roadtrips</h2>
        <p>
          Of course roadtrips should be spontaneous. But its way better if you have a lot of options to discover right
          from the start, right?
        </p>

        <h2>Discover hidden gems</h2>
        <p>
          Fly over germany and get some inspirations for new places besides the road. Find amazing places that are just
          waiting to impress you.
        </p>

        <h2>Be prepared</h2>
        <p>Make sure you dont forget any equipment anymore. Use the travellist to keep everything you need on board.</p>
      </section>
    </div>
  )
}

export default Home
