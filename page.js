hasStarted = false;


let start = async(html, css) => {

    const CONTAINER = document.createElement("div");
    CONTAINER.innerHTML = html;

    CONTAINER.style.position = "fixed";
    CONTAINER.style.top = "0"
    CONTAINER.style.left = "0";
    CONTAINER.style.width = "100%";
    CONTAINER.style.height= "100%";
    CONTAINER.style.zIndex = 9999;

    

    document.body.appendChild(CONTAINER);




};


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (hasStarted) return;
    hasStarted = true;

    if (request.message = "inject script") {
        console.log(request);
        start(request.html);
    }
})