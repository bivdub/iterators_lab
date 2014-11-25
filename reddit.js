var reddit = require("./data.json")

var array = reddit["data"].children
// console.log(reddit["data"]);
console.log(array.length)

array.forEach(function(element) {
	console.log(element.data.title);
})

var linkArray = array.map(function(e) {
	return (e.data.url);
})

console.log(linkArray);

var selfArray = array.filter(function(e) {
	return e.data.selftext !== "";
}).map(function(e) {
	return (e.data.url);
})

console.log(selfArray, selfArray.length);

var score = array.reduce(function(x, y) {
	return (x + y.data.score);
}, 0)

console.log(score);