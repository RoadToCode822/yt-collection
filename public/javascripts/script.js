// Validate Title and URL inputs

function validateForm() {
    var ytTitle = document.forms["ytPPForm"]["ytTitle"].value;
    var ytURL = document.forms["ytPPForm"]["ytURL"].value;
    if (ytTitle == "") {
        alert("Please enter a title for the video");
        return false;
    }
    if (ytURL == "") {
        alert("Please enter a YouTube URL");
        return false;
    }
}