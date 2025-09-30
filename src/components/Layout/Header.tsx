'use client';

import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { Navigation } from '@/components/common/Navigation';
import { MobileMenu } from '@/components/common/MobileMenu';
import { MenuIcon } from '@/components/common/Icons';

const navLinks = [
	{ href: '#hero', label: 'Home' },
	{ href: '#about', label: 'About' },
	{ href: '#pricing', label: 'Pricing' },
	{ href: '#trainers', label: 'Trainers' },
	{ href: '#gallery', label: 'Gallery' },
	{ href: '#contact', label: 'Contact' },
];

function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-ufb-black/80 backdrop-blur-md border-b border-border'>
			<div className='container mx-auto px-4 lg:px-8'>
				<div className='flex items-center justify-between h-16 lg:h-20'>
					{/* Logo */}
					<Logo size='md' withText />

					{/* Desktop Navigation */}
					<Navigation
						links={navLinks}
						className='hidden lg:flex items-center gap-8'
					/>

					{/* Desktop Actions */}
					<div className='hidden lg:flex items-center gap-4'>
						<button className='px-3 py-1.5 border border-ufb-red text-ufb-red hover:bg-ufb-red/10 transition-colors rounded text-sm font-medium'>
							EN
						</button>
						<Button href='#pricing' variant='primary' size='md'>
							JOIN NOW
						</Button>
					</div>

					{/* Mobile Actions */}
					<div className='flex lg:hidden items-center gap-3'>
						<button className='px-2.5 py-1 border border-ufb-red text-ufb-red text-xs font-medium rounded'>
							EN
						</button>
						<Button href='#pricing' variant='primary' size='sm'>
							JOIN NOW
						</Button>

						{/* Mobile Menu Button */}
						<Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
							<Dialog.Trigger asChild>
								<button
									className='p-2 text-foreground hover:text-ufb-red transition-colors'
									aria-label='Open menu'
								>
									<MenuIcon />
								</button>
							</Dialog.Trigger>
						</Dialog.Root>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<MobileMenu
				isOpen={mobileMenuOpen}
				onOpenChange={setMobileMenuOpen}
				links={navLinks}
			/>
		</header>
	);
}

export default Header;
