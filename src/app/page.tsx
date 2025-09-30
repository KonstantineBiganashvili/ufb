import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Subscriptions from '@/components/Subscriptions';
import Trainers from '@/components/Trainers';
import Facilities from '@/components/Facilities';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Subscriptions />
				<Trainers />
				<Facilities />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
