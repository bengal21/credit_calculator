const rate = document.getElementById("input1")
const month = document.getElementById("input2")
const amount = document.getElementById("input3")
const calculation = document.getElementById("calculate") 
const payments = document.getElementById('month-payment')
const overpayments = document.getElementById('overpayment')


calculation.onclick = function () {
  // result = (((Number(rate.value)/12)/100)*(1+(Number(rate.value)/12)/100)**Number(month.value)/(1 + (Number(rate.value)/12)/100)**Number(month.value) - 1)*Number(amount.value)
  result = Number(rate.value)/12/100
  result_1 = (1+Number(rate.value)/12/100)**Number(month.value)
  result_2 = ((1+Number(rate.value)/12/100)**Number(month.value)-1)
  result_3 = result_1/result_2
  result_4 = result_3 * result * Number(amount.value)
  result_5 = Number(result_4).toFixed(2)*Number(month.value) - Number(amount.value)
  payments.textContent = Number(result_4).toFixed(2)
  overpayments.textContent = Number(result_5).toFixed(2)
}
