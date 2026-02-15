'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { detectFaces } from '@/lib/face-api';
import { FaceDetection } from '@vladmandic/face-api';

interface FaceBlurredImageProps {
    src: string;
    alt: string;
    className?: string;
    fill?: boolean;
    width?: number;
    height?: number;
}

export const FaceBlurredImage: React.FC<FaceBlurredImageProps> = ({
    src,
    alt,
    className = '',
    fill = false,
    width,
    height,
}) => {
    const [faces, setFaces] = useState<FaceDetection[]>([]);
    const imageRef = useRef<HTMLImageElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = async () => {
        if (imageRef.current) {
            try {
                const detections = await detectFaces(imageRef.current);
                setFaces(detections);
            } catch (error) {
                console.error('Face detection error:', error);
            } finally {
                setIsLoaded(true);
            }
        }
    };

    useEffect(() => {
        // Reset faces if src changes
        setFaces([]);
        setIsLoaded(false);
    }, [src]);

    return (
        <div
            className="relative overflow-hidden"
            style={fill ? { width: '100%', height: '100%' } : {}}
        >
            <Image
                ref={imageRef}
                src={src}
                alt={alt}
                fill={fill}
                width={width}
                height={height}
                className={className}
                onLoad={handleImageLoad}
                unoptimized
            />

            {/* Blurred overlays for faces */}
            {faces.map((face, index) => {
                const { x, y, width: fWidth, height: fHeight } = face.box;
                // Calculate percentages for responsive placement
                // Note: face-api provides coordinates relative to the original image size as rendered
                // Since we are using fill or fixed width/height, we need to ensure the overlay matches
                return (
                    <div
                        key={index}
                        className="absolute pointer-events-none"
                        style={{
                            left: `${(x / (imageRef.current?.width || 1)) * 100}%`,
                            top: `${(y / (imageRef.current?.height || 1)) * 100}%`,
                            width: `${(fWidth / (imageRef.current?.width || 1)) * 100}%`,
                            height: `${(fHeight / (imageRef.current?.height || 1)) * 100}%`,
                            backdropFilter: 'blur(10px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '50%', // Circle blur for faces looks more natural
                            transform: 'scale(1.2)', // Slightly larger than detection box to ensure full coverage
                            zIndex: 10,
                        }}
                    />
                );
            })}
        </div>
    );
};
