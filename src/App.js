import React , { useEffect, useState } from 'react' 
import logo from './logo.svg';
import './App.css';

function App() {
  const people = ['Siam' , 'Ashique' , 'Akash' , 'Shakib','Abir']
  const products=[
    {name :'Photoshop',price : '$90.99'},
    {name :'Illustrator',price : '$60.99'},
    {name :'Pdf Reader',price : '$9.99'},
    {name :'Premium Elements',price : '$19.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
      <p>I am a react Person</p>
      <Counter></Counter>
      <User></User>
      <ul>
        {
          people.map(name =><li>{name}</li>)
          
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>
      {
        products.map(pd => <Product product={pd}></Product>)
      }
      </header>
    </div>
  );
}
function User(){
  const [users,setUsers] =useState([]); 

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

   return(
     <div>
       <h3>Dynamic User : {users.length}</h3>
       {
         console.log(users)
       }
       <ul>
         {
           users.map(user => <li>{user.email}</li>)
         }
       </ul>
     </div>
   )
}
function Counter(){
  const [count,setCount] = useState(10);
  const handleIncrease = () =>{
     const newCount = count+1;
     setCount(newCount);
  }
  const handleDecrease = () => {
      const newCount = count - 1;
      setCount(newCount);
  }
   return(
     <div>
       <h1>Count : {count}</h1>
       <button onClick={handleIncrease}>Increase</button>
       <button onClick={handleDecrease}>Decrease</button>
     </div>
   )
}
function Product(props){
  const productStyle={
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor: 'lightgray',
    height: '250px',
    width : '250px',
    float : 'left'
  }
  const {name ,price}=props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button> 
    </div>
  )
}

export default App;
