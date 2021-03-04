import BuyButtonScript from './BuyButtonConst'
class BuyButton extends React.Component {
  componentDidMount() {}
  render() {
    const script = document.createElement('script')
    script.id = 'script1'
    script.async = true
    script.innerHTML = BuyButtonScript

    document.body.appendChild(script)
    return <div id="collection-component-1614806811239"></div>
  }
}

export default BuyButton
