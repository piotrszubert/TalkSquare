import Episodes from '@/components/episodes'
import Heading from '@/components/heading'
import Hero from '@/components/hero'
import Layout from '@/components/layout'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>TalkSquare - Home</title>
      </Head>
      <Layout>
        <Hero/>
        <Heading
          text="latest episodes"
        />
        <Episodes
          ascending={false}
          limit={3}
        />
      </Layout>
    </>
  )
}


// [Subscription Section]

// "Subscribe now to never miss an episode of TalkSquare! Stay updated with the latest conversations, insightful guests, and captivating narratives."
// [Subscribe Buttons]: Apple Podcasts | Spotify | Google Podcasts | Stitcher

// [Contact Section]

// "We'd love to hear from you! Have a suggestion, a question, or want to be a guest on our show? Connect with us."
// [Contact Button]: Contact Us