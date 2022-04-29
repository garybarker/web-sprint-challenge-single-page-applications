import React, {useState} from "react";
import {Link, Route} from "react-router-dom";
import OrderForm from "./components/OrderForm";
import axios from "axios";





//initial values
const initialFormValues = {
  name: "",
  size: "",
  pepperoni: false,
  sausage: false,
  onion: false,
  peppers: false,
  special: ""
};



const App = () => {

  //Setting slices of state 
  const [formValues, setFormValues] = useState(initialFormValues);
  
 
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]:  inputValue});
  };

  const submitForm = () => {
    const  newPizza =  {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      onion: formValues.onion,
      peppers: formValues.peppers,
      special: formValues.special
    };

    axios.post("https://reqres.in/api/orders", newPizza)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  }

    


  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pizza" id="order-pizza">Order</Link>
      </nav>
      <Route exact path="/">
        <p>Home Page</p>
      </Route>
      <Route exact path="/pizza">
        <OrderForm 
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />
      </Route>
    </>
  );
};


export default App;

