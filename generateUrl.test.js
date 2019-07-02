const generateUrl = require('./generateUrl')

test('city is Rome, price is 80, country is Italy, paid is try', () => {

  let domain = 'http://tour.com'
  let qsObj = {
    city: 'Rome',
    price: 80,
    country: 'Italy',
    paid: true
  }

  expect(generateUrl(domain, qsObj)).toBe('http://tour.com/?city=Rome&price=80&country=Italy&paid=true')

})

test('city is Venice, price is 60, country is Italy, paid is try, adults are 3, children', () => {

  let domain = 'http://tour.com'
  let qsObj = {
    city: 'Venice',
    price: 60,
    country: 'Italy',
    paid: true,
    adults: 3,
    children: ''
  }

  expect(generateUrl(domain, qsObj)).toBe('http://tour.com/?city=Venice&price=60&country=Italy&paid=true&adults=3')

})

test('city is Verona, price is 70, country is Italy, paid is undefined, adults are 3, children are 1', () => {

  let domain = 'http://tour.com'
  let qsObj = {
    city: 'Verona',
    price: 70,
    country: 'Italy',
    paid: undefined,
    adults: 3,
    children: 1
  }

  expect(generateUrl(domain, qsObj)).toBe('http://tour.com/?city=Verona&price=70&country=Italy&adults=3&children=1')

})