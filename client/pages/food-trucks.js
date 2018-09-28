import 'isomorphic-fetch'

export default class extends React.Component{
  constructor(){
    super()
    this.state = {
      foodtrucks : []
    }
  }

  async componentDidMount(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const foodtrucks = await response.json()
    this.setState({foodtrucks:foodtrucks})
  }

  render(){
    return  <div className="foodtrucks">
      <h1>Food Trucks</h1>
      {(this.state.foodtrucks && this.state.foodtrucks.length > 0) ? 
        <ul>
          {this.state.foodtrucks.map(truck => <li>{truck.title}</li>)}
        </ul>       
      : <div>Loading...</div>}
    </div>
    }
  }