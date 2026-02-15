import * as faceapi from '@vladmandic/face-api';

let modelsLoaded = false;

export async function loadFaceApiModels() {
    if (modelsLoaded) return;

    try {
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        modelsLoaded = true;
        console.log('Face detection models loaded');
    } catch (error) {
        console.error('Error loading face detection models:', error);
    }
}

export async function detectFaces(imageElement: HTMLImageElement) {
    if (!modelsLoaded) await loadFaceApiModels();

    const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 128, scoreThreshold: 0.3 });
    const detections = await faceapi.detectAllFaces(imageElement, options);

    return detections;
}
