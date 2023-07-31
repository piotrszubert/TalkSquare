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
        <Episodes/>
      </Layout>
    </>
  )
}
