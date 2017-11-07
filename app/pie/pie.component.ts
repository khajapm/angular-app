import { Component, Input, OnChanges, ElementRef } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
declare var $:any;
declare var spectrum:any;
import * as d3 from 'd3';
//import * as spectrum from 'spectrum';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnChanges {

  @Input() private chartdata;
  private chartInfo: Array<any> = [];
  private originalChartInfo: Array<any> = [];
  constructor(private chart: ElementRef, private _http: Http) { }

  ngAfterContentInit(){
    
  }

  ngOnChanges(){
    this.processChartData();
  }

  processChartData(){
    if (this.chart) {
      this.chartInfo = this.chartInfo.length >0 ? this.chartInfo : this.chartdata.data;
      this.chartInfo.forEach(obj=>{
        obj['editable'] = false;
        obj['isNew'] = false;
      });
      this.originalChartInfo = JSON.parse(JSON.stringify(this.chartInfo));
      this.updateChart(this.chartdata.type);
    }
  }

  addData() {
      let id = parseInt(this.chartInfo[this.chartInfo.length-1].id, 10);
      this.chartInfo.push({id:id+1,data:null,color:''});
      let index = this.chartInfo.length-1;
      this.chartInfo[index]['editable'] = true;
      this.chartInfo[index]['isNew'] = true;
      
      setTimeout(() => {
        $(".basic" + index).spectrum({
             color: this.chartInfo[index].color,
             change: (color) => {
                this.chartInfo[index].color = color.toHexString();
             }
           });
        })
  }
  
  editData(data, index){
    data.editable = true;
    setTimeout(() => {
        $(".basic" + index).spectrum({
            color: data.color,
            change: function(color) {
                data.color = color.toHexString();
            }
        });
    })
  }

  //need to refactor later - remove it from side nav component
  getAllChartData(){
    this._http.get('/pie')
    .map((response: Response) => <any>response.json())
    .subscribe((data) => {
        this.chartInfo = data;
        this.processChartData();
    });
  }

  saveData(data){
    this._http.post('/addPie', data)
    .subscribe((res) => {
        data.editable = false;
        this.getAllChartData();
    })
  }

  deleteData(data, index){
    if(data.isNew){
        this.chartInfo.splice(index,1);
    }else{
        this._http.post('/deletePie', data)
        .subscribe((res) => {
            this.getAllChartData();
        })
    }
  }

  retainData(data,index){
    data.editable = false;
    if(data.isNew){
       this.chartInfo.splice(index,1);
    }else{
       this.chartInfo[index] = JSON.parse(JSON.stringify(this.originalChartInfo[index]));
    }
  }

  paintPie(){
    
    let w = 400, h = 400, r = h/2, data = [], colors = [];
    this.chartInfo.forEach(obj=>{
        data.push({value:obj.data});
        colors.push(obj.color);
    });

    d3.select("body").selectAll("div.pie-chart").html('');
    
    let vis = d3.select("body").selectAll("div.pie-chart").append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");

    let pie = d3.layout.pie().value(function(d){return d.value;});

    let arc = d3.svg.arc().outerRadius(r);

    let arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
    
    arcs.append("svg:path")
        .attr("fill", function(d, i){return colors[i];})
        .transition().delay(function(d,i) {return i * 300 }).duration(500)
        .attrTween("d", function (b) {
            b.innerRadius = 0;
            let i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
            return function(t) { return arc(i(t)); };
        })
        //.attr("d", function (d) {return arc(d)});

    arcs.append("svg:text")
        .attr("transform", function(d){
            d.innerRadius = 100;
            d.outerRadius = r;
            return "translate(" + arc.centroid(d) + ")";}
        )
        .attr("text-anchor", "middle")
        .text( function(d, i) {return data[i].value});
  }
  
  paintDonut(){

    let width = 368, height = 364, radius = Math.min(width, height) / 2, data = [], color = [];
    this.chartInfo.forEach(obj=>{
        data.push({value:obj.data});
        color.push(obj.color);
    });
    
    d3.select("body").selectAll("div.pie-chart").html('');

    let vis = d3.select(".pie-chart")
                .append("svg")
                .data([data])
                .attr("width", width)
                .attr("height", height)
                .append("svg:g")
                .attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');
 
    let arc = d3.svg.arc().innerRadius(79).outerRadius(radius);
 
    let pie = d3.layout.pie().value(function(d) { return d.value; });
 
    let arcs = vis.selectAll("g.slice")
                    .data(pie)
       				.enter()
            		.append("svg:g")
                    .attr("class", "slice");
 
    arcs.append("svg:path")
            .attr("fill", function(d, i) { return color[i]; } )
            .transition().delay(function(d,i) {return i * 500 }).duration(500)
            .attrTween('d',function(d){
            var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
            return function(t){
                d.endAngle = i(t);
                return arc(d);
              }
           })

    arcs.append("svg:text")
            .attr("fill", "#fff")
            .attr("transform", function(d) {
            d.innerRadius = 0;
            d.outerRadius = radius;
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr("text-anchor", "middle")
        .text(function(d, i) { return data[i].value; });

  }

  updateChart(type){
    if(type === 'pie'){
      this.paintPie();
    }else if(type === 'donut'){
      this.paintDonut();
    }
  }

}
