

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/* just adding conditoinal rendering
 * makes no sense if not going to show the 
 * number of guests box
 */




class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        alert("Target Name :" + name);

        if (!(target.type === 'checkbox')) {
            this.setState({ numberOfGuests: target.value });
            alert("Value of numberOfGuests:" + this.state.numberOfGuests);
        }
    }


    render() {
        return (
            <form >
                <label>
                    is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}   />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
         );
    }
                
}
 

ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
);


