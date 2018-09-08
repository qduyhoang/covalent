define(function(){
	return class Obj{
		constructor(x,y,h,w){
			this.x = x;
			this.y = y;
			this.height = h;
			this.width = w;

			this.sockets = {
				isFlowIn: true,
				isFlowOut: true,
				inputVars = [],
				outputVars = []
			};
		}

		update(){

		}
	}

});