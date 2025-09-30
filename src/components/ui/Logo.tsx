import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
	size?: 'sm' | 'md' | 'lg' | 'xl';
	withText?: boolean;
	href?: string;
	className?: string;
}

const sizeMap = {
	sm: { image: 'w-8 h-8', text: 'text-lg' },
	md: { image: 'w-10 h-10 lg:w-12 lg:h-12', text: 'text-xl lg:text-2xl' },
	lg: { image: 'w-24 h-24 lg:w-32 lg:h-32', text: 'text-2xl lg:text-3xl' },
	xl: { image: 'w-32 h-32 lg:w-40 lg:h-40', text: 'text-3xl lg:text-4xl' },
};

export function Logo({
	size = 'md',
	withText = true,
	href = '#hero',
	className = '',
}: LogoProps) {
	const { image, text } = sizeMap[size];

	const content = (
		<>
			<div className={`relative ${image}`}>
				<Image
					src='/images/logo.png'
					alt='UFB Logo'
					fill
					className='object-contain'
					priority
				/>
			</div>
			{withText && (
				<span className={`font-display ${text} font-bold text-foreground ml-2`}>
					UFB
				</span>
			)}
		</>
	);

	if (href) {
		return (
			<Link href={href} className={`flex items-center gap-2 ${className}`}>
				{content}
			</Link>
		);
	}

	return (
		<div className={`flex items-center gap-2 ${className}`}>{content}</div>
	);
}
