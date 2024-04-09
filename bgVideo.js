window.addEventListener('load', function () {

    let videobtnpuased = document.getElementById("paused")
    let videobtnon = document.getElementById("play")
    let vidoepause = this.document.getElementById("video_btn_paused")
    let videoyuans = document.getElementById("bgVideo");
    vidoepause.addEventListener('click', () => {
        
        if (videoyuans.paused) {
            videoyuans.play();
            videobtnpuased.style.display = 'none'
            videobtnon.style.display = 'block'

        } else {
            videoyuans.pause();
            videobtnpuased.style.display = 'block'
            videobtnon.style.display = 'none'
        }
    })

})