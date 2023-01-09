var filter = d3.select("#selDataset");



renderProcess();

function renderProcess(){
d3.html('');
d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var metadata = data.metadata;
    var valdrop = samples.map(item => item.id)
    .filter ((value,index,self) => self.indexOf (value) === index);

//creating the dropdown menu

valdrop.forEach(function(values) {
    filter.append('option').text(values);
});

//samples based on input
var resultArray = samples.filter(sampleObj => sampleObj.id ==samp);
console.log(resultArray);





}