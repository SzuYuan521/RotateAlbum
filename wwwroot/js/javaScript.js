function playMusic() {
    var bgMusic = document.getElementById("bgmusic");
    var album = document.getElementById("album");
    var btn = document.getElementById("btn");
    console.log(btn.style.display);
    bgMusic.play();
    album.style.display = "flex";
    // 移除按鈕點擊事件處理程序以避免多次觸發播放
    btn.removeEventListener("click", playMusic);
    btn.style.display = "none"; 
    console.log(btn.style.display);
}