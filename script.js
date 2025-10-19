function submitMessage() {
    const message = document.getElementById("message").value;
    if (message) {
        alert("訊息已記錄於Ω級檔案。感謝您的參與。");
        document.getElementById("message").value = "";
    } else {
        alert("請輸入訊息。");
    }
}
