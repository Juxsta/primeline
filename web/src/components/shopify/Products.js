import React, { Component } from 'react'
import Product from './Product'

class Products extends Component {
  render() {
    const ContainerClass = this.props.containerClass
    const ProductClass = this.props.productClass
    let products = this.props.products.map((product) => {
      return (
        <div className={ProductClass} key={product.id.toString()}>
          <Product
            addVariantToCart={this.props.addVariantToCart}
            client={this.props.client}
            product={product}
          />
        </div>
      )
    })

    return <div className={ContainerClass}>{products}</div>
  }
}

export default Products
