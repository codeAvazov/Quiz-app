import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    const { count, country, tr } = this.props;
    return (
      <div className="d-flex align-items-center p-2 circles flex-wrap">
        {new Array(country.length).fill(0).map((item, index) => (
          <div
            key={index}
            className={
              count === index
                ? 'bg-primary'
                : 'bg-transparent'
            }
            onClick={count !== -1 ? tr : ''}
          >
            {index + 1}
          </div>
        ))}
      </div>
    );
  }
}
