let arr = [2,3,4,5,6]

//For loop
for (let i = 0 ; i < arr.length; i++) 
{
    console.log(arr[i]);
}

//forEach
arr.forEach((value,index) => console.log(`Index ${index+1}: ${value}`))

//Welcoming user using Functions and ForEach
function welcomingmessage(email) {
    console.log(`Welcome! to the channel. Email - ${email}`)
}

const users = [
    {name: "Akshad" , email: "akshadkavinmars@gmail.com"},
    {name: "Kavin" , email: "rsakshad@gmail.com"}
    ]

users.forEach((user) => { welcomingmessage(user.email)})

//Welcoming the users using map function

users.map((user) => { console.log(`Welcoming User - ${user.name} having email id: ${user.email}`)}) 

//Using Filter Method & map
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 500 },
  { name: 'Tablet', price: 300 },
  { name: 'Monitor', price: 250 },
  { name: 'Keyboard', price: 50 }
];

products.map((product) => { if(product.price>100) { console.log(product.name) } } )

products.filter((product) =>
    product.price >= 200 && product.price <= 400
  );
  
 //Total Prices
const totalOrderValue = products.reduce(
  (total, product) => total + product.price,
  0
);

console.log('The total value of the order is', totalOrderValue);

//Find method
const employees = [
  {
    id: 1,
    name: 'Alice',
    Eid: 'EMP001',
    'Contact details': 'alice@example.com',
    Role: 'Manager',
    Designation: 'Project Manager',
    Experience: '5 years'
  },
  {
    id: 2,
    name: 'Bob',
    Eid: 'EMP002',
    'Contact details': 'bob@example.com',
    Role: 'Engineer',
    Designation: 'Software Engineer',
    Experience: '3 years'
  },
  {
    id: 3,
    name: 'Charlie',
    Eid: 'EMP003',
    'Contact details': 'charlie@example.com',
    Role: 'Analyst',
    Designation: 'Data Analyst',
    Experience: '2 years'
  }
];
const employee = employees.find((e) => e.id === 2);
console.log(`${employee.name}`)

 
