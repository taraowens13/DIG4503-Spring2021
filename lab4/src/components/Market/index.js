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
           <h2>Lab 4: Components and State</h2>
           <button onClick={() => {
                const items = this.state.items;
                items.push(<MarketItem />);
                this.setState({items: items});
            }}>Add Item</button>
            <div>{
                this.state.items.map(function(count,item) {
                return <p key={count}><MarketItem/>{item}</p>
                })
            }</div>
         </div>
        )
      }
    }

export default Market

