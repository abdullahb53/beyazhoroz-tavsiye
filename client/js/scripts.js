/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

{/* <canvas id="myPieChart" width="100%" height="50"></canvas> */}

function AddColorData(chart){
    let total = chart.data.labels.length;
    var array = getColors(total);
    while (total >= 0) {
       chart.data.datasets[0].backgroundColor.push(array[total-1])
        
        total--;
    };
    chart.update();
}

function AddData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
  }

  function RemoveData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function RemoveChartArray(chart) {

    let total = chart.data.labels.length;

    while (total >= 0) {
        chart.data.labels.pop();
        chart.data.datasets[0].data.pop();
        total--;
    }

    chart.update();
}


document.getElementById("mySpinner").style.display = 'none'; 
async function getir(){



    // console.log(formType.value.toLocaleUpperCase()); //Form dosyasına girilen değerin upper case dönüşümünden sonraki halini yazdırır.
    let apiSehirBilgisi;
    apiSehirBilgisi = formType.value.toLocaleUpperCase()
    if(apiSehirBilgisi.trim() != ""){

        RemoveChartArray(myPolarAreaChart);
        RemoveChartArray(myPieChart);
        RemoveChartArray(myPieChartCiftci);

        const requestOptions = {
            method: "GET",
        };
         document.getElementById("mySpinner").style.display = 'inline'; 
      
        const response = await fetch("https://beyazhoroz.herokuapp.com/api/TAVSIYE/"+apiSehirBilgisi+"/", requestOptions);
        const data = await response.json();
        //this.postId = data.id;
        // console.log(data.data.data[0].enlem);
        // console.log(data.data.data[0].boylam);
        // console.log("asda");
        //iterator //console.log(data.data.data.length)
       
        document.getElementById("gettingSehirP").textContent = apiSehirBilgisi.toLocaleUpperCase();

            // const mahsullerLabelArray = [];
            // const mahsulUretimMiktariArray = [];
            // var baslik = apiSehirBilgisi;

                await myPolarAreaChart.reset();
                await myPieChart.reset();
                await myPieChartCiftci.reset();
                for ( i =0;i<data.data.data.length;i++){
                
                    // console.log(
                    // data.data.data[i].sehir,
                    // data.data.data[i].urun,
                    // data.data.data[i].ciftci_sayisi,
                    // data.data.data[i].uretim_alani,
                    // data.data.data[i].uretim_miktari);
                    if(data.data.data[i].ciftci_sayisi == undefined){data.data.data[i].ciftci_sayisi = 1;}
                    if(data.data.data[i].uretim_alani == undefined){data.data.data[i].uretim_alani = 1;}
                    if(data.data.data[i].uretim_miktari == undefined){data.data.data[i].uretim_miktari = 1;}
    
                    // mahsullerLabelArray[i] = data.data.data[i].urun;
                    // mahsulUretimMiktariArray[i] = data.data.data[i].uretim_miktari;
                    AddData(myPolarAreaChart,data.data.data[i].urun,data.data.data[i].uretim_alani);
                    AddData(myPieChart,data.data.data[i].urun,data.data.data[i].uretim_miktari);
                    AddData(myPieChartCiftci,data.data.data[i].urun,data.data.data[i].ciftci_sayisi);
                   
                }
                AddColorData(myPieChart);
                AddColorData(myPolarAreaChart);
                AddColorData(myPieChartCiftci);

            
          

           
           
           

            // AddData(myPolarAreaChart,mahsullerLabelArray,mahsulUretimMiktariArray);
            // AddData(myPieChart,mahsullerLabelArray,mahsulUretimMiktariArray);
    }
 setTimeout(() => {
     document.getElementById("mySpinner").style.display = 'none'; 
}, 1789);



}
