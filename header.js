window.addEventListener('load', function () {
	//导航区
	let audiu_on = document.getElementById('audio_on')
	let audioimg = document.getElementById('audio_headerimg')
	let audio_off = this.document.getElementById('audio_off')
	//音频播放
	
	let videoyuans = document.getElementById("bgVideo");
	audiu_on.addEventListener('click',()=>{
		audio_off.style.display = 'block'
		videoyuans.muted = true; 
		
	})
	audio_off.addEventListener('click',function(){
		audio_off.style.display = 'none'
		videoyuans.muted = false; 
	})
	
	
	
	let header_navitem = this.document.querySelector('.header_navitem')
	let header_Cloud = this.document.querySelector('.header_Cloud')
	let SuspendedStyle = header_navitem.querySelectorAll('a')
	let header__navbar = this.document.querySelector('.header__navbar')
	let current = 0
	for (let i = 0; i< SuspendedStyle.length; i++){
		SuspendedStyle[i].addEventListener('mouseenter',function(){
			animate(header_Cloud,this.offsetLeft);
		})
		header__navbar.addEventListener('mouseleave',function(){
			animate(header_Cloud,70);
		})
	}
})