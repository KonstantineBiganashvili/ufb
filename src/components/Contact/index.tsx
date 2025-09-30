import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactInfo } from '@/components/common/ContactInfo';
import { ContactForm } from '@/components/common/ContactForm';

function Contact() {
	return (
		<section id='contact' className='py-20 lg:py-28 bg-background'>
			<div className='container mx-auto px-4'>
				{/* Section Header */}
				<SectionHeader
					title='GET IN'
					highlight='TOUCH'
					description='Ready to start your fitness journey? Contact us today!'
				/>

				{/* Content Grid */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>
					{/* Left: Contact Info & Map */}
					<div className='flex flex-col'>
						<ContactInfo />

						{/* Map */}
						<div className='mt-8 rounded-lg overflow-hidden border border-border flex-1 min-h-[300px]'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.3945233615029!2d44.7325442834563!3d41.72962218113893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044737787260043%3A0x2988f9acd6a94217!2sUnderground%20Fitness%20%26%20Boxing!5e0!3m2!1sen!2sge!4v1759246771174!5m2!1sen!2sge'
								width='100%'
								height='100%'
								style={{ border: 0, pointerEvents: 'auto' }}
								allowFullScreen
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								title='UFB Location'
								className='pointer-events-auto'
							/>
						</div>
					</div>

					{/* Right: Contact Form */}
					<div className='flex flex-col h-full'>
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
