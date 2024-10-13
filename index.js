

const coffees = ['Latte', 'Cappuccino', 'Americano'];

const prices = [1.5, 1, 2];

const coffeName = prompt(`Поиск по названию:' ${coffees}`).trim()
  


const index = coffees.findIndex(coffee => coffee.toLowerCase() === coffeName.toLowerCase())

const updatedPrices = prices.map(price => price + 0.5)

updatedPrices.forEach((price, index) => {
    alert(`Кофе ${coffees[index]} сейчас стоит ${updatedPrices[index]} евро`)
    })     
    
    const question = confirm('Вы согласны сделать заказ?') 
    if (question === true) {
        alert(`Держите ваш любимый кофе ${coffees[index]}. Он ${index + 1} -й по популярности в нашей кофейне.`)
    } 
      else {
        alert(`Выберете другой кофе ${coffees} в нашей кофейне.`)
    } 
    



