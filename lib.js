function createTable() {
    table = '<table id="edt">';

    /* The days row */
    table += '<tr id="days"><th></th>';
    for (let day in timetable.days) {
        table += '<th colspan="2">'+timetable.days[day]+'</th>';
    }
    table += '</tr>';

    /* The rows for each hour */
    for (let hour in timetable.hours) {
        /* print the name of the hour */
        table += '<tr id="hour'+hour+'">';
        table += '<th>'+timetable.hours[hour]+'</th>';

        /* then the courses per day */
        for (let day in timetable.days) {
            table += '<td colspan="2" id="hour'+hour+timetable.days[day]+'" data-toggle="modal" data-target="modal'+hour+timetable.days[day]+'"></td>';
        }
        table += '</tr>';
    }

    table += '</table>';

    /* display the table */
    document.getElementById("maindiv").innerHTML = table;
}

function fillTable() {
    for (let course in courses) {
        for (let theClass in courses[course].classes) {
            var theCell = document.getElementById('hour'+(courses[course].classes[theClass].hour-1).toString()+timetable.days[courses[course].classes[theClass].day-1]);

            /* Set the cell to the right color + fill in name of the course */
            theCell.innerHTML += theClass;
            if (courses[course].color != undefined) {
                theCell.style.backgroundColor = courses[course].color;
            }

            /* Setup the modal for the course */
            var content='';
            content += '<h1>'+course+'</h1>';
            /* Informations */
            if (courses[course].infos != undefined) {
                content += courses[course].infos;
            }
            /* Links for the course */
            if (courses[course].links != undefined) {
                content += '<h3>Useful links for this course :</h3>';
                for (let link in courses[course].links) {
                    content += '<p>'+courses[course].links[link].name+' : <a target="_blank" href="'+courses[course].links[link].url+'">'+courses[course].links[link].url+'</a>';
                }
            }
            /* Links for this particular class */
            if (courses[course].classes[theClass].links != undefined) {
                content += '<h3>Useful links for this particular class :</h3>';
                for (let link in courses[course].classes[theClass].links) {
                    content += '<p>'+courses[course].classes[theClass].links[link].name+' : <a target="_blank" href="'+courses[course].classes[theClass].links[link].url+'">'+courses[course].classes[theClass].links[link].url+'</a>';
                }
            }
            document.getElementById('modaldiv').innerHTML += '<div id="modal'+(courses[course].classes[theClass].hour-1).toString()+timetable.days[courses[course].classes[theClass].day-1]+'" class="modal"><div class="modal-window"><span class="close" data-dismiss="modal">&times;</span>'+content+'</div></div>';
        }
    }
}

function main() {
    createTable();
    fillTable();
}
