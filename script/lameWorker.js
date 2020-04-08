importScripts("Mp3LameEncoder.js");

onmessage = (e) => {
    let encoder = new Mp3LameEncoder(e.data.sampleRate, 64);
    encoder.encode(e.data.buffer);
    let blob = encoder.finish();
    postMessage(blob);
}