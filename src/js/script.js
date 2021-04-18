'use strict';

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('dayBudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('month-value'),
    dayValue = document.querySelector('day-value');

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses = function() {
    for (let i = 0; i < 2; i++ ) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
          b = prompt("Во сколько обойдется?", '');
  
          if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && 
          a.length < 50) {
              console.log("done");
              appData.expenses[a] = b;
          } else {
              console.log ("bad result");
              i--;
          }
    }
  },
  detectDayBudget = function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
  },
  detectLevel = function() {
    if(appData.MoneyPerDay < 100) {
      console.log("Минимайльный уровень заработка");   
    } else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000) {
      console.log("Средний уровень заработка");
    } else if (appData.MoneyPerDay > 2000) {
      console.log("Большой уровень заработка");
    }
  },
  checkSavings = function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
          percent = +prompt("Под какой процент?");
  
      appData.monthIncome = save/100/12*percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses = function() {
    for (let i = 0; i < 2; i++ ) {
      let questionOptExpenses = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = questionOptExpenses;
      console.log(appData.optionalExpenses);
    }
  },
  chooseIncome = function() {
   let items = prompt("Что принисет дополнительный доход? (Перечислите через запятую)", '');
   if ( (typeof(items))=== 'string' || (typeof(items)) != null || (typeof(items)) != '') {
     console.log("Вы ввели некорректные данные или не ввели их вовсе");
   } else {
     appData.income = time.split(", ");
     appData.income = push(prompt("Может что-то еще?"));
     appData.income = sort();
   }

   appData.income.forEach (function (itemmassive, i) {
    alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
   });

  } 
  
};

for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

// While

// let i = 0

// while (i < 2) {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
  //      b = prompt("Во сколько обойдется?", '');

    //    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && 
      //  a.length < 50) {
        //    console.log("done");
          //  appData.expenses[a] = b;
       // } else {
         //   console.log ("bad result");
           // i--;
        //}
   //i++
//}

// DO...White

// let i = 0;
//do {
    //    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
  //      b = prompt("Во сколько обойдется?", '');

    //    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && 
      //  a.length < 50) {
        //    console.log("done");
          //  appData.expenses[a] = b;
       // } else {
         //   console.log ("bad result");
           // i--;
        //}
    //i++;
//}
//while (i < 2);