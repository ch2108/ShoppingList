import React, { Component } from 'react';

export default function ItemTable(props){


  let itemListTrs = [];
  let {itemList, _updateItemList, _changeNameTextField, _changeQuantityTextField, _setButtonName} = props

  for(let i = 0; i<itemList.length; i++){

    let itemTr =
    <tr>
      <td>{itemList[i].name}</td>
      <td>{itemList[i].quantity}</td>
      <td><button onClick={function(e){
        _changeNameTextField(itemList[i].name);
        _changeQuantityTextField(itemList[i].quantity);
        _setButtonName("Done edit")
      }}>edit</button></td>
      <td><button onClick={function(e){
        let newList = props.itemList.slice();
        newList.splice(i,1)
        _updateItemList(newList);
      }}>Delete</button></td>
    </tr>;
    itemListTrs.push(itemTr);
  }
  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {itemListTrs}
      </tbody>
    </table>
  )

}
