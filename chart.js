let barChartInstance;
let doughnutChartInstance;

function createBarGraph(ctx){
    if (barChartInstance) {
        barChartInstance.destroy();
    }

    barChartInstance = new Chart(ctx,{
        type:'bar',
        data:{
            labels:['Google','Amazon','Microsoft','Flipkart','Starbucks','Apple'],
            datasets:[
                {
                    label:'Profit in Billions',
                    data:[112,84,114,68,92,119],
                    backgroundColor: '#3546a4',
                    borderWidth: 1
                },
                {
                    label:'Total Revenue in Billions',
                    data:[118,92,128,84,104,134],
                    backgroundColor:'#3e5bff',
                    borderWidth: 1
                }
            ]
        },
        options:{
            scales:{
                y:{
                    beginAtZero: true,
                    ticks:{
                        display:false
                    }
                }
            }
        }
    })
}

function createDoughnutChart(doughnut){
    if (doughnutChartInstance) {
        doughnutChartInstance.destroy()
    }

    const xValues = ['Customers','Marketing','Analyst'];
    const yValues = [62,24,14];
    const barColors = [
        "rgba(63,201,201,0.8)",
        "rgba(63,201,201,0.6)",
        "rgba(63,201,201,0.4)"
    ];

    doughnutChartInstance = new Chart(doughnut,{
        type:'doughnut',
        data:{
            labels:xValues,
            datasets:[
                {
                    data:yValues,
                    backgroundColor: barColors,
                    borderWidth: 0
                }
            ]
        },
        options:{
            title:{
                display:true,
                text:"TARGET"
            }
        }
    })
}


document.addEventListener('DOMContentLoaded',()=>{
    const barGraph = document.getElementById('bargraph');
    const doughnutGraph = document.getElementById('doughnut');

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry =>{
            if (entry.isIntersecting) {
                if (entry.target.id === 'bargraph') {
                    createBarGraph(entry.target);
                }else if(entry.target.id === 'doughnut'){
                    createDoughnutChart(entry.target)
                }
            }
        });
    },{threshold: 0.1})

    observer.observe(barGraph)
    observer.observe(doughnutGraph)
})