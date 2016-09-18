function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

httpRequest("http://120.27.4.87:888/getip", function(ip){
    document.getElementById("ip_div").innerText = ip;
});

chrome.runtime.sendMessage('Hello', function(response){
    document.write(response);
});