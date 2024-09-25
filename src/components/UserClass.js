import React from "react";
import { userContext } from "../utils/userContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      profilepic:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      company: this.props.id,
      location: this.props.location,
    };
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/afsahsyeda");
    const json = await response.json();
    this.setState({
      name: json.name,
      profilepic: json.avatar_url,
      location: json.location,
      company: json.company,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    const { name, location, profilepic, company } = this.state;
    return (
      <div className="user-card">
        <img src={profilepic} />
        <ul className="pl-2">
          <li>
            <h3>{name}</h3>
          </li>
          <li>
            <h3>{company}</h3>
          </li>
          <li>
            <h3>{location}</h3>
          </li>
          <userContext.Consumer>
            {({ userName }) => (
              <h1 className="font-bold text-lg">Welcome {userName}!</h1>
            )}
          </userContext.Consumer>
        </ul>
      </div>
    );
  }
}

export default UserClass;
