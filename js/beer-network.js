// Scales 
var colors = d3.scaleOrdinal(d3.schemeCategory10)
              .domain(["Core Beers","NEIPAs & Sours","Lagers & German","Belgian Ales","English Ales","Cider, Mead, Herb","Misc"]);
var sizes = d3.scaleSqrt().domain([100,16323]).range([5,25]);
var scaleWeights = d3.scaleLinear().domain([0.05,0.30]).range([1,5]);


//Initialize a simple force layout, using the nodes and edges in dataset
var force = d3.forceSimulation(data.nodes)
			        .force("collision", d3.forceCollide().strength(1.5).radius(d => sizes(d.n)))
						  .force("charge", d3.forceManyBody()
						        .strength(-450).distanceMax(150))
						  .force("link", d3.forceLink(data.edges).distance(5))
						  .force("center", d3.forceCenter().x(width/2).y(height/2))
						  .force("forceX", d3.forceX().strength(0.05).x(height/2))
						  .force("forceY", d3.forceY().strength(0.05).y(height/2));
			
//Create edges as lines
var edges = svg.selectAll("line")
				.data(data.edges)
				.enter()
				.append("line")
				.style("stroke", "#ccc")
				.style("stroke-width", d => 25*d.weight)
				.style("opacity",0.6);

	
//Create nodes as circles
//var nodes = svg.selectAll("circle")	
var nodes = svg.selectAll("g")
        .data(data.nodes)
        .enter()
        .append("g")
        .attr("class","node")
				.append("circle")
				.attr("r", function(d, i) { return sizes(d.n); })
				.style("fill", function(d, i) { return colors(d.fgrp); })
				.style("stroke", "black")
				.style("stroke-width",0.5)
				.style("opacity",1.0);

// Simulation ticks
const simulationDurationInMs = 20000; // 20 seconds
let startTime = Date.now();
let endTime = startTime + simulationDurationInMs;

//Every time the simulation "ticks", this will be called
force.on("tick", function() {
      if (Date.now() < endTime) {
        /*update the simulation*/
			  edges.attr("x1", function(d) { return d.source.x; })
					 .attr("y1", function(d) { return d.source.y; })
					 .attr("x2", function(d) { return d.target.x; })
					 .attr("y2", function(d) { return d.target.y; });
			
			  nodes.attr("cx", function(d) { return d.x; })
					 .attr("cy", function(d) { return d.y; });
				labels.attr("x", function(d) { return d.x; })
					 .attr("y", function(d) { return d.y; });
      } else {
        force.stop();
      }
	});