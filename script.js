let form = document.querySelector("form");
let pp = document.querySelector("#pp"); //purchase price slider
let dp = document.querySelector("#dp"); //down payment slider
let rt = document.querySelector("#rt"); // repay time slider
let ir = document.querySelector("#ir"); //interest rate slider
let estimate = document.querySelector("#est"); //estimated monthly payment shown
let button = document.querySelector("button");
let la = 0; //loan amount
let est; //montly payment
let pprice = 0; //purchase price
let down = 0; //downpayment
let time; //repayment time
let rate = 0; //interest rate
let mortgage = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

button.addEventListener("click", () => {
  document.querySelector("#loanAmount").innerHTML = `$${la}`;
  getMonthly();
});

pp.oninput=()=>
{
  pprice = parseInt(pp.value);
  document.querySelector("#price").innerHTML = `$${pprice}`;
  getLoanAmount();
  return pprice;
};
dp.oninput=()=>
{
  down = parseInt(dp.value);
  document.querySelector("#dpayment").innerHTML = `$${down}`;
  getLoanAmount();
  if (pprice != undefined) return down;
};
rt.oninput=()=>
{
  time = parseInt(rt.value);
  document.querySelector("#rtime").innerHTML = `${time} years`;
  return time;
};
ir.oninput=()=>
{
  rate = parseInt(ir.value) * 0.01;
  document.querySelector("#irate").innerHTML = `${Math.round(rate * 100)}%`;
  return rate;
};
function getLoanAmount() 
{
  la=pprice-down;
  return la;
}
function getMonthly() 
{
  mortgage=Math.ceil(
    la *
      [
        ((rate / 12) * (1 + rate / 12) ** (time * 12)) /
          ((1 + rate / 12) ** (time * 12) - 1),
      ]
  );
  document.querySelector("#est").innerHTML = `$${mortgage}`;
  return mortgage;
}