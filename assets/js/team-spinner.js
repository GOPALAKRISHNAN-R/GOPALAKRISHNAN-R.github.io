var selectedTeamMembers = [];

var count = 0;

$(function() {
    $.getJSON("/office-activity/team.json",

        function(data) {
            $.each(data, function(key, value) {
                if (value.active) {
                    selectedTeamMembers.push(value.name);
                }
            });
            result(selectedTeamMembers)
        });

    function result(selectedTeamMembers) {
        $("#spin").click(function() {
            $('.image').toggleClass('image-active');
            window.setTimeout(function() {
                resultDisplay(selectedTeamMembers);
            }, 3000);
        });
    }

    function resultDisplay(selectedTeamMembers) {
        var displayResult = '';
        var item = selectedTeamMembers[Math.floor(Math.random() * selectedTeamMembers.length)];
        displayResult += '<div class="callout">'
        displayResult += '<div class="callout-header">Congratulations</div>'
        displayResult += '<span class="closebtn" onclick="this.parentElement.style.display=`none`;location.reload();">×</span>'
        displayResult += '<div class="callout-container">'
        displayResult += '<p id="result"></p>'
        displayResult += '<p>You got selected!!</p>'
        displayResult += ' </div>'
        displayResult += '</div>'
        $('#winner-result').append(displayResult);
        $("#result").html(item);
    }
});


var padding = { top: 20, right: 40, bottom: 0, left: 0 },
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top - padding.bottom,
    r = Math.min(w, h) / 2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category20(); //category20c()
//randomNumbers = getRandomNumbers();
//http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results
var data = [
    { "label": "", "value": 1, "question": "What CSS property is used for specifying the area between the content and its border?" }, // padding
    { "label": "", "value": 2, "question": "What CSS property is used for changing the font?" }, //font-family
    { "label": "", "value": 3, "question": "What CSS property is used for changing the color of text?" }, //color
    { "label": "", "value": 4, "question": "What CSS property is used for changing the boldness of text?" }, //font-weight
    { "label": "", "value": 5, "question": "What CSS property is used for changing the size of text?" }, //font-size
    { "label": "", "value": 6, "question": "What CSS property is used for changing the background color of a box?" }, //background-color
    { "label": "", "value": 7, "question": "Which word is used for specifying an HTML tag that is inside another tag?" }
];
var svg = d3.select('#chart')
    .append("svg")
    .data([data])
    .attr("width", w + padding.left + padding.right)
    .attr("height", h + padding.top + padding.bottom);
var container = svg.append("g")
    .attr("class", "chartholder")
    .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");
var vis = container
    .append("g");
var pie = d3.layout.pie().sort(null).value(function(d) { return 1; });
// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);
// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice")
    .data(pie)
    .enter()
    .append("g")
    .attr("class", "slice");

arcs.append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", function(d) { return arc(d); });

function spin(d) {

    container.on("click", null);
    if (oldpick.length == data.length) {
        container.on("click", null);
        return;
    }
    var ps = 360 / data.length,
        pieslice = Math.round(1440 / data.length),
        rng = Math.floor((Math.random() * 1440) + 360);

    rotation = (Math.round(rng / ps) * ps);

    picked = Math.round(data.length - (rotation % 360) / ps);
    picked = picked >= data.length ? (picked % data.length) : picked;
    if (oldpick.indexOf(picked) !== -1) {
        d3.select(this).call(spin);
        return;
    } else {
        oldpick.push(picked);
    }
    rotation += 90 - Math.round(ps / 2);
    vis.transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", function() {
            oldrotation = rotation;

            /* Comment the below line for restrict spin to sngle time */
            container.on("click", spin);
        });
}
//make arrow
svg.append("g")
    .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h / 2) + padding.top) + ")")
    .append("path")
    .attr("d", "M-" + (r * .15) + ",0L0," + (r * .05) + "L0,-" + (r * .05) + "Z")
    .style({ "fill": "black" });
//draw spin circle
container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 60)
    .style({ "fill": "white", "cursor": "pointer" });
//spin text
container.append("text")
    .attr("x", 0)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("SPIN")
    .attr("onclick","spin()")
    .attr("id","spin")
    .style({ "font-weight": "bold", "font-size": "30px", "cursor": "pointer" });

function rotTween(to) {
    var i = d3.interpolate(oldrotation % 360, rotation);
    return function(t) {
        return "rotate(" + i(t) + ")";
    };
}
