import React, { Component } from 'react';

import ItemTable from './ItemTable'
import TextFields from './TextFields'

export default class ShoppingList extends Component {


  constructor(props) {
    super(props);
    let itemList = [{name: "apple", quantity: "2 lb"}, {name: "egg", quantity: "1 dozen"}]
    this.state = {
      itemList,
      nameTextField: "",
      quantityTextField: "",
      buttonName: "Add"
    }

    this._updateItemList = this._updateItemList.bind(this)
    this._changeNameTextField = this._changeNameTextField.bind(this)
    this._changeQuantityTextField = this._changeQuantityTextField.bind(this)
    this._setButtonName = this._setButtonName.bind(this)
  }

  _updateItemList(array){
    this.setState({
      itemList: array
    })
  }

  _changeNameTextField(str){
    this.setState({
      nameTextField: str
    })
  }

  _changeQuantityTextField(str){
    this.setState({
      quantityTextField: str
    })
  }

  _setButtonName(str){
    this.setState({
      buttonName: str
    })
  }


  render() {
    let{itemList, nameTextField, quantityTextField, buttonName} = this.state;
    let {_updateItemList, _changeNameTextField, _changeQuantityTextField, _setButtonName} = this;
    return (
      <div>
        <h1>Shopping List</h1>

        <ItemTable itemList = {itemList} _updateItemList = {_updateItemList}
        _changeNameTextField = {_changeNameTextField}
        _changeQuantityTextField = {_changeQuantityTextField}
        _setButtonName = {_setButtonName}/>

        <TextFields itemList = {itemList} nameTextField = {nameTextField} buttonName = {buttonName}
        quantityTextField = {quantityTextField} _changeNameTextField = {_changeNameTextField}
        _changeQuantityTextField = {_changeQuantityTextField}
        _updateItemList = {_updateItemList} _setButtonName = {_setButtonName}/>

      </div>
    )
  }
}
