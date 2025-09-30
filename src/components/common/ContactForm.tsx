'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
	};

	return (
		<div className='bg-card border border-border rounded-lg p-8 h-full flex flex-col'>
			<h2 className='font-display text-2xl font-bold text-foreground uppercase mb-6'>
				SEND US A MESSAGE
			</h2>

			<form onSubmit={handleSubmit} className='space-y-6 flex-1 flex flex-col'>
				{/* Name */}
				<div>
					<label
						htmlFor='name'
						className='block text-foreground text-sm font-medium mb-2'
					>
						Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						placeholder='Your name'
						required
						className='w-full px-4 py-3 bg-ufb-gray border border-input rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ufb-red focus:border-transparent transition-all'
					/>
				</div>

				{/* Email */}
				<div>
					<label
						htmlFor='email'
						className='block text-foreground text-sm font-medium mb-2'
					>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						placeholder='your.email@example.com'
						required
						className='w-full px-4 py-3 bg-ufb-gray border border-input rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ufb-red focus:border-transparent transition-all'
					/>
				</div>

				{/* Message */}
				<div className='flex-1 flex flex-col'>
					<label
						htmlFor='message'
						className='block text-foreground text-sm font-medium mb-2'
					>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						value={formData.message}
						onChange={handleChange}
						placeholder='Tell us about your fitness goals...'
						required
						className='w-full flex-1 px-4 py-3 bg-ufb-gray border border-input rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ufb-red focus:border-transparent transition-all resize-none'
					/>
				</div>

				{/* Submit Button */}
				<Button type='submit' variant='primary' size='lg' className='w-full'>
					SEND MESSAGE
				</Button>
			</form>
		</div>
	);
}
