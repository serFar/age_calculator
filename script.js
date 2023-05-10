let inputs = document.querySelectorAll('input');
let labels = document.querySelectorAll('#date label');
let alerts = document.querySelectorAll('#date p');

let btn = document.querySelector('#calc');

let showYear = document.querySelector('#years p');
let showMonth = document.querySelector('#months p');
let showDay = document.querySelector('#days p');


btn.addEventListener('click', () => {
    var birthDate = inputDate();
    console.log(birthDate);
    if (!birthDate) {
        nullInput();
        console.log('vazio')
    } else {
        
        showDate();
    }
});


let inputDate = () => {
    let inputDay = inputs[0].value;
    let inputMonth = inputs[1].value;
    let inputYear = inputs[2].value;
    if((inputDay || inputMonth || inputYear) === ''){
        return null;
    } else {
        let birthDate = new Date(inputYear, (inputMonth - 1), inputDay);
        return birthDate;
    }
    
}

let nullInput = () => {
    for(let i = 0; i < labels.length; i++){
        labels[i].style.color = "hsl(0, 100%, 67%)";
        inputs[i].style.border = "1px solid hsl(0, 100%, 67%)";
        alerts[i].style.display = 'block';
        alerts[i].innerText = 'OBRIGATÓRIO'
    }
    
}

let calculateDate = () => {
    var now = new Date();
    var actualDay = now.getDate();
    var actualMonth = now.getMonth() + 1;
    var actualYear = now.getFullYear();

    var birthday = inputDate();
    var inputDay = birthday.getDate();
    var inputMonth = birthday.getMonth() + 1;
    var inputYear = birthday.getFullYear();

    if (inputDay > actualDay) {
        var ageDay = inputDay - actualDay;
    }
    else {
        var ageDay = actualDay - inputDay;
    }
    if (inputMonth > actualMonth) {
        var ageMonth = inputMonth - actualMonth;
    }
    else {
        var ageMonth = actualMonth - inputMonth;
    }
    var ageYear = actualYear - inputYear;

    var age = [ageDay, ageMonth, ageYear];
    return age;
}

let showDate = () => {
    var date = calculateDate();
    var day = date[0];
    var month = date[1];
    var year = date[2];

    showDay.innerText = day;
    showMonth.innerText = month;
    showYear.innerText = year;
}