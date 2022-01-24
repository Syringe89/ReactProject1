// import { Component } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/app/app"

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       years: 26,
//     }
//   }

//   nextYear = () => {
//     this.setState((state) => ({
//       years: state.years + 1,
//     }))
//   }

//   render() {
//     const { name, surname, link } = this.props
//     const { years } = this.state
//     return (
//       <>
//         <button type="button" onClick={this.nextYear}>
//           ++
//         </button>
//         <h1>
//           My name is {name}, surname - {surname}, years = {years}
//         </h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }

// function All() {
//   return (
//     <>
//       <WhoAmI name="John" surname="Smith" link="vk.com" />
//       <WhoAmI name="John" surname="Smith" link="vk.com" />
//       <WhoAmI name="John" surname="Smith" link="vk.com" />
//     </>
//   )
// }

ReactDOM.render(<App />, document.getElementById("root"))
