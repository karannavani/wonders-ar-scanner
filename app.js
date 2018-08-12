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

const verb = 'GET';
const domain = 'http://localhost:4000/api';
const endPoint = '/wonders';
const req = new XMLHttpRequest();


req.open(verb, `${domain}${endPoint}/5b6f74a5789c303ca4541c58`); // GA
req.onreadystatechange = handleResponse;
req.send();
console.log('req is',req);

function handleResponse() {
  const readyState = this.readyState;
  const status = this.status;
  const res = JSON.parse(this.responseText);
  console.log('wat');

  if (readyState === 4 && status === 200) {
    console.log('res is',res.model);
    console.log('wonder div is', document.querySelector('#wonder'));
    document.querySelector('#wonder').setAttribute('src', 'scene.gltf');
  }
}
