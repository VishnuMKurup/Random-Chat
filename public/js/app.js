window.addEventListener('load', ()=> {
    const mimeCodec ="video/mp4"
    function checkSupport() {
        if('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
            console.log('supported');
        } else {
            console.log("This type of media not supporteed");
        }
    }

    const statusPlaceholder = document.querySelector('#status span');
    const constraints = { audio: true, video: true };

    const selfVideo = document.querySelector("video.selfview");


    async function start() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);

        // for (const track of stream.getTracks()) {
        // pc.addTrack(track, stream);
        // }
        selfVideo.srcObject = stream;
        statusPlaceholder.innerText = "Connected with yourself";

    } catch(err) {
        statusPlaceholder.innerText = err;
    }
    }

    start()

});