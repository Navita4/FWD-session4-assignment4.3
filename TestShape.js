///<reference path="Ishape.ts"/>
///<reference path="circle.ts"/>
///<reference path="triangle.ts"/>
function drawAllshapes(shape) {
    shape.draw();
}
drawAllshapes(new Drawing.Circle());
drawAllshapes(new Drawing.Triangle());
// output to be shown
//circle is drawn
//Triangle is drawn 
