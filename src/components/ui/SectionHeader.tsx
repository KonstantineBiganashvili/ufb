import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
	title: string;
	highlight?: string;
	description?: string;
	className?: string;
	underline?: boolean;
}

export function SectionHeader({
	title,
	highlight,
	description,
	className,
	underline = true,
}: SectionHeaderProps) {
	return (
		<div className={cn('text-center mb-12 lg:mb-16', className)}>
			<h2 className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4'>
				<span className='text-foreground'>{title} </span>
				{highlight && <span className='text-ufb-red'>{highlight}</span>}
			</h2>
			{underline && <div className='w-24 h-1 bg-ufb-red mx-auto mb-8' />}
			{description && (
				<p className='text-muted-foreground text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed'>
					{description}
				</p>
			)}
		</div>
	);
}
