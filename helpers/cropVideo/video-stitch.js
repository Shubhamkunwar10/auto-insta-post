import videoStitch from 'video-stitch';

let videoMerge  = videoStitch.merge;

videoMerge({
    // ffmpeg_path: <path-to-ffmpeg> Optional. Otherwise it will just use ffmpeg on your $PATH
    silent: true, // optional. if set to false, gives detailed output on console
    overwrite: false // optional. by default, if file already exists, ffmpeg will ask for overwriting in console and that pause the process. if set to true, it will force overwriting. if set to false it will prevent overwriting.
  })
  .original({
    "fileName": "./myVideo.mp4",
    "duration": "00:01:00"
  })
  .clips([
    {
        "startTime": "00:00:00",
        "fileName": "FILENAME",
        "duration": "00:01:00"
      },
  ])
  .merge()
  .then((outputFileName) => {
    console.log(outputFileName);
  });