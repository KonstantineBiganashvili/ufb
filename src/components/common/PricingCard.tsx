import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
	title: string;
	price: string;
	period: string;
	features: string[];
	popular?: boolean;
	buttonText?: string;
	buttonHref?: string;
}

export function PricingCard({
	title,
	price,
	period,
	features,
	popular = false,
	buttonText = 'Sign Up',
	buttonHref = '/signup',
}: PricingCardProps) {
	return (
		<div className='relative'>
			{popular && (
				<div className='absolute -top-4 left-1/2 -translate-x-1/2 z-10'>
					<span className='bg-ufb-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase'>
						MOST POPULAR
					</span>
				</div>
			)}
			<Card
				className={cn(
					'p-8 text-center flex flex-col h-full',
					popular && 'border-ufb-red shadow-lg shadow-ufb-red/20',
				)}
				hover={!popular}
			>
				{/* Title */}
				<h3 className='font-display text-2xl font-bold text-foreground mb-6 uppercase'>
					{title}
				</h3>

				{/* Price */}
				<div className='mb-8'>
					<span className='text-ufb-red text-5xl font-bold'>{price}</span>
					<span className='text-muted-foreground text-sm ml-2'>/ {period}</span>
				</div>

				{/* Features */}
				<ul className='space-y-4 mb-8 flex-1 text-left'>
					{features.map((feature, index) => (
						<li key={index} className='flex items-start gap-3'>
							<svg
								className='w-5 h-5 text-ufb-red flex-shrink-0 mt-0.5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2.5}
									d='M5 13l4 4L19 7'
								/>
							</svg>
							<span className='text-muted-foreground text-sm'>{feature}</span>
						</li>
					))}
				</ul>

				{/* Button */}
				<Button
					href={buttonHref}
					variant={popular ? 'primary' : 'outline'}
					size='md'
					className='w-full'
				>
					{buttonText}
				</Button>
			</Card>
		</div>
	);
}
