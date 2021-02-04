chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(
        ["iteration", "version"], r => {
            chrome.storage.sync.set({ "iteration": r.iteration + 1 || 1, "version": r.version || 0 });
            console.log(`Installed. Version: ${r.version || 0}.${r.iteration + 1 || 1}`)
        });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
    console.log(request);
    sendResponse({message:"WHOA"});

    if(request.message = "INJECT"){
        // chrome.tabs.executeScript(fiel)
    }

})

