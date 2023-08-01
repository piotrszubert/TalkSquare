import Button from '@/components/button'
import Episodes from '@/components/episodes'
import Heading from '@/components/heading'
import Hero from '@/components/hero'
import Layout from '@/components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
    return (
        <>
            <Head>
                <title>TalkSquare - Home</title>
            </Head>
            <Layout>
                <Hero />
                <Heading
                    text="latest episodes"
                />
                <Episodes
                    ascending={false}
                    limit={3}
                />
                <div className="py-6 grid place-items-center">
                    <Link href="/episodes">
                        <Button className="flex gap-3">
                            <span>Explore all episodes</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </Button>
                    </Link>
                </div>
                <Heading
                    text="subsription"
                />
                <div className='flex flex-col gap-3 py-6'>
                    Subscribe now to never miss an episode of TalkSquare! Stay updated with the 
                    latest conversations, insightful guests, and captivating narratives.
                    <div>
                        <Button>
                            Subscribe now!
                        </Button>
                    </div>
                </div>
                <Heading
                    text="Contact"
                />
                <div className='flex flex-col gap-3 py-6'>
                    We&apos;d love to hear from you! Have a suggestion,
                    a question, or want to be a guest on our show? Connect with us.
                    <div>
                        <Button>
                            Contact Us
                        </Button>
                    </div>
                </div>
            </Layout>
        </>
    )
}