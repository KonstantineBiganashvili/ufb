import React from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from './Icons';

export function ScrollIndicator() {
	return (
		<Link
			href='#about'
			className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover:text-ufb-red transition-colors'
			aria-label='Scroll to content'
		>
			<ChevronDownIcon className='w-6 h-6 lg:w-8 lg:h-8 text-foreground/60' />
		</Link>
	);
}
