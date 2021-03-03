export default {
  id: '261050138773',
  node: document.getElementById('collection-component-1614806811242'),
  moneyFormat: '%24%7B%7Bamount%7D%7D',
  options: {
    product: {
      styles: {
        product: {
          '@media (min-width: 601px)': {
            'max-width': 'calc(25% - 20px)',
            'margin-left': '20px',
            'margin-bottom': '50px',
            width: 'calc(25% - 20px)',
          },
          img: {
            height: 'calc(100% - 15px)',
            position: 'absolute',
            left: '0',
            right: '0',
            top: '0',
          },
          imgWrapper: {
            'padding-top': 'calc(75% + 15px)',
            position: 'relative',
            height: '0',
          },
        },
        button: {
          color: '#1f2937',
          ':hover': {
            color: '#1f2937',
            'background-color': '#dd8e0a',
          },
          'background-color': '#f59e0b',
          ':focus': {
            'background-color': '#dd8e0a',
          },
          'border-radius': '8px',
          'padding-left': '55px',
          'padding-right': '55px',
        },
      },
      text: {
        button: 'Add to cart',
      },
    },
    productSet: {
      styles: {
        products: {
          '@media (min-width: 601px)': {
            'margin-left': '-20px',
          },
        },
      },
    },
    modalProduct: {
      contents: {
        img: false,
        imgWithCarousel: true,
        button: false,
        buttonWithQuantity: true,
      },
      styles: {
        product: {
          '@media (min-width: 601px)': {
            'max-width': '100%',
            'margin-left': '0px',
            'margin-bottom': '0px',
          },
        },
        button: {
          color: '#1f2937',
          ':hover': {
            color: '#1f2937',
            'background-color': '#dd8e0a',
          },
          'background-color': '#f59e0b',
          ':focus': {
            'background-color': '#dd8e0a',
          },
          'border-radius': '8px',
          'padding-left': '55px',
          'padding-right': '55px',
        },
      },
      text: {
        button: 'Add to cart',
      },
    },
    option: {},
    cart: {
      styles: {
        button: {
          color: '#1f2937',
          ':hover': {
            color: '#1f2937',
            'background-color': '#dd8e0a',
          },
          'background-color': '#f59e0b',
          ':focus': {
            'background-color': '#dd8e0a',
          },
          'border-radius': '8px',
        },
      },
      text: {
        total: 'Subtotal',
        button: 'Checkout',
      },
      contents: {
        note: true,
      },
    },
    toggle: {
      styles: {
        toggle: {
          'background-color': '#f59e0b',
          ':hover': {
            'background-color': '#dd8e0a',
          },
          ':focus': {
            'background-color': '#dd8e0a',
          },
        },
        count: {
          color: '#1f2937',
          ':hover': {
            color: '#1f2937',
          },
        },
        iconPath: {
          fill: '#1f2937',
        },
      },
    },
  },
}
