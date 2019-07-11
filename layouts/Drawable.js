import React from "react";
import { css } from "styled-components";

export default class Drawable extends React.Component {
  componentDidMount() {
    let x, y, isPainting = false;
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    const setSize = () => {
      // set dimensions on the canvas
      canvas.setAttribute("width", window.innerWidth);
      canvas.setAttribute("height", window.innerHeight);
      context.strokeStyle = this.props.color || "#dd4a68";
      context.lineJoin = "round";
      context.lineWidth = this.props.width || 5;
    };

    setSize();

    window.addEventListener("resize", setSize);

    function getCoordinates(event) {
      // check to see if mobile or desktop
      if (["mousedown", "mousemove"].includes(event.type)) {
        // click events
        return [
          event.pageX - canvas.offsetLeft,
          event.pageY - canvas.offsetTop
        ];
      } else {
        // touch coordinates
        return [
          event.touches[0].pageX - canvas.offsetLeft,
          event.touches[0].pageY - canvas.offsetTop
        ];
      }
    }

    function startPaint(e) {
      // change the old coordinates to the new ones
      isPainting = true;
      let coordinates = getCoordinates(e);
      x = coordinates[0];
      y = coordinates[1];
    }

    canvas.addEventListener("mousedown", startPaint);
    canvas.addEventListener("touchstart", startPaint);

    function drawLine(firstX, firstY, secondX, secondY) {
      context.beginPath();
      context.moveTo(secondX, secondY);
      context.lineTo(firstX, firstY);
      context.closePath();
      context.stroke();
    }

    function paint(e) {
      if (isPainting) {
        let [newX, newY] = getCoordinates(e);
        drawLine(x, y, newX, newY);
        x = newX;
        y = newY;
      }
    }

    canvas.addEventListener("mousemove", paint);
    canvas.addEventListener("touchmove", paint);

    function exit() {
      isPainting = false;
    }

    canvas.addEventListener("mouseup", exit);
    canvas.addEventListener("mouseleave", exit);
    canvas.addEventListener("touchend", exit);
  }

  render() {
    return (
      <>
        {this.props.children}
        <div css={css`
          position: relative;
          z-index: 3;
          font-size: 24px;
        `}>
          Credit: <a href="https://dev.to/aspittel/how-to-create-the-drawing-interaction-on-dev-s-offline-page-1mbe">Ali Spittel</a>
        </div>
        <canvas
          css={css`
            height: 100vh;
            width: 100vw;
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            margin: 0;
            user-select: none;
          `}
        />
      </>
    );
  }
}
