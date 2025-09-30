import React from 'react';
import Image from 'next/image';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { ScrollIndicator } from '@/components/common/ScrollIndicator';

function Hero() {
	return (
		<section
			id='hero'
			className='relative min-h-screen flex items-center justify-center overflow-hidden'
		>
			{/* Background Image */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/images/hero/main.jpg'
					alt='Boxing training'
					fill
					className='object-cover'
					priority
					quality={90}
				/>
				{/* Red Hue Overlay */}
				<div className='absolute inset-0 bg-ufb-red/30 mix-blend-multiply' />
				{/* Gradient Overlay */}
				<div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80' />
			</div>

			{/* Content */}
			<div className='relative z-10 container mx-auto px-4 py-32 lg:py-40 text-center'>
				{/* Logo */}
				<div className='flex justify-center mb-8 lg:mb-12 drop-shadow-2xl'>
					<Logo size='lg' withText={false} href='#hero' />
				</div>

				{/* Main Heading */}
				<h1 className='font-display mb-2 lg:mb-4'>
					<span className='block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground drop-shadow-lg'>
						UNDERGROUND
					</span>
					<span className='block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-ufb-red drop-shadow-lg'>
						FITNESS & BOXING
					</span>
				</h1>

				{/* Subtitle */}
				<p className='text-xl sm:text-2xl lg:text-3xl text-foreground/90 font-sans font-medium mb-4 lg:mb-6 drop-shadow-lg'>
					Strength. Discipline. Community.
				</p>

				{/* Description */}
				<p className='text-base sm:text-lg text-foreground/70 font-sans mb-8 lg:mb-12 max-w-md mx-auto'>
					Where healthy lifestyle starts
				</p>

				{/* CTAs */}
				<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
					<Button
						href='#pricing'
						variant='primary'
						size='lg'
						className='w-full sm:w-auto'
					>
						JOIN NOW
					</Button>
					<Button
						href='#about'
						variant='outline'
						size='lg'
						className='w-full sm:w-auto'
					>
						Learn More
					</Button>
				</div>

				{/* Scroll Down Indicator */}
				<ScrollIndicator />
			</div>
		</section>
	);
}

export default Hero;
