import React from 'react';
import Link from 'next/link';

export interface NavLink {
	href: string;
	label: string;
}

interface NavigationProps {
	links: NavLink[];
	className?: string;
}

export function Navigation({ links, className = '' }: NavigationProps) {
	return (
		<nav className={className}>
			{links.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className='text-foreground hover:text-ufb-red transition-colors font-sans text-sm font-medium'
				>
					{link.label}
				</Link>
			))}
		</nav>
	);
}
