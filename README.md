# MMM-Videoplayer

This an extension for the [MagicMirror²](https://magicmirror.builders/). 

The module is a simple video player for your MagicMirror.

### Screen shot

[![The video](screenshot.png)](http://www.youtube.com/watch?v=7Xp5lOZNERc "MMM-Videoplayer")


The "button" is from [another module](https://github.com/Snille/MMM-Modulebar), only setup to show that the video pause and resume on show and hide of the module...

Example config:

````javascript
{
  module: 'MMM-Videoplayer',
  position: 'middle_center',
  config: {
    video: "/modules/MMM-Videoplayer/video/mov_bbb.mp4", // Can also be a link to a mp4 file on the internet.
    loop: true, // Repeat the video.
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
|`video`|`/modules/MMM-Videoplayer/video/mov_bbb.mp4`|The video file to play.|
|`loop`|`true`|Loop the video or not.<br>Possible values: **true** or **false**|
|`showcontorls`|false|Show the controls or not.<br>Possible values: **true** or **false**|
|`preload`|auto|Preload the video or not see the html-[video](https://www.w3schools.com/tags/tag_video.asp)-tag for more information<br>Possible values: **auto**, **metadata** or **none**|
|`autoplay`|`true`|If set to true, sound (muted by default) has to be muted as well, otherwise the video will not auto play.<br>Possible values: **true** or **false**|
|`muted`|`true`|Mute the sound. If auto play is true, this needs to be true as well, otherwise the video will not auto play.<br>Possible values: **true** or **false**|
|`pauseonhide`|`true`|If true the module will pause the video when hidden.<br>Possible values: **true** or **false**|
|`resumeonshow`|`true`|If true the module will resume the video when shown.<br>Possible values: **true** or **false**|
|`notification`|`VIDEOPLAYER1`|Unique notification string for this player. "payload" should to be "TOGGLE" to start or stop the player when sending notifications.|

If you want to change the size of the player. Add the following in your custom.css and set the size there.

````css
.MMM-Videoplayer video {
    width: 560px;
    height: 315px;
}
````

### Notes
Even if the player is hidden, you can start and stop the video by sending "notifications" to it. :)
