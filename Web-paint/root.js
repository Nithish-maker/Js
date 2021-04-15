// console.log("JS rendered successfully");
// let r;
// let g;
// let b;
const canvasProperties = {
	width:650,
	height:600,
};
function domSelector(input){
  return document.querySelector(`${input}`);
}
//creating canvas below the toolbar 
function setup() {
	let canvas = createCanvas(canvasProperties.width,canvasProperties.height);
	canvas.parent("#canvas-wrapper");
	background(255);
}
function mouseDragged(event) {
	let penTool = domSelector('#pen-pencil').checked?"pencil":"brush";
	let sizeValue = parseInt(domSelector('#pen-size').value);
	let colorValue = domSelector('#pen-color').value;
	// console.log(sizeValue);
	fill(colorValue);
	if(penTool == "pencil") {
		stroke(colorValue);
		line(pmouseX,pmouseY,mouseX,mouseY);
	}
	else {
		noStroke();
		ellipse(mouseX,mouseY,sizeValue,sizeValue);
	}
}

const reset = domSelector('#reset-canvas').addEventListener('click',function() {
	clear( );
	background(255);
});

const save = domSelector('#save-canvas').addEventListener('click',function() {
	saveCanvas(canvas,"sketch","png");
	// console.log("save button triggered");
})

