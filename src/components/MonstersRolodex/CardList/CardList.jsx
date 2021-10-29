import React from 'react';

import './CardList.scss';

const CardList = (props) => {
	const { monsters } = props;
	return (
		<div className="card-list">
			{Array.isArray(monsters) &&
				monsters.map((item, index) => {
					return (
						<div className="monster-item" key={item.id}>
							{item.name}
						</div>
					);
				})}
		</div>
	);
};

export default CardList;
