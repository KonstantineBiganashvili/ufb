import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';

interface TrainerCardProps {
	name?: string;
	role: string;
	description: string;
	image: string;
	comingSoon?: boolean;
}

export function TrainerCard({
	name,
	role,
	description,
	image,
	comingSoon = false,
}: TrainerCardProps) {
	return (
		<Card className='p-0 overflow-hidden group' hover>
			{/* Image */}
			<div className='relative h-64 bg-ufb-gray overflow-hidden'>
				<Image
					src={image}
					alt={name || role}
					fill
					className='object-cover transition-transform duration-300 group-hover:scale-110'
				/>
				{/* Overlay for placeholder */}
				{comingSoon && (
					<div className='absolute inset-0 bg-ufb-black/60 flex items-center justify-center'>
						<svg
							className='w-24 h-24 text-muted-foreground'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={1.5}
								d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
							/>
						</svg>
					</div>
				)}
			</div>

			{/* Content */}
			<div className='p-6 text-center'>
				{comingSoon && (
					<div className='mb-2'>
						<span className='text-foreground font-display font-bold text-lg uppercase tracking-wider'>
							COMING SOON
						</span>
					</div>
				)}
				{name && !comingSoon && (
					<h3 className='font-display text-2xl font-bold text-foreground mb-2 uppercase'>
						{name}
					</h3>
				)}
				<p className='text-ufb-red font-sans font-semibold text-sm mb-3 uppercase'>
					{role}
				</p>
				<p className='text-muted-foreground text-sm leading-relaxed'>
					{description}
				</p>
			</div>
		</Card>
	);
}
