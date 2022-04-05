import './style.css'

const customersUrl = 'http://localhost:5011/customers';
const ordersUrl = 'http://localhost:5011/orders';

const getCustomers = async () => {
  const response = await fetch(customersUrl);
  return await response.json();
};
const getOrders = async () => {
  const response = await fetch(ordersUrl);
  return await response.json();
};

const customers = await getCustomers();
const orders = await getOrders();

document.querySelector('#app').innerHTML = `
  <h1>Customers and Orders Information</h1>
  <div>There are ${customers.length} customers and ${orders.length} orders.</div>
`;
