// @ts-ignore
import cron from 'node-cron';
// @ts-ignore
import ffmpeg from "ffmpeg";

const videoFilePath = './myVideo.mp4';
const outputDirectory = '/directory/';
const WatermarkPath = './watermark.jpg';

/**
 * @param {number} startingTime
 * @param {number} cutDuration
 */

export function cutVideo(startingTime, cutDuration) {
    try {
        console.log("starting reading image");
        var process = new ffmpeg(videoFilePath);
        process.then(function (
            /** @type {{ setVideoStartTime: (arg0: number) => void; setVideoDuration: (arg0: number) => void; fnAddWatermark: (arg0: string, arg1: string, arg2: { position: string; }, arg3: (error: any, file: any) => void) => void; }} */ 
            video) {
                console.log(video.metadata);
            video.setVideoStartTime(startingTime)
            .setVideoDuration(cutDuration)
            .fnExtractSoundToMP3(outputDirectory, function (error, file) {
                if (!error)
                    console.log('Audio file: ' + file);
                else 
                    console.log(error);
            });
        }, function (
            /** @type {string} */
         err
        ) {
            console.log('Error: ' + err);
        });
    } catch (e) {
        // @ts-ignore
        console.log(e.code);
        // @ts-ignore
        console.log(e.msg);
    }
}

export function scheduleVideoCutting() {
    console.log('Cutting video...');
        console.log('Cutting video...');
        cutVideo(10, 10); // Example: Cutting video from 10 seconds to 20 seconds
}