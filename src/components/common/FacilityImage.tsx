import React from 'react';
import Image from 'next/image';

interface FacilityImageProps {
	src: string;
	alt: string;
	caption?: string;
}

export function FacilityImage({ src, alt, caption }: FacilityImageProps) {
	return (
		<div className='relative group overflow-hidden rounded-lg border border-border'>
			<div className='relative h-64 md:h-80 overflow-hidden'>
				<Image
					src={src}
					alt={alt}
					fill
					className='object-cover transition-transform duration-300 group-hover:scale-110'
				/>
				{/* Overlay */}
				<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
			</div>
			{caption && (
				<div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent'>
					<p className='text-foreground font-display font-bold text-lg uppercase tracking-wide'>
						{caption}
					</p>
				</div>
			)}
		</div>
	);
}
