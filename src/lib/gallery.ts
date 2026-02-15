import fs from 'fs';
import path from 'path';

export function getGalleryImages() {
    const galleryDir = path.join(process.cwd(), 'public/images/gallery');
    try {
        const files = fs.readdirSync(galleryDir);
        return files
            .filter(file => file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png'))
            .map(file => `/images/gallery/${file}`);
    } catch (error) {
        console.error('Error reading gallery directory:', error);
        return [];
    }
}
