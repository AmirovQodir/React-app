import React, {Component} from 'react'

class Appi extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }
  render() {
    const {data} = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })
    return <div>
                <h4>Get data with API</h4>
                <ul>{result}</ul>
            </div> 
  }
}

export default Appi
