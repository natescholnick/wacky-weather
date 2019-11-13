import React, {Component} from 'react';
import './index.css';
import CheckoutTableItem from '../checkoutTableItem';

class CartTable extends Component{
  render() {
    return(
			<div className="row CartTable">
				<div className="col-md-12">
					<table id="cart" className="table table-striped">
					  <thead>
					    <tr>
					      <th>Name</th>
					      <th>Price</th>
					      <th>Remove Product</th>
					    </tr>
					  </thead>
					  <tbody>
							{
								this.props.cart &&
									this.props.cart.map( (item, index) =>
										<CheckoutTableItem
                      item={item}
                      key={index}
                      removeItem={this.props.removeItem}
                      word='Remove'
                    />
									)
							}
					  </tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default CartTable;
