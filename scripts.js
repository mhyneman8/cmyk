// when user scrolls down, hide the navbar, show navbar when user scrolls up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("#navigation").style.top = "0";
    } else {
        document.querySelector("#navigation").style.top = "-50%";
    }
    prevScrollpos = currentScrollPos;
}

//function section in Javascript and Jquery...
function myData() {
    // retrun;
    return;
  }
  
  function show() {
    document.getElementById('anotherFunction').classList.toggle('Active');
  }

// modal show
function showModal(id) {
    document.getElementById(id).style.display="block";
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
}

// modal close
function closeModal(id) {
    document.getElementById(id).style.display="none";
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

// small menu

function closeAnimation() {
    a = document.querySelector('.row1');
    b = document.querySelector('.row2');
    c = document.querySelector('.row3'); 
    d = document.querySelector('#hamburger');
    menu = document.querySelector('#menu');
    // let item = document.querySelectorAll('menu-item');

    function toggleAnimation() {
        a.classList.toggle('rotateRight');
        b.classList.toggle('transparent');
        c.classList.toggle('rotateLeft');
        menu.classList.toggle('move'); 
        // item.classList.toggle('slide')
    };

    d.addEventListener('click', function() {
        toggleAnimation();
    });
} closeAnimation();
  

document.addEventListener("DOMContentLoaded", function () {
    if (document.body.className === 'donuts-page') {
        graph();
    }
})

function graph() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(drawChart2);
    google.charts.setOnLoadCallback(drawChart3);
    google.charts.setOnLoadCallback(drawChart4);
    google.charts.setOnLoadCallback(drawChart5);
    google.charts.setOnLoadCallback(drawChart6);
    google.charts.setOnLoadCallback(drawChart7);
    google.charts.setOnLoadCallback(drawChart8);
    google.charts.setOnLoadCallback(drawChart9);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 4]
        ]);
    
        var options = {
            width: '100%',
            height: '100%',
            legend: 'none',
            backgroundColor: 'none',
            chartArea: {width:'100%', height: '100%'},
            colors: ['#f2ebe9', '#de5499', '#264143', '#e99f4c']
        };
    
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }
    
    function drawChart2() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);
        var options = {
            reverseCategories: true,
            pieHole: 0.4,
            width: '100%',
            height: '100%',
            legend: 'none',
            backgroundColor: 'none',
            chartArea: {width:'100%', height: '100%'},
            colors: ['#f2ebe9', '#de5499', '#264143', '#e99f4c']
        };
        var chart2 = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart2.draw(data, options);
    }
    function drawChart3() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);
        var options = {
            width: '100%',
            height: '100%',
            legend: 'none',
            backgroundColor: 'none',
            chartArea: {width:'100%', height: '100%'},
            colors: ['#f2ebe9', '#de5499', '#264143', '#e99f4c']
        };
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
        chart2.draw(data, options);
    }
    function drawChart4() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);
        var options = {
            reverseCategories: true,
            pidHole: 0.8,
            width: '100%',
            height: '100%',
            legend: 'none',
            backgroundColor: 'none',
            chartArea: {width:'100%', height: '100%'},
            colors: ['#f2ebe9', '#de5499', '#264143', '#e99f4c']
        };
        var chart2 = new google.visualization.PieChart(document.getElementById('donutchart2'));
        chart2.draw(data, options);
    }
    function drawChart5() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Sleep',    7]
        ]);
        var options = {
            width: '100%',
            height: '100%',
            legend: 'none',
            backgroundColor: 'none',
            chartArea: {width:'100%', height: '100%'},
            colors: ['#f2ebe9', '#de5499', '#264143', '#e99f4c']
        };
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart3'));
        chart2.draw(data, options);
    }
    function drawChart6() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
        ]);
        var options = {
            reverseCategories: true,
            pieHole: 0.3,
            width: '100%',
            height: '100%',
            legend: 'none',
            backgroundColor: 'none',
            chartArea: {width:'100%', height: '100%'},
            colors: ['#f2ebe9', '#de5499', '#264143', '#e99f4c']
        };
        var chart2 = new google.visualization.PieChart(document.getElementById('donutchart3'));
        chart2.draw(data, options);
    }
    function drawChart7() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);
        var options = {
            width: '100%',
            height: '100%',
            legend: 'none',
            backgroundColor: 'none',
            chartArea: {width:'100%', height: '100%'},
            colors: ['#f2ebe9', '#de5499', '#264143', '#e99f4c']
        };
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart4'));
        chart2.draw(data, options);
    }
    function drawChart8() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ]);
        var options = {
            reverseCategories: true,
            pieHole: 0.5,
            width: '100%',
            height: '100%',
            legend: 'none',
            backgroundColor: 'none',
            chartArea: {width:'100%', height: '100%'},
            colors: ['#f2ebe9', '#de5499', '#264143', '#e99f4c']
        };
        var chart2 = new google.visualization.PieChart(document.getElementById('donutchart4'));
        chart2.draw(data, options);
    }
    function drawChart9() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2]
        ]);
        var options = {
            width: '100%',
            height: '100%',
            legend: 'none',
            backgroundColor: 'none',
            chartArea: {width:'100%', height: '100%'},
            colors: ['#f2ebe9', '#de5499', '#264143', '#e99f4c']
        };
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart5'));
        chart2.draw(data, options);
    }
}

