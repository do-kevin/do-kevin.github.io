import React, { Component } from "react";

import "../css/About.css";

class About extends Component {
  render() {
    return (
      <div
        className={`${this.props.aboutAnimateClassNames} hero is-fullheight`}
        id="about-page"
      >
          <div id="image-wrapper">
            <img
              src={require("../static/images/about-picture.jpg")}
              alt="avatar"
              id="about-picture"
              className="animated slideInUp delay-200ms"
            />
          </div>
            <p style={{padding: "70px"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse commodo nec augue in gravida. Ut a efficitur nulla.
              Vivamus sodales nulla auctor dolor iaculis, in pretium diam
              mattis. In ligula ante, faucibus vitae lectus in, lacinia interdum
              elit. Nulla facilisi. Sed hendrerit consectetur ipsum sed pretium.
              Integer tempus leo id est efficitur, eget aliquam magna sagittis.
              Curabitur velit mauris, molestie nec felis nec, lobortis finibus
              massa. Aliquam tempor lacus a diam commodo, ut suscipit elit
              porttitor. Vestibulum posuere nunc vel nisl ornare, vitae
              venenatis augue convallis. Morbi pretium nisi et metus egestas, et
              lacinia metus consequat. Sed vehicula commodo neque, sit amet
              porttitor sem vulputate vel. Nulla nec tempor risus. In eget
              tincidunt sapien, nec scelerisque lacus. Maecenas consequat, nisl
              id euismod viverra, leo mi condimentum massa, vel facilisis metus
              eros ut urna. Maecenas in accumsan diam. Fusce laoreet mollis
              pretium. Nullam fringilla neque urna, in tempor lacus cursus in.
              Praesent tempor, sapien eu volutpat tempor, ipsum ligula pulvinar
              risus, sit amet consectetur erat ante mattis tortor. Cras placerat
              mi sit amet nulla blandit malesuada. Nunc ullamcorper, enim sed
              elementum vestibulum, tellus odio faucibus nulla, eget faucibus
              dui tortor at diam. Ut efficitur massa sed velit lacinia luctus.
              Maecenas ac mi venenatis, tristique sem vitae, hendrerit odio.
              Curabitur ultrices libero quis ex gravida congue. Sed sed diam
              aliquet, eleifend eros vel, commodo elit. Phasellus ut leo non
              sapien dapibus consequat. Nullam suscipit cursus purus et
              vulputate. Maecenas commodo turpis sit amet magna varius
              tristique. Nulla pretium, quam vitae volutpat ultricies, orci
              purus interdum sapien, a vestibulum tellus dui vel ex. Praesent
              malesuada porttitor urna id aliquam. Cras pharetra condimentum
              augue sit amet aliquet.
            </p>
        </div>
    );
  }
}

export default About;
