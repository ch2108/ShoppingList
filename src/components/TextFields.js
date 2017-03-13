import React, { Component } from 'react';

export default function TextFields(props){

  let  {nameTextField, quantityTextField, itemList, buttonName} = props;
  let {_updateItemList, _changeNameTextField, _changeQuantityTextField, _setButtonName} = props;

  return(
    <div>
    <form onSubmit={function(e){
      e.preventDefault();

      let newItem = {name: nameTextField, quantity: quantityTextField}
      let newList = itemList.slice();
      let itemFound = false;

      newList.forEach(item =>{
        if (item.name == newItem.name) {
          item.quantity = newItem.quantity;
          itemFound = true;
        }
      })

      if(!itemFound){
        newList.push(newItem);
      }

      _updateItemList(newList);

      _changeNameTextField("");
      _changeQuantityTextField("");
      _setButtonName("Add");
    }}>
      <fieldset>
        <legend>Add new item to the list:</legend>
        Name:<br/>
        <input type="text" value={nameTextField} name= "nameTextField" onChange={function(e){
        _changeNameTextField(e.target.value)
      }}/><br/>
        Quantity:<br/>
        <input type="text" value={quantityTextField} name= "quantityTextField" onChange={function(e){
          _changeQuantityTextField(e.target.value)
        }}/><br/>
        <input type="Submit" value={buttonName}/>
      </fieldset>
    </form>
</div>
  )
}
