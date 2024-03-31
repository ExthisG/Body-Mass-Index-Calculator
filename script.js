let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let today = new Date();

    let todayDate = today.getDate();
    let todayMonth = today.getMonth() + 1;
    let todayYear = today.getFullYear();

    let dayResult, monthResult, yearResult;

    yearResult = todayYear - birthYear;

    if (todayMonth >= birthMonth) {
        monthResult = todayMonth - birthMonth;
    }
    else {
        yearResult--;
        monthResult = 12 + todayMonth - birthMonth;
    }

    if (todayDate >= birthDay) {
        dayResult = todayDate - birthDay;
    }
    else  {
        monthResult--;
        dayResult = getDaysInMonth(birthYear, birthMonth) + todayDate - birthDay;
    }

    if (monthResult < 0) {
        monthResult = 11;
        yearResult--;
    }

    result.innerHTML = `You are <span>${yearResult}</span> years, <span>${monthResult}</span> months, <span>${dayResult}</span> days`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}