import React from 'react';

import './CardList.scss';

const CardList = (props) => {
	const { monsters } = props;
	return (
		<div className="card-list">
			{Array.isArray(monsters) &&
				monsters.map((item, index) => {
					return (
						<div className="card-item" key={item.id}>
							<div className="card-container">
								<img
									src={`https://robohash.org/${item.id}?set=set2&size-180*180`}
									alt="monster"
								/>
								<h2>{item.name}</h2>
								<p>{item.email}</p>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default CardList;
