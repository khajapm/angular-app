import { Component, OnInit, Input, OnChanges, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit, OnChanges {

  @Input() private chartdata: Array<any>;

  constructor(private chart: ElementRef) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if (this.chart) {
      this.updateChart();
    }
  }

  updateChart(){
    let data = [10, 20, 100];

    let width = 960,
        height = 500,
        radius = Math.min(width, height) / 2;

    let color = d3.scaleOrdinal()
        .range(["#98abc5", "#8a89a6", "#7b6888"]);

    let arc = d3.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    let labelArc = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    let pie = d3.pie()
        .sort(null)
        .value(function(d) { return d; });

    d3.select("body").selectAll("div.pie-chart").html('');

    let svg = d3.select("body").selectAll("div.pie-chart").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("style","display:block;margin:0 auto")
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      let g = svg.selectAll(".arc")
          .data(pie(data))
        .enter().append("g")
          .attr("class", "arc");

      g.append("path")
          .attr("d", arc)
          .style("fill", function(d) { return color(d.data); });

      g.append("text")
          .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
          .attr("dy", ".35em")
          .text(function(d) { return d.data; });
  }

}
