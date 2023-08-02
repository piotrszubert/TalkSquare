import Heading from "@/components/heading";
import Layout from "@/components/layout";
import Head from "next/head";
import { useRouter } from 'next/router'
import episodesData from '@/data/episodesData';
import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";

export default function EpisodePage() {
    const router = useRouter();
    const { id } = router.query;

    const episodeId = typeof id === 'string' ? parseInt(id) : undefined;
    const episode = episodesData.find((episode: any) => episode.id === episodeId);

    // Handle the case when the episode with the specified ID is not found
    if (!episode) {
        return (
            <>
                <Head>
                    <title>TalkSquare - Episode Not Found</title>
                </Head>
                <Layout>
                    <Heading text="Episode Not Found" />
                </Layout>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>TalkSquare - {episode.title}</title>
            </Head>
            <Layout>
                <div className="py-6">
                    <Link
                        href="/episodes"
                    >
                        <Button className="gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                            </svg>
                            Back to episodes
                        </Button>
                    </Link>
                </div>
                <Heading text={`#${episode.id < 10 ? '0' + episode.id : episode.id} ${episode.guest.name}`} />
                <div className="py-3">
                    <div className="mb-3">
                        <Image
                            width={150}
                            height={150}
                            alt="alt"
                            src={`/${episode.id}.jpg`}
                        />
                    </div>
                    <div className="text-xl">
                        {episode.title}
                    </div>
                    <p className="text-lg text-gray-400 max-w-2xl">
                        {episode.description}
                    </p>
                </div>
                <Link
                    target="_blank"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                >
                    <Button>
                        Listen on Spotify
                    </Button>
                </Link>
            </Layout>
        </>
    );
}