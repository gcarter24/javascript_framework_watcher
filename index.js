/* global Chart, axios */
let one = "https://api.github.com/repos/emberjs/ember.js";
let two = "https://api.github.com/repos/angular/angular.js";
let three = "https://api.github.com/repos/vuejs/vue";
let four = "https://api.github.com/repos/facebook/react";
let five = "https://api.github.com/repos/sveltejs/svelte";

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);
const requestFour = axios.get(four);
const requestFive = axios.get(five);

axios
  .all([requestOne, requestTwo, requestThree, requestFour, requestFive])
  .then(
    axios.spread((...responses) => {
      let responseOne = responses[0];
      let responseTwo = responses[1];
      let responesThree = responses[2];
      let responesFour = responses[3];
      let responesFive = responses[4];
      // handle success

      responseOne = responses[0].data;
      // Ember
      responseTwo = responses[1].data;
      // Angular
      responesThree = responses[2].data;
      // Vue.js
      responesFour = responses[3].data;
      // React
      responesFive = responses[4].data;
      // Svelte

      var ctx = document.getElementById("myChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Stars", "Watchers", "Forks"],
          datasets: [
            {
              label: "EmberJS",
              data: [responseOne.subscribers_count, responseOne.watchers, responseOne.forks],
              backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 99, 132, 1)", "rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
            {
              label: "Angular",
              data: [responseTwo.subscribers_count, responseTwo.watchers, responseTwo.forks],
              backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(54, 162, 235, 0.2)"],
              borderColor: ["rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
            {
              label: "VueJS",
              data: [responesThree.subscribers_count, responesThree.watchers, responesThree.forks],
              backgroundColor: ["rgba(255, 206, 86, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(255, 206, 86, 0.2)"],
              borderColor: ["rgba(255, 206, 86, 1)", "rgba(255, 206, 86, 1)", "rgba(255, 206, 86, 1)"],
              borderWidth: 1,
            },
            {
              label: "React",
              data: [responesFour.subscribers_count, responesFour.watchers, responesFour.forks],
              backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(75, 192, 192, 0.2)"],
              borderColor: ["rgba(75, 192, 192, 1)", "rgba(75, 192, 192, 1)", "rgba(75, 192, 192, 1)"],
              borderWidth: 1,
            },
            {
              label: "Svelte",
              data: [responesFive.subscribers_count, responesFive.watchers, responesFive.forks],
              backgroundColor: ["rgba(153, 102, 255, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(153, 102, 255, 0.2)"],
              borderColor: ["rgba(153, 102, 255, 1)", "rgba(153, 102, 255, 1)", "rgba(153, 102, 255, 1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    })
  )
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
