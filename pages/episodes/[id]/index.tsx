import Heading from "@/components/heading";
import Layout from "@/components/layout";
import Head from "next/head";
import { useRouter } from 'next/router'
// Import the episodesData array or pass it as props from the parent component if available
// import { episodesData } from "path-to-your-episodes-data"; // Replace "path-to-your-episodes-data" with the correct path

import episodesData from '@/data/episodesData'

export default function EpisodePage() {
    const router = useRouter();
    const { id } = router.query;
    // Find the episode with the matching ID from the episodesData array
    const episode = episodesData.find((episode: any) => episode.id === parseInt(id));

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