import { Button } from '@material-ui/core'
import React, { Component } from 'react'

class LineItem extends Component {
  constructor(props) {
    super(props)

    this.decrementQuantity = this.decrementQuantity.bind(this)
    this.incrementQuantity = this.incrementQuantity.bind(this)
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity)
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity)
  }

  render() {
    return (
      <li className="">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          {this.props.line_item.variant.image ? (
            <img
              src={this.props.line_item.variant.image.src}
              alt={`${this.props.line_item.title} product shot`}
            />
          ) : null}
          <div className="mt-4">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {this.props.line_item.variant.title}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {this.props.line_item.title}
            </h2>
            <div className="flex flex-wrap -mx-8 overflow-hidden">
              <div className="my-8 px-8 w-1/3 overflow-hidden">
                <p className="mt-1">$16.00</p>
              </div>

              <div className="my-8 px-8 w-1/3 overflow-hidden">
                <input className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10" />
              </div>

              <div className="my-8 px-8 w-1/3 overflow-hidden">
                <div className="Line-item__quantity-container">
                  <Button
                    className="Line-item__quantity-update"
                    onClick={() =>
                      this.decrementQuantity(this.props.line_item.id)
                    }
                  >
                    -
                  </Button>
                  <span className="Line-item__quantity">
                    {this.props.line_item.quantity}
                  </span>
                  <Button
                    className="Line-item__quantity-update"
                    onClick={() =>
                      this.incrementQuantity(this.props.line_item.id)
                    }
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Line-item__img"></div>
        <div className="Line-item__content">
          <div className="Line-item__content-row">
            <div className="Line-item__variant-title">
              {this.props.line_item.variant.title}
            </div>
            <span className="Line-item__title">
              {this.props.line_item.title}
            </span>
          </div>
          <div className="Line-item__content-row">
            <div className="Line-item__quantity-container">
              <button
                className="Line-item__quantity-update"
                onClick={() => this.decrementQuantity(this.props.line_item.id)}
              >
                -
              </button>
              <span className="Line-item__quantity">
                {this.props.line_item.quantity}
              </span>
              <button
                className="Line-item__quantity-update"
                onClick={() => this.incrementQuantity(this.props.line_item.id)}
              >
                +
              </button>
            </div>
            <span className="Line-item__price">
              ${' '}
              {(
                this.props.line_item.quantity *
                this.props.line_item.variant.price
              ).toFixed(2)}
            </span>
            <button
              className="Line-item__remove"
              onClick={() =>
                this.props.removeLineItemInCart(this.props.line_item.id)
              }
            >
              ×
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default LineItem
