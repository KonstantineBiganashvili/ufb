import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FacilityImage } from '@/components/common/FacilityImage';

const facilities = [
	{
		id: 1,
		src: '/images/facilities/boxing-ring.jpg',
		alt: 'Boxing Ring',
		caption: 'STATE-OF-THE-ART FACILITY',
	},
	{
		id: 2,
		src: '/images/facilities/training.jpg',
		alt: 'Group Training',
		caption: 'GROUP TRAINING SESSIONS',
	},
	{
		id: 3,
		src: '/images/facilities/equipment.jpg',
		alt: 'Boxing Equipment',
		caption: 'PROFESSIONAL EQUIPMENT',
	},
];

function Facilities() {
	return (
		<section id='gallery' className='py-20 lg:py-28 bg-ufb-black'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<SectionHeader
					title='OUR'
					highlight='FACILITIES'
					description='Experience world-class training in our modern, fully-equipped facility.'
				/>

				{/* Facilities Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto'>
					{facilities.map((facility) => (
						<FacilityImage
							key={facility.id}
							src={facility.src}
							alt={facility.alt}
							caption={facility.caption}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Facilities;
