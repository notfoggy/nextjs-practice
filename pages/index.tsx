import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { getSortedPostsData } from '../lib/posts';
import homeStyles from '../styles/Home.module.css';

const Home = ({
	allPostsData,
}: {
	allPostsData: {
		date: string;
		title: string;
		id: string;
	}[];
}) => {
	return (
		<div>
			<Head>
				<title>Kim Jinwoo</title>
			</Head>
			<section className={homeStyles.headingMd}>
				<p>[Kim jw Intoduction]</p>
				<p>(This is a website)</p>
			</section>
			<section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
				<h2>Blog</h2>
				<ul>
					{allPostsData.map(({ id, title, date }) => (
						<li className={homeStyles.listItem} key={id}>
							<a>{title}</a>
							<br />
							<small className={homeStyles.lightText}>{date}</small>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
};
