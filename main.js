let sakeData = [
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



const xExtent = [0.4, 2.8];
const yExtend = [20, -30];

const xScale = d3.scaleLinear().domain(xExtent).range([0, 500]);
const yScale = d3.scaleLinear().domain(yExtend).range([0, 500]);

const xAxis = d3.axisBottom(xScale).tickSize(500);
d3.select("svg")
  .append("g")
  .attr("id", "xAxisG")
  // .attr("transform", "translate(0,499)")
  .call(xAxis);

const yAxis = d3.axisRight(yScale).tickSize(500);
d3.select("svg")
  .append("g")
  .attr("id", "yAxisG")
  .call(yAxis);

d3.select("svg")
  .selectAll("circle")
  .data(sakeData)
  .enter()
  .append("circle")
  .attr("r", 5)
  .attr("cx", (d) => xScale(d.Acidity))
  .attr("cy", (d) => yScale(d.NihonShudo));
