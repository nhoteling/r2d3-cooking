// Draw stuff in the containers
var svg = div.append("div").append("svg");

svg.selectAll("circle")
  .data(data)
  .enter()
    .append("circle")
    .attr("class","circle-test3")
      .attr("cx", function(d, i) {
        return (i * 50) + 25;
      })
      .attr("cy", 50)
      .attr("r", function(d) {
        return d;
      })
      .attr("fill","#d3d3d3")
    .on("mouseover", function() {
      div.selectAll(".circle-test2")
      .style("stroke","black")
      .style("stroke-width","1px");
    });