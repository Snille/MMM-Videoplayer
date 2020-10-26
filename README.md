# MMM-Videoplayer

This an extension for the [MagicMirror²](https://magicmirror.builders/). 

The module is a simple video player for your MagicMirror.

### Screen shot

[![The video](screenshot.png)](http://www.youtube.com/watch?v=7Xp5lOZNERc "MMM-Videoplayer")


The "button" is from [another module](https://github.com/Snille/MMM-Modulebar), only setup to show that the video pause and resume on show and hide of the module...

### Installation

In your terminal, go to your MagicMirror's Module folder:
````
cd ~/MagicMirror/modules
````

Clone this repository:
````
git clone https://github.com/Snille/MMM-Videoplayer.git
````

### Configuration

Example config (single local video file):

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
Example config (multi URLs to files on the Internet):

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
|`hideonstart`|false|If set to true, the player will hide it self when a clip is loaded (and just started playing (the clip will be paused when the module is hidden)). Then when the player is shown again it will continue play the clip and hide itself again when the next clip is loaded (and just starts playing) and so on.<br>Possible values: **true** or **false**|
|`showcontorls`|false|Show the controls or not.<br>Possible values: **true** or **false**|
|`preload`|auto|Preload the video or not see the html-[video](https://www.w3schools.com/tags/tag_video.asp)-tag for more information<br>Possible values: **auto**, **metadata** or **none**|
|`autoplay`|`true`|If set to true, sound (muted by default) has to be muted as well, otherwise the video will not auto play.<br>Possible values: **true** or **false**|
|`muted`|`true`|Mute the sound. If auto play is true, this needs to be true as well, otherwise the video will not auto play.<br>Possible values: **true** or **false**|
|`pauseonhide`|`true`|If true the module will pause the video when hidden.<br>Possible values: **true** or **false**|
|`resumeonshow`|`true`|If true the module will resume the video when shown.<br>Possible values: **true** or **false**|
|`notification`|`VIDEOPLAYER1`|Unique notification string for this player. "payload" can be "TOGGLE" to start or stop the player, "REPLAY" to restart current video or "NEXT" to play the next video in the list when sending notifications.|

### CSS Tricks

If you want to change the size of the player. Add the following in your custom.css and set the size there.

````css
.MMM-Videoplayer video {
    width: 560px;
    height: 315px;
}
````

If you want to rotate the player 90 degrees and set the size:

````CSS
.MMM-Videoplayer video {
    width: 560px;
    height: 315px;
    -moz-transform:rotate(90deg);
    -webkit-transform:rotate(90deg);
    -o-transform:rotate(90deg);
    -ms-transform:rotate(90deg);
    transform:rotate(90deg);
}
````

Normally you just need to add the line:

````CSS
    transform:rotate(90deg);
````

But for comparability reasons, you can add all of them. 🙂

And, as you will probably notice with the above CSS code. If you set the size as your screen size, the video player will not really “fill” the whole screen (if you put in in the "fullscreen_below" region) when you turn it 90 degrees. So, then you need to do this:

````CSS
.MMM-Videoplayer video {
    position: absolute;
    transform:rotate(90deg);
    transform-origin: bottom left;
    width: 100vh;
    height: 100vw;
    margin-top: -100vw;
    object-fit: cover;
}
````

### Notes
Even if the player is hidden, you can start and stop the video by sending "notifications" to it. :)
