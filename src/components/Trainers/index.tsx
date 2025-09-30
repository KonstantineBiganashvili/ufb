import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TrainerCard } from '@/components/common/TrainerCard';

const trainers = [
	{
		id: 1,
		name: 'Gaga',
		role: 'CrossFit Specialist',
		description: 'Passionate about transformation',
		image: '/images/trainers/gaga.jpg',
		comingSoon: false,
	},
	{
		id: 2,
		name: 'Misha',
		role: 'Head Boxing Coach',
		description: 'Expert in strength and conditioning',
		image: '/images/trainers/misha.jpg',
		comingSoon: false,
	},
	{
		id: 3,
		name: 'Temo',
		role: 'Fitness Instructor',
		description: 'Certified trainer with 10+ years experience',
		image: '/images/trainers/temo.jpg',
		comingSoon: false,
	},
];

function Trainers() {
	return (
		<section id='trainers' className='py-20 lg:py-28 bg-background'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<SectionHeader
					title='MEET OUR'
					highlight='TRAINERS'
					description='Our certified trainers are dedicated to helping you reach your full potential.'
				/>

				{/* Trainers Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto'>
					{trainers.map((trainer) => (
						<TrainerCard
							key={trainer.id}
							name={trainer.name}
							role={trainer.role}
							description={trainer.description}
							image={trainer.image}
							comingSoon={trainer.comingSoon}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Trainers;
