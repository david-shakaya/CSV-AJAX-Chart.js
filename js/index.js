// Имитирую обращение к бекенду, как бы обращаюсь с помощю fetch к файлу ZonAnn.Ts+dSST
// для преобразования файла с форматом CSV используем метод text()

//  Что бы распарсить CSV Удобно будем использовать библиотеку https://www.papaparse.com/

//Используем конфигурацию папы и метод хедер тру, что бы разбить файл на масив обьектов, что очень удобно.
/* 
* header: true - Делает первую строку файла ключем обьекта а все последующие свойствами ключей
 */
var ctx = document.getElementById('myChart').getContext('2d');


const config = {
    header: true
}

fetch('./ZonAnn.Ts+dSST.csv')
    .then(res => res.text())
    .then(data => {
        const parsedData = Papa.parse(data, config).data
        const year = parsedData.map((entry) => entry.Year)
        const glob = parsedData.map((entry) => +entry.Glob + 14) //+14 это средн. темпер на планете за год
        
        const sHem = parsedData.map((entry) => +entry.SHem + 14)

        // console.log(Glob);

        new Chart(ctx, {
    type: 'line',
    data: {
        labels: year,
        datasets: [{
            label: '# Средн. температура на планете',
            data: glob,
            backgroundColor: [
                'transparent',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        },
            //  ПЛЮС еще один график там же
        {
            label: '# Средн. температура на СЕВЕРНОМ ПОЛУШАРИИ',  
            data: sHem,
            
            backgroundColor: [
                'transparent',
            ],
            borderColor: [
                'green',
            ],
            borderWidth: 1
            }]
        
            },
     options: {
        scales: {
            yAxes: [{
                ticks: {
                    // Добавляет Знак цельсия по вертикальной оси
                    callback: function(value) {
                        return '℃' + value;
                    }
                }
            }]
        }
    }

        });

    }) 

    


//Теперь что бы график отрисоать используем библиотеку https://www.chartjs.org/


