
const constraints = {
  video: true
};
navigator.mediaDevices.getUserMedia(constraints)
  .then(function(stream) {
    var videoTracks = stream.getVideoTracks();
    console.log('Got stream with constraints:', constraints);
    console.log('Using video device: ' + videoTracks[0].label);
    stream.onended = function() {
      console.log('Stream ended');
    };
    window.stream = stream; // make variable available to console
  });
