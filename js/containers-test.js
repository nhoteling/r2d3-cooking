
// Create SVG containers 
var container = div.append("div").style("position", "relative");

var svg1 = container //d3.select("div")
    .append("svg")
    .attr("class", "circle-tester")
    .attr("width", 300)
    .attr("height", 100);
    
var svg2 = container //d3.select("div")
    .append("svg")
    .attr("class","rect-tester")
    .attr("width", 300)
    .attr("height", 100);


// Draw stuff in the containers
svg1.selectAll("circle")
  .data(data)
  .enter()
    .append("circle")
    .attr("class","circle-test2")
      .attr("cx", function(d, i) {
        return (i * 50) + 25;
      })
      .attr("cy", 50)
      .attr("r", function(d) {
        return d;
      });
  

svg2.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
        .attr("class","rect-test2")
        .attr("x", function(d,i) { return (i*50)+25; })
        .attr("y", 25)
    .attr("width", function(d) { return d*2; })
    .attr("height", 50);
  
  
      
//svg2.selectAll("rect")
//  .data(data)
//  .enter()
//    .append("rect")
//    .attr("class","rect-test")
//      .attr("x", function(d, i) {
//        return (i * 50) + 50;
//      })
//      .attr("y", 50)
//      .attr("width", function(d) {
//        return d;
//      });