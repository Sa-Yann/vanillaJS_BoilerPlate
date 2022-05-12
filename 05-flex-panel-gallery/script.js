const allPannels = document.querySelectorAll(`.panel`);


function toggleOpenClass() {
	this.classList.toggle('open')
};

function toggleOpenActiveClass(e) {
	console.log(e.propertyName);
	if(e.propertyName.includes('flex')) {
		this.classList.toggle('open-active')
	}
	// return e.propertyName.includes('flex') ? this.classList.toggle('open-active')
} 

allPannels.forEach(panel => panel.addEventListener('click', toggleOpenClass))
allPannels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActiveClass))
