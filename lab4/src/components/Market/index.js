import React from 'react';
import MarketItem from '../MarketItem'

class Market extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          items: []
        };
      }
    
      render () {
        return (
         <div>
           <h2>Click to add item</h2>
           <button onClick={() => {
             const items = this.state.items;
             items.push(<MarketItem/>);
             this.setState({items: items});
           }}>Click me!</button>
           <div>{
             this.state.items.map(function(item, index) {
              return <p key={index}>{item}</p>
             })
          }</div>
         </div>
        )
      }
    }

export default Market

