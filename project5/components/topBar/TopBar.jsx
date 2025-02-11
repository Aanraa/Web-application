import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./TopBar.css";
import fetchModel from "../../lib/fetchModelData";

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.match.url,
      name: "",
      // userModel: {},
    };
  }
  componentDidUpdate() {
    const currUrl = this.props.match.url;
    if (this.state.url !== currUrl) {
      this.state.url = currUrl;
      if (currUrl === this.state.url) {
        this.nameHandle();
      }
    }
  }
  componentDidMount() {
    this.nameHandle();
  }
  nameHandle() {
    let arr = this.state.url.split("/");
    //problem 2
    // this.setState({ userModel: window.cs142models.userModel(arr[2]) });
    let userModel = window.cs142models.userModel(arr[2]);
    // fetchModel("/user/" + arr[2]).then((res) => {
    //   this.setState({ userModel: res.data });
    //   console.log(this.state.userModel);
    // });
    // if (arr[1] !== "") {
    //   fetchModel("/user/" + arr[2]).then((res) =>
    //     this.setState({ userModel: res.data })
    //   );
    if (arr[1] === "users") {
      this.setState({ name: userModel.first_name });
    } else if (arr[1] === "photos") {
      this.setState({ name: "Photos of " + userModel.first_name });
    }

    // }
  }
  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Aanraa
          </Typography>
          <Typography variant="h5" position="inherit">
            {this.state.name}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
