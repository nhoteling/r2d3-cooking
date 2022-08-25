svg.selectAll("circle")
  .data(data)
  .enter()
    .append("circle")
    .attr("class","circle-test")
      .attr("cx", function(d, i) {
        return (i * 50) + 50;
      })
      .attr("cy", 50)
      .attr("r", function(d) {
        return d;
      });