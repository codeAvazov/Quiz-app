import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const { start, count, restart } = this.props;
    return (
      <div className="p-4 d-flex align-items-center justify-content-center mr-5">
        {count > 99 ? (
          <button type="button" className="btn btn-warning" onClick={restart}>
            Restart Quiz
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-warning"
            onClick={start}
            disabled={count > -1 && count < 100 ? true : false}
          >
            Start Quiz
          </button>
        )}
      </div>
    );
  }
}
