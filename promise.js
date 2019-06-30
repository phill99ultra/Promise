apllyForVise = documents => {
  console.log('Prelucrare documente...');
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve({}) : reject('Visa denied');
      // let visa = {};
      // resolve(visa);
    }, 2000);
  });
  return promise;
};
getVisa = visa => {
  console.log('Visa obtained.');
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(visa), 1000);
  });
};
bookHotel = visa => {
  console.log(visa);
  console.log('Booking room in hotel.');
  return Promise.resolve(visa);
};
buyTicket = booking => {
  console.log('Buy tickets.');
  console.log('Reserved', booking);
};
apllyForVise({})
  .then(getVisa)
  .then(bookHotel)
  .then(buyTicket)
  .catch(error => console.error(error));
