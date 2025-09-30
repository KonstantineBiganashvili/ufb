import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';

interface FeatureCardProps {
	title: string;
	description: string;
	icon: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
	return (
		<Card hover className='p-8 text-center'>
			<div className='flex justify-center mb-6 text-ufb-red'>{icon}</div>
			<h3 className='font-display text-xl font-bold text-foreground mb-4'>
				{title}
			</h3>
			<CardContent className='text-muted-foreground text-sm leading-relaxed'>
				{description}
			</CardContent>
		</Card>
	);
}
