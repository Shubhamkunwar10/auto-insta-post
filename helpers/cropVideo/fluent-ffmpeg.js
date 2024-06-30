
import ffmpeg from "fluent-ffmpeg"

function cutFirst10Seconds(inputPath, outputPath, callback) {
    // Use ffmpeg to cut the first 10 seconds of the video
    ffmpeg(inputPath)
        .setStartTime(0)
        .setDuration(10)
        .output(outputPath)
        .on('end', () => {
            console.log('Trimmed video successfully.');
            callback(null);
        })
        .on('error', (err) => {
            console.error('Error trimming video:', err);
            callback(err);
        })
        .run();
}

// Example usage
const videoFilePath = './myVideo.mp4';
const outputDirectory = '/directory/';
const WatermarkPath = './watermark.jpg';


cutFirst10Seconds(videoFilePath, outputDirectory, (err) => {
    if (err) {
        console.error('Failed to trim video:', err);
    } else {
        console.log('Video trimmed successfully!');
    }
});
