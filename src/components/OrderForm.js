import React from "react";

const OrderForm = (props) => {

    const {values, update, submit} = props;

    const onChange = evt => {
      const {name, value, checked, type} = evt.target;
      const valueToUse = type === "checkbox" ? checked : value;
      update(name, valueToUse);
    }


    return (
      <>
        <form className="form-container" id="pizza-form" onSubmit={submit}>
          <label>Name:
            <input 
              type="text"
              id="name-input"
              name="name"
              value={values.name}
              onChange={onChange} 
            />
          </label>
                
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
                checked={values.toppings.pepperoni}
              />
            </label>
            <label>Sausage:
              <input
                type="checkbox"
                name="sausage"
                onChange={onChange}
                checked={values.toppings.sausage}
              />
            </label>
            <label>Onions:
              <input
                type="checkbox"
                name="onions"
                onChange={onChange}
                checked={values.toppings.onions}
              />
            </label>  
            <label>Peppers:
              <input
                type="checkbox"
                name="peppers"
                onChange={onChange}
                checked={values.toppings.peppers}
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