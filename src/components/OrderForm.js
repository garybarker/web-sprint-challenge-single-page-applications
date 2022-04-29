import React, {useState} from "react";


const OrderForm = (props) => {
  const [formError, setFormError] = useState('');
  const {values, update, submit} = props;



  const nameChange= (evt) => {
    const {name, value} = evt.target;
    update(name, value);
    const x = value.length;
    if(x < 2){
      return setFormError('name must be at least 2 characters');
    }else{
      return setFormError('');
    }
  }
    
  
  const onChange = (evt) => {
    const {name, value, checked, type} = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    update(name, valueToUse);
  
  }


  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  }



  return (
    <>
      <form className="form-container" id="pizza-form" onSubmit={onSubmit}>
        <label>Name:
          <input 
            type="text"
            id="name-input"
            name="name"
            value={values.name}
            onChange={nameChange} 
           />
        </label>

        <p>{formError}</p>
                
        <div className="form-dropdown">
          <label>Size:
            <select id="size-dropdown" name="size" value={values.size} onChange={onChange}>
              <option value="">---Select Size---</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
        </div>

        <div className="form-checkboxes">
          <label>Pepperoni:
            <input
              type="checkbox"
              name="pepperoni"
              onChange={onChange}
              checked={values.pepperoni}
            />
          </label>
          <label>Sausage:
            <input
              type="checkbox"
              name="sausage"
              onChange={onChange}
              checked={values.sausage}
            />
          </label>
          <label>Onions:
            <input
              type="checkbox"
              name="onions"
              onChange={onChange}
              checked={values.onions}
            />
          </label>  
          <label>Peppers:
            <input
              type="checkbox"
              name="peppers"
              onChange={onChange}
              checked={values.peppers}
            />
          </label>
        </div>
            
        <label>Special Instructions
          <input 
            type="text"
            id="special-text"
            name="special"
            value={values.special}
            onChange={onChange} 
          />
        </label>
                
        <div className="submit">
          <input type="submit" value="Add to Order" id="order-button"/>
        </div>
      </form>
    </>
  )
}

  export default OrderForm;