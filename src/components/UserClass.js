import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Raj",
        location: "Bangalore",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/bitsofrishabh");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{location}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
