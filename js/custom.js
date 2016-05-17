$(document).ready(function(){
	var dt = new Date();
		var hh = dt.getHours();
		var mm = dt.getMinutes();
		var ss = dt.getSeconds();

		if(6<hh<10){
			var player;

			function onYouTubeIframeAPIReady() {
    			player = new YT.Player('video-placeholder', {
        		width: 600,
        		height: 400,
        		videoId: 'Wfyp2rPV4MQ',
        		playerVars: {
            	color: 'white'
            	autoplay: 1},
            	onReady: initialize
        		}
    			});
				}
		else if (hh<18)
			var player;

			function onYouTubeIframeAPIReady() {
    			player = new YT.Player('video-placeholder', {
        		width: 600,
        		height: 400,
        		videoId: 'TTAU7lLDZYU',
        		playerVars: {
            	color: 'white'
            	autoplay: 1}
        			
            	onReady: initialize
        		}
    			});
				}

		}
		else if (hh<22)
				var player;

			function onYouTubeIframeAPIReady() {
    			player = new YT.Player('video-placeholder', {
        		width: 600,
        		height: 400,
        		videoId: 'Ny8EEzaOEMY',
        		playerVars: {
            	color: 'white'
            	autoplay: 1},
            	onReady: initialize
        		}
    			});
				}

		}
		else if 
					var player;

			function onYouTubeIframeAPIReady() {
    			player = new YT.Player('video-placeholder', {
        		width: 600,
        		height: 400,
        		videoId: 'GTzfdgAIX5I',
        		playerVars: {
            	color: 'white'
            	autoplay: 1},
            	onReady: initialize
        		}
    			});
				}


})