import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
	children: React.ReactNode;
	variant?: ButtonVariant;
	size?: ButtonSize;
	href?: string;
	className?: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
}

const buttonVariants = {
	primary:
		'bg-ufb-red hover:bg-ufb-red-dark text-white shadow-lg hover:shadow-ufb-red/50 hover:scale-105',
	secondary: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground',
	outline:
		'border-2 border-ufb-red text-ufb-red hover:bg-ufb-red hover:text-white',
};

const buttonSizes = {
	sm: 'px-4 py-2 text-xs',
	md: 'px-6 py-2.5 text-sm',
	lg: 'px-8 py-3.5 text-base',
};

export function Button({
	children,
	variant = 'primary',
	size = 'md',
	href,
	className,
	onClick,
	type = 'button',
	disabled = false,
}: ButtonProps) {
	const baseStyles =
		'font-bold rounded-lg transition-all duration-300 uppercase inline-flex items-center justify-center';
	const variantStyles = buttonVariants[variant];
	const sizeStyles = buttonSizes[size];

	const combinedClassName = cn(
		baseStyles,
		variantStyles,
		sizeStyles,
		disabled && 'opacity-50 cursor-not-allowed',
		className,
	);

	if (href) {
		return (
			<Link href={href} className={combinedClassName}>
				{children}
			</Link>
		);
	}

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={combinedClassName}
		>
			{children}
		</button>
	);
}
