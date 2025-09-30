import React from 'react';

interface QuoteProps {
	text: string;
	author: string;
	className?: string;
}

export function Quote({ text, author, className = '' }: QuoteProps) {
	return (
		<div className={`max-w-3xl mx-auto ${className}`}>
			<blockquote className='relative pl-6 border-l-4 border-ufb-red py-4'>
				<p className='text-ufb-red text-xl sm:text-2xl lg:text-3xl font-sans italic font-medium'>
					&ldquo;{text}&rdquo;
				</p>
				<footer className='text-muted-foreground text-sm sm:text-base mt-2'>
					— {author}
				</footer>
			</blockquote>
		</div>
	);
}
