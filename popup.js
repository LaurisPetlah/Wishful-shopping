const userTimeout = 0;

const scanButton = document.querySelector(".scan-button");

scanButton.addEventListener("mousedown", () => {
    for (const child of scanButton.children) {
        child.style.display = "none";
    }

    let loadingImage = document.createElement("img");
    loadingImage.src = "./assets/Ellipsis-1s-32px.svg"
    scanButton.appendChild(loadingImage);
    setTimeout(async() => {

        // chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
        // chrome.tabs.executeScript(tab[0].id, {
        //     // file: "page.css"
        // })
        // chrome.runtime.sendMessage({ message: "INJECT" }, response => {console.log(response)} )
        let htmlLoad = await fetch("./page/page.html");
        let html = await htmlLoad.text();

        function loadHTML() {
            return html;
        }
        chrome.tabs.executeScript({
            file: "page.js"
        }, () => {
            chrome.tabs.query({ currentWindow: true, active: true }, (tab) => {
                chrome.tabs.sendMessage(tab[0].id, { message: "inject script", html });

            })
        })


        // })
    }, userTimeout);
})