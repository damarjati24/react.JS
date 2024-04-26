import React from 'react';
import ReactDOM from 'react-dom';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: ""
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value });
    }

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.firstName + " " + this.state.lastName);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
root.render(<Event />)