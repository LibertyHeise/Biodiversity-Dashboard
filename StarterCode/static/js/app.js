var filter = d3.select("#selDataset");



renderProcess();

function renderProcess(){
d3.html('');
d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var metadata = data.metadata;
    var valdrop = samples.map(item => item.id)
    .filter ((value,index,self) => self.indexOf (value)




}