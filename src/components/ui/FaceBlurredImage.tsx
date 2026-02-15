'use client';

import React from 'react';
import Image from 'next/image';

interface FaceBlurredImageProps {
    src: string;
    alt: string;
    className?: string;
    fill?: boolean;
    width?: number;
    height?: number;
}

/**
 * Enhanced Image component for Maison Royale.
 * Note: AI blurring features have been removed for performance as per user request.
 */
export const FaceBlurredImage: React.FC<FaceBlurredImageProps> = ({
    src,
    alt,
    className = '',
    fill = false,
    width,
    height,
}) => {
    return (
        <div
            className="relative overflow-hidden"
            style={fill ? { width: '100%', height: '100%' } : {}}
        >
            <Image
                src={src}
                alt={alt}
                fill={fill}
                width={width}
                height={height}
                className={className}
            />
        </div>
    );
};
