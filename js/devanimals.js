var phrazes = [
    "Z-z-z",
    "Трудится",
    "Отдыхает",
    "Учится",
    "Ест",
    "Гуляет"
  ];

var people = [
    ["Саша","🦀"],
    ["Стас","🐝"],
    ["Макар","🦄"],
    ["Саша","🐍"],
    ["Рома","🐳"],
    ["Андрей","🐟"],
    ["Артём","🐲"],
    ["Борис","🐯"],
    ["Илья","🐻"],
    ["Марья","🦊"],
    ["Ира","🐹"],
]
var now = new Date();
var weekday = now.getDay();
var dayhour = now.getHours();
var daystate = ""
var timestate = "";
var i = 0;

daystate = ((weekday>=1) & (weekday<=5)) ? "workday" : "holiday";

if (dayhour>8 & dayhour<20) {
    timestate = "worktime";
} else 
    if (dayhour>=20 & dayhour <=24) {
        timestate = "relaxtime";
    }
    else {
        timestate = "sleeptime";
    }

var shuffled = people.sort(function(){return .5 - Math.random()});
var people_show=shuffled.slice(0,5);

var output_phrazes = new Array(5);
for (i=0; i<5; i++) {
    if (timestate=="sleeptime" & Math.random()>=0.2)
    {
        output_phrazes[i] = phrazes[0];
    }
    else if ((timestate=="relaxtime" || daystate=="holiday") & Math.random()>=0.1)
    {
        output_phrazes[i] = phrazes[Math.floor(Math.random() * 4) + 2];
    }
    else if (Math.random()>=0.2) {
        output_phrazes[i] = phrazes[1];
    }
    else output_phrazes[i] = phrazes[Math.floor(Math.random() * 5) + 1]; 

    $("#dev_name_"+(i+1)).html(people_show[i][0]);
    $("#dev_face_"+(i+1)).html(people_show[i][1]);
    $("#dev_phraze_"+(i+1)).html(output_phrazes[i]);
}

console.log(output_phrazes);
console.log(people_show);
