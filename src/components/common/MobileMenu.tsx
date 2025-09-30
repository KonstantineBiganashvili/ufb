'use client';

import React from 'react';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { CloseIcon } from './Icons';

export interface NavLink {
	href: string;
	label: string;
}

interface MobileMenuProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	links: NavLink[];
}

export function MobileMenu({ isOpen, onOpenChange, links }: MobileMenuProps) {
	return (
		<Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
			<Dialog.Portal>
				<Dialog.Overlay className='fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0' />
				<Dialog.Content className='fixed right-0 top-0 bottom-0 z-[101] w-[280px] bg-ufb-gray border-l border-border p-6 shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right'>
					<div className='flex flex-col h-full'>
						<div className='flex items-center justify-between mb-8'>
							<Dialog.Title className='font-display text-xl font-bold text-foreground'>
								Menu
							</Dialog.Title>
							<Dialog.Close asChild>
								<button
									className='p-2 text-foreground hover:text-ufb-red transition-colors'
									aria-label='Close menu'
								>
									<CloseIcon />
								</button>
							</Dialog.Close>
						</div>

						<nav className='flex flex-col gap-1 flex-1'>
							{links.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => onOpenChange(false)}
									className='text-foreground hover:text-ufb-red hover:bg-ufb-red/10 transition-colors font-sans text-base font-medium px-4 py-3 rounded'
								>
									{link.label}
								</Link>
							))}
						</nav>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
