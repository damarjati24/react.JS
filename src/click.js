import React from "react";
import ReactDOM from "react-dom/client"; //DOM is Document Object Model

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

class Click extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    
    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <h1>you clicked {this.state.count} times</h1>
                <button onClick={this.handleClick}>Click on me</button>
            </div>
        );
    }
} 
root.render(<Click />);