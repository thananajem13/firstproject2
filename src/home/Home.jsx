import { render } from '@testing-library/react';
import React, { Component } from 'react'
import About from '../about/About'

export default class Home extends Component {
   state={
    productList:[
      {
      id:0,
      productName:'Dell',
      productPrice:1000
    },
      {
      id:1,
      productName:'samsung',
      productPrice:500
    },
      {
      id:2,
      productName:'lenovo',
      productPrice:700
    },
  
  ]
  }
  deleteProduct=(obj)=>{
   let {productList}=this.state;
   console.log(obj)
    let newArr = [...this.state.productList];
    let filteredArr = newArr.filter((elem)=>{
      return elem !== obj
    })
    console.log(filteredArr, productList) 
    this.setState({productList:filteredArr})
    console.log(filteredArr, productList)
  }
  render() {
    let {productList} = this.state//destruct
    return (
      <>
      <div>Home</div>
      <About productsList={this.state.productList} makeDelete={this.deleteProduct}/>
      </>
      
    )
  }
}
