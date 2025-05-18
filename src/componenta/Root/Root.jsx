import { Outlet } from "react-router-dom"

export class Root extends Component {
  render() {
    return (
      <div>
        <Outlet></Outlet>
      </div>
    )
  }
}

export default Root