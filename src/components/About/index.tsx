import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FeatureCard } from '@/components/common/FeatureCard';
import { Quote } from '@/components/common/Quote';
import {
	LightningIcon,
	UsersIcon,
	BadgeCheckIcon,
} from '@/components/common/Icons';

const features = [
	{
		id: 1,
		title: 'ELITE TRAINING',
		description:
			'World-class boxing and fitness programs designed for all levels',
		icon: <LightningIcon />,
	},
	{
		id: 2,
		title: 'STRONG COMMUNITY',
		description:
			'Train alongside motivated individuals who push you to be your best',
		icon: <UsersIcon />,
	},
	{
		id: 3,
		title: 'PROVEN RESULTS',
		description: 'Transform your body and mind with our expert guidance',
		icon: <BadgeCheckIcon />,
	},
];

function About() {
	return (
		<section id='about' className='py-20 lg:py-28 bg-background'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<SectionHeader
					title='ABOUT'
					highlight='UFB'
					description="At Underground Fitness & Boxing, we combine the ancient discipline of boxing with modern cross-training techniques to help you achieve your fitness goals. Whether you're a beginner or a seasoned athlete, our expert trainers will guide you every step of the way in a supportive, high-energy environment."
				/>

				{/* Quote */}
				<Quote
					text='Float like a butterfly, sting like a bee.'
					author='Muhammad Ali'
					className='mb-12'
				/>

				{/* Features Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mt-16'>
					{features.map((feature) => (
						<FeatureCard
							key={feature.id}
							title={feature.title}
							description={feature.description}
							icon={feature.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default About;
