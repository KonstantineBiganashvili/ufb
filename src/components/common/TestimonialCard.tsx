import React from 'react';
import { Card } from '@/components/ui/Card';

interface TestimonialCardProps {
	quote: string;
	author: string;
	memberSince: string;
	rating?: number;
}

export function TestimonialCard({
	quote,
	author,
	memberSince,
	rating = 5,
}: TestimonialCardProps) {
	return (
		<Card className='p-8 text-center flex flex-col h-full' hover>
			{/* Star Rating */}
			<div className='flex justify-center gap-1 mb-6'>
				{[...Array(rating)].map((_, index) => (
					<svg
						key={index}
						className='w-5 h-5 text-ufb-red fill-current'
						viewBox='0 0 24 24'
					>
						<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
					</svg>
				))}
			</div>

			{/* Quote */}
			<blockquote className='flex-1 mb-6'>
				<p className='text-muted-foreground text-sm md:text-base italic leading-relaxed'>
					&ldquo;{quote}&rdquo;
				</p>
			</blockquote>

			{/* Author Info */}
			<div>
				<p className='text-foreground font-display font-bold text-base mb-1'>
					{author}
				</p>
				<p className='text-muted-foreground text-xs'>{memberSince}</p>
			</div>
		</Card>
	);
}
