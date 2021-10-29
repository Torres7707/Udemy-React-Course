import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import CardList from './CardList/CardList';

import './MonstersRolodex.scss';

const MonstersRolodex = (props) => {
	const [state, setState] = useImmer({
		monsters: null,
	});
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => {
				setState((draft) => {
					draft.monsters = users;
				});
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		console.log(state);
	}, [state]);
	return (
		<div className="monsters-rolodex">
			<CardList monsters={state.monsters} />
		</div>
	);
};

export default MonstersRolodex;
