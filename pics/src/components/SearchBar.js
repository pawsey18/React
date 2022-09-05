import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
  onSubmitForm = (event) => {
    event.preventDefault();

    console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={(event) => this.onSubmitForm(event)}
          className="ui form"
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />

            <button onSubmit={(event) => this.onSubmitForm(event)}>
              test button
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
