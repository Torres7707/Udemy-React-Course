import React, { useEffect } from 'react';
import { useImmer } from 'use-immer';
import CardList from './CardList/CardList';
import SearchBox from './SearchBox/SearchBox';

import './MonstersRolodex.scss';

const MonstersRolodex = (props) => {
	const [state, setState] = useImmer({
		monsters: [],
		searchFields: '',
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
	const handleChange = (e) => {
		setState((draft) => {
			draft.searchFields = e.target.value;
		});
	};
	return (
		<div className="monsters-rolodex">
			<h1>Monsters Rolodex</h1>
			<SearchBox placeholder="search monsers" handleChange={handleChange} />
			<CardList
				monsters={state.monsters.filter((monster) =>
					monster.name.toLowerCase().includes(state.searchFields.toLowerCase())
				)}
			/>
		</div>
	);
};

export default MonstersRolodex;
