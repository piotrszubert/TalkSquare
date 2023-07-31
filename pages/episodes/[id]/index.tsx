import Heading from "@/components/heading";
import Layout from "@/components/layout";
import Head from "next/head";
import { useRouter } from 'next/router'
import episodesData from '@/data/episodesData';

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
        <Heading text={episode.guest.name} />
        {/* Display the rest of the episode details */}
        <div>
          <h2>Description:</h2>
          <p>{episode.description}</p>
          <h2>Guest:</h2>
          <p>
            Name: {episode.guest.name}
            <br />
            Profession: {episode.guest.profession}
          </p>
        </div>
      </Layout>
    </>
  );
}