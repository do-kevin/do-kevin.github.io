import React, { Component } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <p className="animated slideInRight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          aliquet urna a dui congue mattis. Mauris cursus sapien et dolor
          fermentum finibus. Nulla faucibus, enim a posuere gravida, justo leo
          feugiat nisl, at imperdiet metus neque vulputate ligula. Ut sit amet
          lacus lacus. Nunc nec purus id ex ornare gravida. Vestibulum vel
          libero at nisi sagittis aliquam. Donec a odio quam. Aliquam porta dui
          quam, vel varius nunc aliquam sit amet. Aenean fringilla sapien dui.
          Cras sed tempor ipsum, nec elementum neque. Fusce accumsan risus a
          nisi ultrices viverra. Ut sit amet elementum nulla, dignissim
          dignissim augue. Suspendisse potenti. Mauris suscipit nulla sit amet
          tincidunt fringilla. Integer tincidunt diam ipsum, et placerat ex
          laoreet vitae. Suspendisse eleifend lacus augue, at commodo diam
          placerat vitae. Suspendisse sed nunc mattis, lobortis nibh nec,
          pharetra odio. Nam tempor tempor lacus dapibus ultrices. Curabitur
          venenatis, massa quis ullamcorper consectetur, nibh velit ultrices mi,
          quis posuere ante velit id nulla. Nullam tincidunt tristique bibendum.
          Maecenas quis ex sapien. Proin commodo tellus neque, vitae iaculis
          eros interdum et. Proin at nulla nulla. Phasellus feugiat at orci id
          malesuada. Donec tempus laoreet est, vitae elementum velit laoreet eu.
          Fusce a purus sed neque lobortis consectetur at id magna. Suspendisse
          vitae risus sagittis, pulvinar lectus ac, viverra quam. Vestibulum ut
          orci ante. Nam nec erat enim. Nunc quam dui, eleifend vel eros eu,
          hendrerit bibendum lorem. Fusce sed tincidunt diam. Nulla maximus
          magna velit. Vestibulum sed gravida massa. Cras fringilla a erat ut
          semper. Nullam venenatis interdum molestie. Sed at nulla nulla.
          Curabitur interdum a tortor vel tristique. Curabitur semper elementum
          sollicitudin. Mauris tristique mi rhoncus tristique pulvinar.
          Pellentesque vulputate, risus at laoreet rhoncus, nibh orci viverra
          dui, in egestas leo nisl id elit. Vestibulum vitae quam dignissim,
          rutrum est ac, molestie nisl. Cras sapien nisl, ultricies mollis lorem
          rhoncus, vestibulum sagittis purus. Etiam vehicula purus vel dolor
          rutrum interdum. Vestibulum scelerisque leo vel dui tempor mollis.
          Suspendisse a erat interdum, malesuada mi quis, consequat massa. Donec
          sit amet convallis metus. In vestibulum fermentum metus, sed bibendum
          turpis euismod eget. Nam at rutrum ligula. Duis et purus eleifend,
          fermentum tortor et, vestibulum lacus. Ut rhoncus justo augue. Ut ac
          lacus neque. Aliquam sed ante at nibh eleifend varius. Aenean
          pellentesque placerat maximus. Fusce pellentesque eleifend massa eget
          mattis. Suspendisse a dui dictum, sollicitudin risus eu, tincidunt
          purus. Sed sed ante varius, tincidunt dui in, dapibus diam.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
