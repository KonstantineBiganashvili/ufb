import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
	children: React.ReactNode;
	className?: string;
	hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
	return (
		<div
			className={cn(
				'bg-card border border-border rounded-lg p-6',
				hover &&
					'hover:border-ufb-red transition-all duration-300 hover:shadow-lg hover:shadow-ufb-red/10',
				className,
			)}
		>
			{children}
		</div>
	);
}

interface CardHeaderProps {
	children: React.ReactNode;
	className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
	return <div className={cn('mb-4', className)}>{children}</div>;
}

interface CardTitleProps {
	children: React.ReactNode;
	className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
	return (
		<h3
			className={cn(
				'font-display text-xl font-bold text-foreground',
				className,
			)}
		>
			{children}
		</h3>
	);
}

interface CardContentProps {
	children: React.ReactNode;
	className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
	return (
		<div
			className={cn('text-muted-foreground text-sm leading-relaxed', className)}
		>
			{children}
		</div>
	);
}
