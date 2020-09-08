import React, { Component } from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import country from "../db/MOCK_DATA (1).json";

export default class Quiz extends Component {
  state = {
    count: -1,
    sec: 9000,
    answers: [],
    trueAnswer: 0,
    dis: new Array(country.length).fill(false),
  };

  start = () => {
    const { count } = this.state;
    this.setState(
      {
        count: count + 1,
      },
      () => this.randAnswer()
    );
    setInterval(() => {
      const { sec } = this.state;
      this.setState({
        sec: sec - 1,
      });
    }, 1000);
  };

  randAnswer = () => {
    const { count } = this.state;
    let answer = [];
    let n;
    for (let i = 0; i < 3; i++) {
      n = Math.floor(Math.random() * 99);
      answer.push(country[n]["country_code"]);
    }
    answer.push(country[count]["country_code"]);
    answer.sort((a, b) => 0.5 - Math.random());
    this.setState({
      answers: [...answer],
    });
  };

  restart = () => {
    this.setState(
      {
        count: -1,
        sec: 9000,
        trueAnswer: 0,
        dis: new Array(country.length).fill(false),
      },
      () => this.start()
    );
  };

  tr = (e) => {
    const value = e.target.textContent;
    this.setState(
      {
        count: parseInt(value) - 1,
      },
      () => this.randAnswer()
    );
    console.log(this.state.count);
  };

  next = () => {
    const { count } = this.state;
    if (count > -1 && count < 99) {
      this.setState(
        {
          count: this.state.count + 1,
        },
        () => this.randAnswer()
      );
    }
  };

  prev = () => {
    const { count } = this.state;
    if (count > 0 && count < 100) {
      this.setState(
        {
          count: this.state.count - 1,
        },
        () => this.randAnswer()
      );
    }
  };

  finish = () => {
    this.setState({
      count: 100,
    });
  };

  checkAnswer = (e) => {
    const { count, trueAnswer, dis } = this.state;
    const { value } = e.target;
    if (value === country[count]["country_code"]) {
      this.setState({
        trueAnswer: trueAnswer + 1,
      });
    }
    let fakeArr = [...dis];
    fakeArr[count] = true;
    this.setState({
      dis: [...fakeArr],
    });
    this.next();
  };

  render() {
    const { count, sec, answers, dis, trueAnswer } = this.state;
    return (
      <div className="container my-5">
        {count === 100 || sec < 0 ? (
          <>
            <h1>Finished</h1>
            <h4>Your result</h4>
            <p>True : {trueAnswer}</p>
            <p>False : {100 - trueAnswer}</p>
          </>
        ) : (
          <>
            <h1 className="text-center">Find country code ?</h1>
            <Header country={country} count={count} tr={this.tr}/>
            <Body
              sec={sec}
              next={this.next}
              prev={this.prev}
              country={country}
              count={count}
              finish={this.finish}
              answers={answers}
              checkAnswer={this.checkAnswer}
              dis={dis}
            />
          </>
        )}
        <Footer start={this.start} count={count} restart={this.restart} />
      </div>
    );
  }
}
