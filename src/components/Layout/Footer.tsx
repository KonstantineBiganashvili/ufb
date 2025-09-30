import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

const footerLinks = [
	{ href: '#hero', label: 'Home' },
	{ href: '#about', label: 'About' },
	{ href: '#pricing', label: 'Pricing' },
	{ href: '#contact', label: 'Contact' },
];

function Footer() {
	return (
		<footer className='bg-ufb-black border-t border-border py-8'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-6'>
					{/* Left: Logo & Copyright */}
					<div className='flex flex-col items-center md:items-start gap-3'>
						<Logo size='md' withText />
						<div className='text-center md:text-left'>
							<p className='text-foreground font-sans font-medium text-sm'>
								Underground Fitness & Boxing
							</p>
							<p className='text-muted-foreground text-sm'>
								© 2025 UFB. All rights reserved.
							</p>
						</div>
					</div>

					{/* Right: Footer Links */}
					<nav className='flex gap-6'>
						{footerLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className='text-muted-foreground hover:text-ufb-red transition-colors font-sans text-sm'
							>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
