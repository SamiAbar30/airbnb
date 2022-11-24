import { format } from 'date-fns';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function index({ searchResults }) {
	const router = useRouter();
	const { location, startDate, endDate, noOfGuests } = router.query;
	const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
	const formattedEndtDate = format(new Date(endDate), 'dd MMMM yy');
	const range = `${formattedStartDate} - ${formattedEndtDate}`;
	return (
		<div>
			<Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
			<main className='flex'>
				<section className='flex-grow pt-14 px-6'>
					<p className='text-xs'>
						300+ Stays -{range}- for {noOfGuests} guests{' '}
					</p>
					<h1 className='text-3xl font-semibold mt-2  mb-6'>
						Stays in {location}
					</h1>
					<div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
						{[
							'Cancellation Flexibility',
							'Type of Place',
							'Price',
							'Rooms and Beds',
							'More filters',
						].map((item, index) => (
							<p key={index} className='button'>
								{item}
							</p>
						))}
						<div className='flex-column'>
							{searchResults.map(
								({ img, location, title, description, star, price, total }) => (
									<InfoCard img location title description star price total />
								),
							)}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default index;

async function getServerSideProps() {
	const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
		(res) => res.json(),
	);
	return {
		props: {
			searchResults,
		},
	};
}
