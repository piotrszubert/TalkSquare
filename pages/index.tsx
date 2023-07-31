import Episodes from '@/components/episodes'
import Hero from '@/components/hero'
import Layout from '@/components/layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>TalkSquare - Home</title>
      </Head>
      <Layout>
        <Hero/>
        <div className="bg-white py-5 -mx-5 flex gap-3 items-center">
          <span className="ms-5 bg-blue-600 w-6 h-6 inline-block"></span>
          <span className="font-bold text-black text-6xl">LATEST EPISODES</span>
        </div>
        <Episodes/>
      </Layout>
    </>
  )
}
