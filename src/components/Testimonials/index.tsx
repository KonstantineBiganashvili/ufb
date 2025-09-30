import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TestimonialCard } from '@/components/common/TestimonialCard';

const testimonials = [
	{
		id: 1,
		quote:
			'UFB transformed not just my body, but my entire mindset. The trainers are incredible and the community is so supportive!',
		author: 'Alex M.',
		memberSince: 'Member since 2023',
		rating: 5,
	},
	{
		id: 2,
		quote:
			'Best boxing gym in the city! The classes are intense but the atmosphere is welcoming to all levels. Highly recommend!',
		author: 'Sarah K.',
		memberSince: 'Member since 2022',
		rating: 5,
	},
	{
		id: 3,
		quote:
			"I've tried many gyms, but UFB is different. The focus on discipline and technique really sets it apart. Love it here!",
		author: 'Mike R.',
		memberSince: 'Member since 2024',
		rating: 5,
	},
];

function Testimonials() {
	return (
		<section id='testimonials' className='py-20 lg:py-28 bg-background'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<SectionHeader
					title='WHAT OUR'
					highlight='MEMBERS SAY'
					description=''
				/>

				{/* Testimonials Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto'>
					{testimonials.map((testimonial) => (
						<TestimonialCard
							key={testimonial.id}
							quote={testimonial.quote}
							author={testimonial.author}
							memberSince={testimonial.memberSince}
							rating={testimonial.rating}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
