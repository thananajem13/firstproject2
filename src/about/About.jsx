import React, { Component } from 'react'

export default class About extends Component { 
  render() {
    let products = this.props.productsList;
    let {makeDelete}=this.props;
    console.log(products)
    let design = 
      products.map((elem)=> {
      return (
        <div className="col-md-4" key={elem.id}>
          <h1>productID: {elem.id}</h1>
          <h2>productName: {elem.productName}</h2>
          <h3>productPrice: {elem.productPrice}</h3>
          <button   onClick={()=>{  makeDelete(  elem )  } } className="btn btn-danger mx-2">delete</button>

        </div>
      )
         
      })

    
    return (
      <> 
      <div className='container'>
        <div className="row gy-4">
          {design}
        </div>
      </div>
      </>
      
    )
  }
}
