function getMenu() {

    // fetching all the data from the json file 

    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
       
        // display items to user 

        console.log(data);
      })
      .catch(error => {
        // handling error
        console.error('Error:', error);
      });
  }

  // taking the order from user 

  function TakeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        const burgers = ['Burger 1', 'Burger 2', 'Burger 3'];
        const order = {
          burgers: burgers
        };
        resolve(order);
      }, 2500);
    });
  }
 
  // making the order 

  function orderPrep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }

  function payOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }

  // showing alert message
  
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }

  // Calling all the function in order 

  getMenu();
  TakeOrder()
    .then(order => {
      console.log('Order:', order);
      return orderPrep();
    })
    .then(status => {
      console.log('Order Status:', status);
      return payOrder();
    })
    .then(payment => {
      console.log('Payment:', payment);
      thankyouFnc();
    })
    .catch(error => {
      // handling error
      console.error('Error:', error);
    });