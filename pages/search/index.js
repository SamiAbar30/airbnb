import Footer from '../../components/Footer';
import Header from '../../components/Header';

function index() {
	return (
		<div>
			<Header />
			<main className='flex'>
				<section>
					<p className='text-xs'>300+ Stays for 5 number of guests </p>
					<h1 className='text-3xlfont-semibold mt-2  mb-6'>Stay in New York</h1>
				
        </section>
			</main>
			<Footer />
		</div>
	);
}

export default index;
