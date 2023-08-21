import Layout from '@/components/layout';
import Head from 'next/head';
export default function AboutPage() {
	return (
		<>
			<Head>
				<title>TalkSquare - Contact</title>
			</Head>
			<Layout>
				About the Host(s): Meet Your Hosts: [Host Name]: Emily Reynolds
				[Host Bio]: Emily is a passionate science communicator and
				astronomy enthusiast. With a background in astrophysics, she
				brings a wealth of knowledge and curiosity to TalkSquare. Emily
				believes in making science accessible to all and loves
				unraveling the wonders of the universe through engaging
				conversations. [Host Name]: Ryan Walker [Host Bio]: Ryan is an
				adventurous storyteller with a knack for discovering untold
				narratives. His background in journalism and love for exploring
				cultures have led him to create TalkSquare, where he curates
				compelling stories and interviews fascinating individuals from
				around the world.
			</Layout>
		</>
	);
}
