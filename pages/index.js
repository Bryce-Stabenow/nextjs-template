import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					I'm a web developer from Mesa, AZ. Right now, I'm practicing with this
					website to create a boilerplate template for Next.js projects and
					expand my React knowledge.
				</p>
				<Link href="/posts/first-post">
					<a>First Post!</a>
				</Link>
			</section>
		</Layout>
	);
}
