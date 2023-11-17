import React,{Component} from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>

        <ul style={{listStylePosition:'inside'}}>
            <li>Animal</li>
            <li>Birds</li>
            <li>Mammels</li>
        </ul>
      </div>
    )
  }
}
