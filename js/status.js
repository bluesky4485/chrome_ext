function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(true);
        }
    }
    xhr.onerror = function() {
        callback(false)
    }
    xhr.send();
}

// setInterval(function() {
//     httpRequest("http://120.27.4.87:888/getip", function(status) {
//         chrome.browserAction.setIcon({ path: 'images/' + (status ? 'online.png' : 'offline.png') });
//     })
// }, 5000);

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    if(message == 'Hello'){
        sendResponse('Hello from background.');
    }
});