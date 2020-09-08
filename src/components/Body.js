import React, { Component } from "react";

export default class Body extends Component {
  render() {
    const { sec, next, prev, country, count, finish, answers, checkAnswer, dis } = this.props;
    let hour = Math.floor(sec / 3600);
    let min = Math.floor(((sec - hour * 3600) / 3600) * 60);
    let sek = sec - hour * 3600 - min * 60;
    return (
      <div className="row border border-primary p-2">
        <div className="col-9">
          <div className="bg-dark p-2 d-flex flex-column">
            <div className="question bg-light p-2 px-5 text-center">
              {count > -1 ? country[count]["country"] : ""}
            </div>
            <div className="row">
              {answers.map((item, index) => (
                <div className="col-6 d-flex align-items-center justify-content-center my-2" key={index}>
                <button type="button" className="btn btn-info" value={item} onClick={checkAnswer} disabled={dis[count]}>
                  {item}
                </button>
              </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="bg-info p-2 d-flex align-items-center justify-content-center flex-column">
            <div>{sec === 0 ? "" : hour + " : " + min + " : " + sek}</div>
            <div>
              <button
                type="button"
                className="btn btn-success my-2"
                onClick={next}
                disabled={count === -1 ? true : false}
              >
                Next
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-success"
                onClick={prev}
                disabled={count === -1 ? true : false}
              >
                Prev
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-success my-2"
                onClick={finish}
                disabled={count === -1 ? true : false}
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
