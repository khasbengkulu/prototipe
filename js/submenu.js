let hamburger= document.getElementById('hamburger');
let menu= document.getElementById('menu');
let cofy= document.getElementById('cofyright');
hamburger.addEventListener('click', function () {
menu.classList.toggle('tampilkan');
cofy.classList.toggle('info');
});


let cofyright= document.getElementById('cofyright');
let programed = document.getElementById('programed');
cofyright.addEventListener('click', function(){
	programed.classList.toggle('by');
});

let captha = document.getElementById('pertanyaan');
let j = document.getElementById('jawaban');
let jawaban = document.getElementById('captha');
let angkat1=Math.floor(Math.random()*100);
let angkat2=Math.floor(Math.random()*100);
let jumlah= angkat1+angkat2;
captha.innerHTML=angkat1+' + '+ angkat2;
function cek()
{
 if (jawaban.value!=jumlah) {
		alert('captha salah');
		return false;
	}
}


// rencana judul scripsi : pembuatan sistem informasi berbasis web pada pemerintahan Desa Sendawar.

