
const getData = function (coin) {
    fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=' + coin + '&tsym=USD&limit=30')
        .then(response => response.json())
        .then(data => {
            var resultado = data.Data.Data
            var precios = resultado.map(x => x.open)
            canvas = document.getElementById('myChart');
            ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let chartStatus = Chart.getChart("myChart");
            if (chartStatus != undefined) {
                chartStatus.destroy();
            }
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: precios,
                    datasets: [{
                        label: 'precios',
                        data: precios,
                        borderWidth: 3,
                        tension: 0.6,
                        borderColor: 'rgb(46, 178, 93)',
                        pointStyle: 'line',
                        borderDashOffSets: 0,
                    }
                ]
                },
                options: {

                    scales: {
                        y: {
                            beginAtZero: true
                        }
                        
                    }
                }
            }
            
            
            
            );
        })
        .catch(error => console.log(error))
}


let items = document
    .getElementById("criptos")
    .querySelectorAll('li');

let consulta = document.getElementById('consultas');

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function (i) { getData(i.srcElement.id)});
    items[i].addEventListener("click", consultas);
}


function consultas(i) {
    consulta.innerHTML = `<li>Has consultado por ${i.srcElement.id} </li>`;
}
