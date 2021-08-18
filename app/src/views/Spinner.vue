<template>
  <div id="spinner">
    <!-- Wheel -->
    <div id="chart-main">
      <div id="chart"></div>
    </div>
    <!-- Overlay -->
    <div id="overlay">
      <div id="image">
        <img src="../assets/img/congratulations.jpg" alt class="img-fluid" />
      </div>
      <div id="close-btn">
        <i class="far fa-times-circle"></i>
      </div>
      <!-- Spinner result -->
      <div id="text">
        <p class="output"></p>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "Spinner",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    getEmployeesData() {
      const teamsList = require("../../public/teams_list.json");
      const employees = [];
      teamsList.filter((team) => {
        if (team.active) {
          employees.push(team.name);
        }
      });
      return employees;
    },
  },
  mounted() {
    var padding = { top: 20, right: 40, bottom: 0, left: 0 },
      w = 700 - padding.left - padding.right,
      h = 700 - padding.top - padding.bottom,
      r = Math.min(w, h) / 2,
      rotation = 0,
      oldrotation = 0,
      picked = 100000,
      color = d3.scale.category20();
    var data = [
      { value: 1, color: "#1e90ff" },
      { value: 2, color: "#1e2a78" },
      { value: 3, color: "#94fc13" },
      { value: 4, color: "#6900ff" },
      { value: 5, color: "#f9ff21" },
      { value: 6, color: "#ed1d24" },
    ];

    const employees = this.getEmployeesData();
    const selectEmployees = [];

    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("close-btn");

    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
    });

    var svg = d3
      .select("#chart")
      .append("svg")
      .data([data])
      .attr("width", w + padding.left + padding.right)
      .attr("height", h + padding.top + padding.bottom);

    var container = svg
      .append("g")
      .attr("class", "chartholder")
      .attr(
        "transform",
        "translate(" +
          (w / 2 + padding.left) +
          "," +
          (h / 2 + padding.top) +
          ")"
      );

    var vis = container.append("g");

    var pie = d3.layout
      .pie()
      .sort(null)
      .value(function () {
        return 1;
      });

    // declare an arc generator function
    var arc = d3.svg.arc().outerRadius(r);

    // select paths, use arc generator to draw
    var arcs = vis
      .selectAll("g.slice")
      .data(pie)
      .enter()
      .append("g")
      .attr("class", "slice");

    arcs
      .append("path")
      .attr("fill", function (d) {
        return d.data.color;
      })
      .attr("d", function (d) {
        return arc(d);
      });

    // add the text
    arcs
      .append("text")
      .attr("transform", function (d) {
        d.innerRadius = 0;
        d.outerRadius = r;
        d.angle = (d.startAngle + d.endAngle) / 2;
        return (
          "rotate(" +
          ((d.angle * 180) / Math.PI - 90) +
          ")translate(" +
          (d.outerRadius - 100) +
          ")"
        );
      })
      .attr("text-anchor", "end");

    function findEmployee() {
      if (employees.length < 1) {
        employees.push(...selectEmployees);
        selectEmployees.splice(0, selectEmployees.length);
      }
      const index = Math.floor(Math.random() * employees.length);
      const employee = employees[index];
      selectEmployees.push(...employees.splice(index, 1));
      return employee;
    }

    //make arrow
    svg
      .append("g")
      .attr(
        "transform",
        "translate(" +
          (w + padding.left + padding.right) +
          "," +
          (h / 2 + padding.top) +
          ")"
      )
      .append("path")
      .attr("d", "M-" + r * 0.15 + ",0L0," + r * 0.05 + "L0,-" + r * 0.05 + "Z")
      .style({ fill: "#576574" });

    //draw spin circle
    container
      .append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 60)
      .style({ fill: "white", cursor: "pointer" });

    //spin text
    container
      .append("text")
      .attr("x", 0)
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .attr("id", "spin-text")
      .text("SPIN")
      .style({ "font-weight": "bold", "font-size": "30px", cursor: "pointer" });

    function rotTween() {
      var i = d3.interpolate(oldrotation % 360, rotation);
      return function (t) {
        return "rotate(" + i(t) + ")";
      };
    }

    const circle = document.querySelectorAll("circle");
    const circleTxt = document.getElementById("spin-text");
    circle[0].addEventListener("click", spin);
    circleTxt.addEventListener("click", spin);

    function spin() {
      circle[0].removeEventListener("click", spin);
      circle[0].addEventListener("click", null);

      circleTxt.removeEventListener("click", spin);
      circleTxt.addEventListener("click", null);

      var ps = 360 / data.length,
        rng = Math.floor(Math.random() * 1440 + 360);

      rotation = Math.round(rng / ps) * ps;

      picked = Math.round(data.length - (rotation % 360) / ps);
      picked = picked >= data.length ? picked % data.length : picked;

      rotation += 90 - Math.round(ps / 2);

      vis
        .transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", function () {
          // Add the winner text and open the modal
          const employee = findEmployee();
          d3.select("#text .output").html(
            `${employee} <br> you got selected!!`
          );
          //   executeModalLink.click();
          overlay.style.display = "block";
          oldrotation = rotation;
          circle[0].addEventListener("click", spin);
          circleTxt.addEventListener("click", spin);
        });
    }
  },
};
</script>

<style scoped>
#spinner {
  position: relative;
  margin-top: 1rem;
  padding-top: 2rem;
  background: linear-gradient(-45deg, #a24bcf, #3498db, #4bc5cf);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #6900ff,
      0 0 70px #6900ff, 0 0 80px #6900ff, 0 0 100px #6900ff, 0 0 150px #6900ff;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #6900ff,
      0 0 35px #6900ff, 0 0 40px #6900ff, 0 0 50px #6900ff, 0 0 75px #6900ff;
  }
}

#chart-main {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff8f2;
  z-index: 99;
  transition: display 0.5s linear;
}

#image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

#text {
  position: absolute;
  top: 45%;
  left: 59%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

#text p {
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: bold;
  color: #073f4c;
  text-align: center;
}

#close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
}

#close-btn i {
  color: #073f4c;
  font-size: 2.5rem;
}

#spin-text:hover {
  cursor: pointer;
}

@media (max-width: 768px) {
  #chart-main {
    height: 90vh;
    width: 110%;
  }
  #text {
    top: 49%;
    left: 55%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  #text p {
    font-size: 1rem;
  }
  #image {
    width: 100%;
  }
  #spinner {
    overflow: hidden;
  }
}
</style>