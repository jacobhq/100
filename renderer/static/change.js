if (typeof window !== "undefined") {
console.log("Bg changer is ready");
const header = document.getElementById("header");
const text = document.getElementById("text");
const btn = document.getElementById("btn");

function bgChanger() {
	if(this.scrollY > this.innerHeight / 2){
		document.body.classList.add("bg-neon");
        header.style.color = "#0b3954";
        text.style.color = "#0b3954";
        btn.style.color = "#20fc8f";
        btn.style.backgroundColor = "#0b3954";
	}else{
		document.body.classList.remove("bg-neon");
        header.style.color = "#20fc8f";
        text.style.color = "#20fc8f";
        btn.style.color = "#0b3954";
        btn.style.backgroundColor = "#20fc8f";
	}
}

window.addEventListener("scroll", bgChanger);
}