import { Component } from "react";
import NavBar from "./navbar";
class HomePage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <NavBar/>
        <section className="flex-container-center">
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <button className="btn-circle-large">Explore</button>
      </div>
    );
  }
}
export default HomePage;
