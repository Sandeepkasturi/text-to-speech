chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    if (selection[0]) {
        var utterance = new SpeechSynthesisUtterance(selection[0]);
        speechSynthesis.speak(utterance);
        document.getElementById("status").innerHTML = " " + selection[0];
    } else {
        document.getElementById("status").innerHTML = "Error: No text selected";
    }
});
