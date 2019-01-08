import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "../pages/Homepage";
import Admin from "../pages/Admin";
import AddData from "../pages/AddDataPage";
import Header from "./presentational/Header";
import Footer from "./presentational/Footer/Footer";
import AdminHeader from "./presentational/AdminHeader/AdminHeader";
import FoodAndDrink from "../pages/FoodAndDrink";
import BeautyAndHealth from "../pages/BeautyAndHealth";
import Fashion from "../pages/Fashion";
import Entertainment from "../pages/Entertainment";
import Services from "../pages/Services";
import { connect } from "react-redux";
import { getStories } from "../actions/storyActions";

class Main extends React.Component {
  state = {};

  componentDidMount() {
    this.props.getStories();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.story) {
      return { story: nextProps.story };
    }
    return null;
  }
  render() {
    return (
      <main>
        <Switch>
          <Route path="/admin" component={AdminHeader} />
          <Route path="/" component={Header} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/food&drink" component={FoodAndDrink} />
          <Route path="/beauty&health" component={BeautyAndHealth} />
          <Route path="/fashion" component={Fashion} />
          <Route path="/entertainment" component={Entertainment} />
          <Route path="/services" component={Services} />
          <Route
            path="/admin"
            render={props => <Admin {...props} stories={this.state.stories} />}
          />
          <Route path="/addData" component={AddData} />
        </Switch>
        <Switch>
          <Route path="/admin" />
          <Route path="/" component={Footer} />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  story: state.story
});

export default withRouter(
  connect(
    mapStateToProps,
    { getStories }
  )(Main)
);
