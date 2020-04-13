let selFile = document.getElementById("sel-file");
let calBtn = document.getElementById("cal-btn");
let display = document.getElementById("display-bpm");
let lameWorker = new Worker("script/lameWorker.js");
let reader = new FileReader();
let audioCtx = new AudioContext();

calBtn.onclick = () => {
    if(selFile.files[0]) loadFile();
}
selFile.onchange = (files) => {
    // loadFile();
}

function trimAudioBuffer(buffer, startTime, duration, sampleRate) {
    let startIndex = startTime * sampleRate;
    return buffer.slice(startIndex, startIndex + duration * sampleRate);
}

async function requstBPM(fileBlob){
    let request = new XMLHttpRequest();
    let formData = new FormData();
    formData.append("file", fileBlob, selFile.files[0].name);
    request.open("POST", "http://18.176.55.82:5000/bpm");
    return await (new Promise((resolve) => {
        request.send(formData);
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                resolve(request.response);
            }
        }
    }));
}

async function loadFile(){
    progressBar.style.display = "unset";
    let fileBuffer;
    calBtn.disabled = true;
    genLoadingAnimate();
    await new Promise((resolve) => {
        reader.readAsArrayBuffer(selFile.files[0]);
        reader.onload = (event)=>{
            fileBuffer = event.target.result;
            resolve();
        };
    });
    setProgressBar(0.2);
    await new Promise((resolve) => {
        audioCtx.decodeAudioData(fileBuffer, (buffer) => {
            fileBuffer = buffer;
            resolve();
        });
    });
    setProgressBar(0.4);
    let c1 = fileBuffer.getChannelData(0);
    let c2 = fileBuffer.getChannelData(0);
    c1 = trimAudioBuffer(c1, 5, 20, fileBuffer.sampleRate);
    c2 = trimAudioBuffer(c2, 5, 20, fileBuffer.sampleRate);
    lameWorker.postMessage({sampleRate: fileBuffer.sampleRate, buffer: [c1,c2]});
    (async function(){
        let data;
        await new Promise((resolve) => {
            lameWorker.onmessage = (e) => {
                data = e.data;
                resolve();
            };
        });
        setProgressBar(0.8);
        clearInterval(loadingAnimate);
        genCalAnimate();
        let bpm = await requstBPM(data);
        setProgressBar(1);
        clearInterval(calAnimate);
        display.innerHTML = `estimated bpm: ${bpm}`;
        calBtn.disabled = false;
        progressBar.style.display = "none";
    })();
}

let loadingAnimate;
function genLoadingAnimate() {
    let dotCount = 5;
    let totalDot = 0;
    display.innerHTML = "Loading"
    loadingAnimate = setInterval(()=>{
        if(totalDot >= dotCount) {
            totalDot = 0;
            display.innerHTML = "Loading"
            return;
        }
        display.innerHTML +=".";
        totalDot++;
    }, 100);
}

let calAnimate;
function genCalAnimate() {
    let dotCount = 5;
    let totalDot = 0;
    display.innerHTML = "Calculating"
    calAnimate = setInterval(()=>{
        if(totalDot >= dotCount) {
            totalDot = 0;
            display.innerHTML = "Calculating"
            return;
        }
        display.innerHTML +=".";
        totalDot++;
    }, 100);
}

let progressBar = document.getElementById("progress-bar");
progressBar.style.display = "none";
function setProgressBar(value) {
    progressBar.value = String(value);
}