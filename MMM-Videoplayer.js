/* global Module */

/* Magic Mirror 2
 * Module: MMM-Videoplayer
 *
 * By Erik Pettersson
 * Based on the MMM-videoPlay Module by Sungje KIM
 *
 * MIT Licensed.
 */
Module.register("MMM-Videoplayer", {
		defaults: {
			video: "/modules/MMM-Videoplayer/video/mov_bbb.mp4", // Can also be a link to a mp4 file on the internet.
			loop: true, // Repeat the video.
			showcontorls: false, // Set to true if you want the video controls to show.
			preload: "auto", // Can be set to: "auto", "metadata", "none".
			autoplay: true, // If set to true, sound (muted below) has to be true, otherwise the video will not auto play.
			muted: true, // Mute the sound. If auto play is true, this needs to be true as well, otherwise the video will not auto play.
			pauseonhide: true, // If true the module will pause the video when hidden.
			resumeonshow: true,  // If true the module will resume the video when shown.
			notification: "VIDEOPLAYER1", // Unique notification string for this player. 
		},
		
		// Loading the CSS
		getStyles: function () {
			return ["MMM-Videoplayer.css"];
		},

		// Pause and play control via notifications using "TOGGLE".
		notificationReceived: function(notification, payload, sender) {
			if (notification === this.config.notification) {
				if (payload === 'TOGGLE') {
					mmvideo = document.getElementById(this.identifier+"_video");
					if (mmvideo.paused) {
						mmvideo.play(); 
					} else {
						mmvideo.pause(); 
					}
				} 
			}
		},

		// What happens when the module is hidden.
		suspend: function() {
			if (this.config.pauseonhide) {
				mmvideo = document.getElementById(this.identifier+"_video");
				mmvideo.pause();
			}
		},

		// What happens when the module is shown.
		resume: function() {
			if (this.config.resumeonshow) {
				mmvideo = document.getElementById(this.identifier+"_video");
				mmvideo.play();
			}
		},

		// Send the module. :)
		getDom: function () {
			var wrapper = document.createElement("div");
			var video = document.createElement("video");
			video.src = this.config.video;
			video.muted = this.config.muted;
			video.autoplay = this.config.autoplay;
			video.loop = this.config.loop;
			video.controls = this.config.showcontorls;
			video.preload = this.config.preload;
			video.id = this.identifier+"_video";
			wrapper.appendChild(video);
			return wrapper;
		},
	}
);
