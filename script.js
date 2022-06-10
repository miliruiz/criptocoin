const fetchDataBtn = document.querySelector('#fetchdata')
const result = document.querySelector('#result')

// gets data from API and sets the content of #result div
const getData = function() {
  fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100')
    .then(response => response.json())
    .then(data => {
      var resultado = data.Data.Data
      var precios = resultado.map(x => x.open)
      const ctx = document.getElementById('myChart').getContext('2d');
     const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: precios,
        datasets: [{
            label: 'precios',
            data: precios,
            borderWidth: 1,
            tension: 0.5,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
    })
    .catch(error => console.log(error))
}

// add event listener for #fetchdata button
fetchDataBtn.addEventListener('click', getData)


const item = document.querySelector('#fetchdata')