import Episodes from '@/components/episodes';
import Heading from '@/components/heading';
import Layout from '@/components/layout';
import Head from 'next/head';

export default function EpisodesPage() {
	return (
		<>
			<Head>
				<title>TalkSquare - Episodes</title>
			</Head>
			<Layout>
				<Heading text="all episodes" />
				<Episodes />
			</Layout>
		</>
	);
}
