import React from 'react';
import ReactDOM from 'react-dom';

class filterableProductTable extends React.Component {
	render() {
        return (
			<div>
				<div>
					<div>
						<input type='text' />
					</div>
					<div>
						<input type='checkbox' />
						<label>Show only red wines</label>
					</div>
				</div>
				<div>
					<div>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th
										colspan='2'
										className='country'>
										France
									</th>
								</tr>
								<tr>
									<td>Pinot Noir</td>
									<td>€5,99</td>
								</tr>
								<tr>
									<td>Pinot Noir</td>
									<td>€5,99</td>
								</tr>
								<tr>
									<th
										colspan='2'
										className='country'>
										Italy
									</th>
								</tr>
								<tr>
									<td>Pinot Noir</td>
									<td>€5,99</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	React.createElement(filterableProductTable, null),
	document.getElementById('root')
);