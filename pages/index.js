import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
export default function Home({ explorDtata, cardsDtata }) {
	return (
		<div className=''>
			<Head>
				<title></title>
			</Head>
			<Header />
			<Banner />
			<main className='max-w-7xl mx-auto px-8 sm:px-16'>
				<section className='pt-6'>
					<h2 className='text-4xl font-semibold pb-5'>Explore Nearbu</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
						{explorDtata?.map((item, index) => (
							<SmallCard
								key={index}
								img={item.img}
								location={item.location}
								distance={item.distance}
							/>
						))}
					</div>
				</section>
				<section className=''>
					<h2 className='text-4xl font-semibold py-8'>Live Anywehre</h2>
					<div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
						{cardsDtata?.map((item, index) => (
							<MediumCard key={index} img={item.img} title={item.title} />
						))}
					</div>
				</section>

				<LargeCard
					img='https://links.papareact.com/4cj'
					title='The Greatest Outdoors' 
					description='Wishlists curated bu Airbnb'
					buttonText='Get inspired'
				/>
        
			</main>
      <Footer/>
		</div>
	);
}
export async function getStaticProps() {
	const explorDtata = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
		(res) => res.json(),
	);
	const cardsDtata = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
		(res) => res.json(),
	);
	return {
		props: {
			explorDtata,
			cardsDtata,
		},
	};
}
