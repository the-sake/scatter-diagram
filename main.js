const typeData = [
  {
    name: "淡麗辛口",
    mean: "담백한 카라쿠치",
    color: "#a7d317",
    x: 0,
    y: 0,
    tX: 200,
    tY: 40
  },
  {
    name: "濃醇辛口",
    mean: "농후한 카라쿠치",
    color: "#e95696",
    x: 350,
    y: 0,
    tX: 450,
    tY: 200
  },
  {
    name: "淡麗甘口",
    mean: "담백한 아마쿠치",
    color: "#d3e96b",
    x: 0,
    y: 350,
    tX: 50,
    tY: 300
  },
  {
    name: "濃醇甘口",
    mean: "농후한 아마쿠치",
    color: "#ee93bc",
    x: 350,
    y: 350,
    tX: 300,
    tY: 480
  }
]

d3.select('svg')
  .append('g')
  .attr('id', 'bgGroup')
  .attr('transform', 'rotate(30 450 70)')
  .selectAll('rect')
  .data(typeData)
  .enter()
  .append('rect')
  .attr('class', 'types')
  .attr('x', d => d.x)
  .attr('y', d => d.y)
  .attr('width', 350)
  .attr('height', 350)
  .style('fill', d => d.color)

d3.select("svg")
  .append("g")
  .attr("id", "txtGroup")
  .selectAll("text")
  .data(typeData)
  .enter()
  .append("text")
  .style("text-anchor", "middle")
  .attr("y", d => d.tY)
  .attr("x", d => d.tX)
  .style("font-size", "20px")
  .text(d => d.name)

  const sakeData = [
    {
      "Product": "하쿠시카 준마이 팩",
      "NihonShudo": 2,
      "Acidity": 1.4
    },
    {
      "Product": "하쿠시카 준마이 팩1",
      "NihonShudo": 2,
      "Acidity": 1.6
    },
    {
      "Product": "하쿠시카 준마이 팩2",
      "NihonShudo": 6,
      "Acidity": 1.5
    },
    {
      "Product": "하쿠시카 준마이 팩3",
      "NihonShudo": 9,
      "Acidity": 1.2
    }
  ];

// 일본주도
const xExtent = [0.4, 2.8];
// 산도
const yExtend = [25, -30];

const xScale = d3.scaleLinear().domain(xExtent).range([0, 500]);
const yScale = d3.scaleLinear().domain(yExtend).range([0, 500]);

const xAxis = d3.axisBottom(xScale)
                .tickSize(500);
d3.select("svg")
  .append("g")
  .attr("id", "xAxisG")
  .call(g => {
    g.call(xAxis);
    g.select(".domain").remove();
    g.selectAll(".tick:not(:last-of-type) line").attr("stroke", "#777").attr("stroke-dasharray", "3,3");
  });

const yAxis = d3.axisRight(yScale)
                .tickSize(500);
d3.select("svg")
  .append("g")
  .attr("id", "yAxisG")
  .call(g => {
    g.call(yAxis);
    g.select(".domain").remove();
    g.selectAll(".tick:not(:last-of-type) line").attr("stroke", "#777").attr("stroke-dasharray", "3,3");
  });

d3.select("svg")
  .selectAll("circle")
  .data(sakeData)
  .enter()
  .append("circle")
  .attr("r", 5)
  .attr("cx", (d) => xScale(d.Acidity))
  .attr("cy", (d) => yScale(d.NihonShudo));
