# MMM-Videoplayer

This an extension for the [MagicMirror²](https://magicmirror.builders/). 

The module is a simple video player for your MagicMirror.

### Screen shot

[![The video](screenshot.png)](http://www.youtube.com/watch?v=7Xp5lOZNERc "MMM-Videoplayer")


The "button" is from [another module](https://github.com/Snille/MMM-Modulebar), only setup to show that the video pause and resume on show and hide of the module...

Example config (single file):

````javascript
{
  module: 'MMM-Videoplayer',
  position: 'middle_center',
  config: {
    video: "/modules/MMM-Videoplayer/video/mov_bbb.mp4", // Can also be a URL to a mp4 file on the internet.
    loop: true, // Repeat the video.
    autoplay: true, // If set to true, sound (muted by default) has to be muted, otherwise the video will not auto play.
    notification: "VIDEOPLAYER1", // Unique notification string for this player (to be able to play, pause, restart and next from another modules).
  }
},
````
Example config (multi URLs to files):

````javascript
{
  module: 'MMM-Videoplayer',
  position: 'middle_center',
  config: {
    videolist: ["https://your.site.com/videos/video1.mp4", "https://your.site.com/videos/video2.mp4", "https://your.site.com/videos/video3.mp4"], // Can also be set to files in the path.
    random: true, // Repeat the videos in random order forever.
    autoplay: true, // If set to true, sound (muted by default) has to be muted, otherwise the video will not auto play.
    notification: "VIDEOPLAYER1", // Unique notification string for this player (to be able to play and pause from another modules).
  }
},
````

Absolute minimum config (will only play the default video file):

````javascript
{
  module: 'MMM-Videoplayer',
  position: 'middle_center',
  config: {
  }
},
````

| Option | Default | Description |
|---|---|---| 
|`video`|`/modules/MMM-Videoplayer/video/mov_bbb.mp4`|The video file to play (may be a URL to a video file as well).|
|`videolist`|none|`Example: ['/modules/MMM-Videoplayer/video/video01.mp4', '/modules/MMM-Videoplayer/video/video02.mp4',... ]` List of video files to play (may be URLs to different video files as well).|
|`loop`|`true`|Loop the video or not. If the videolist is set, it will loop through all videos.<br>Possible values: **true** or **false**|
|`random`|`false`|If set to true, all videos in the list vill be played until all videos has been played in radom order.<br>Possible values: **true** or **false**|
|`showcontorls`|false|Show the controls or not.<br>Possible values: **true** or **false**|
|`preload`|auto|Preload the video or not see the html-[video](https://www.w3schools.com/tags/tag_video.asp)-tag for more information<br>Possible values: **auto**, **metadata** or **none**|
|`autoplay`|`true`|If set to true, sound (muted by default) has to be muted as well, otherwise the video will not auto play.<br>Possible values: **true** or **false**|
|`muted`|`true`|Mute the sound. If auto play is true, this needs to be true as well, otherwise the video will not auto play.<br>Possible values: **true** or **false**|
|`pauseonhide`|`true`|If true the module will pause the video when hidden.<br>Possible values: **true** or **false**|
|`resumeonshow`|`true`|If true the module will resume the video when shown.<br>Possible values: **true** or **false**|
|`notification`|`VIDEOPLAYER1`|Unique notification string for this player. "payload" can be "TOGGLE" to start or stop the player, "REPLAY" to restart current video or "NEXT" to play the next video in the list when sending notifications.|

If you want to change the size of the player. Add the following in your custom.css and set the size there.

````css
.MMM-Videoplayer video {
    width: 560px;
    height: 315px;
}
````

### Notes
Even if the player is hidden, you can start and stop the video by sending "notifications" to it. :)
