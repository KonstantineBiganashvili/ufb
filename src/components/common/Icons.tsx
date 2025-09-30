import React from 'react';

interface IconProps {
	className?: string;
}

export function MenuIcon({ className = 'w-6 h-6' }: IconProps) {
	return (
		<svg
			className={className}
			fill='none'
			stroke='currentColor'
			viewBox='0 0 24 24'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M4 6h16M4 12h16M4 18h16'
			/>
		</svg>
	);
}

export function CloseIcon({ className = 'w-6 h-6' }: IconProps) {
	return (
		<svg
			className={className}
			fill='none'
			stroke='currentColor'
			viewBox='0 0 24 24'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M6 18L18 6M6 6l12 12'
			/>
		</svg>
	);
}

export function ChevronDownIcon({ className = 'w-6 h-6' }: IconProps) {
	return (
		<svg
			className={className}
			fill='none'
			stroke='currentColor'
			viewBox='0 0 24 24'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M19 9l-7 7-7-7'
			/>
		</svg>
	);
}

export function LightningIcon({ className = 'w-12 h-12' }: IconProps) {
	return (
		<svg
			className={className}
			fill='none'
			stroke='currentColor'
			viewBox='0 0 24 24'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={1.5}
				d='M13 10V3L4 14h7v7l9-11h-7z'
			/>
		</svg>
	);
}

export function UsersIcon({ className = 'w-12 h-12' }: IconProps) {
	return (
		<svg
			className={className}
			fill='none'
			stroke='currentColor'
			viewBox='0 0 24 24'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={1.5}
				d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
			/>
		</svg>
	);
}

export function BadgeCheckIcon({ className = 'w-12 h-12' }: IconProps) {
	return (
		<svg
			className={className}
			fill='none'
			stroke='currentColor'
			viewBox='0 0 24 24'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={1.5}
				d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
			/>
		</svg>
	);
}
