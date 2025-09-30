import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PricingCard } from '@/components/common/PricingCard';

const pricingPlans = [
	{
		id: 1,
		title: 'DAILY PASS',
		price: '₾20',
		period: 'day',
		features: [
			'Full gym access',
			'Boxing equipment',
			'Locker room access',
			'Open training hours',
		],
		popular: false,
	},
	{
		id: 2,
		title: '14-DAY PASS',
		price: '₾70',
		period: '14 days',
		features: [
			'Everything in Daily Pass',
			'Guest class participation',
			'Nutrition consultation',
			'Training plan included',
			'Progress tracking',
		],
		popular: true,
		buttonText: 'SIGN UP',
	},
	{
		id: 3,
		title: 'MONTHLY',
		price: '₾100',
		period: '30 days',
		features: [
			'Everything in 14-Day Pass',
			'Unlimited classes',
			'Personal trainer sessions',
			'Priority booking',
			'Private locker',
			'Exclusive member events',
		],
		popular: false,
	},
];

function Subscriptions() {
	return (
		<section id='pricing' className='py-20 lg:py-28 bg-ufb-black'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<SectionHeader
					title='SUBSCRIPTIONS'
					description='Choose the plan that fits your goals. All memberships include access to our world-class facilities and expert coaching.'
					className='mb-16'
				/>

				{/* Pricing Cards Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto'>
					{pricingPlans.map((plan) => (
						<PricingCard
							key={plan.id}
							title={plan.title}
							price={plan.price}
							period={plan.period}
							features={plan.features}
							popular={plan.popular}
							buttonText={plan.buttonText}
							buttonHref='/signup'
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Subscriptions;
