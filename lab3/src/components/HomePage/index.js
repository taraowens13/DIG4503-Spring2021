import React from 'react';

class HomePage extends React.Component {
    render(){
        return (
            <p>{"First Name: " + this.props.firstName}<br></br>
               {"Last Name: " + this.props.lastName}<br></br>
               {"Age: " + this.props.age}<br></br>
               {"Major: " + this.props.major}
            </p>
        );
    }
}

export default HomePage