//engine core

define(function(){
return class Board{
	constructor(){
		this.canvas = document.createElement('canvas');
		document.body.appendChild(this.canvas);
		this.context = this.canvas.getContext('2d');

		this.canvas.width  = document.body.clientWidth;
  		this.canvas.height = document.documentElement.scrollHeight/1.618;
  		this.initEventListeners();
		console.log("init complete");
	}

	tick() {
		this.clear();
		this.update();
		this.render();
	}

	update() {
		console.log("update");
	}

	render() {
		console.log("render");
	}

	clear() {
		console.log("clear");
	}

	something() {
		console.log("foobar");
	}


	//event listeners
	initEventListeners() {
		console.log("foobar");
		document.addEventListener('mousemove', (e) => {
			this.mouseX = e.clientX;
			this.mouseY = e.clientY;
			console.log(this.mouseX, this.mouseY);
			console.log("e", e);
			this.tick();
		});
	}
}

});