function charactersState(state, setter) {
	const initialCharacters = {
		list: [],
	};
	const oldCharacters = state.characters || {};
	const characters = { ...initialCharacters, ...oldCharacters };

	function updateState() {
		setter({ ...state, characters: characters });
	}

	function loadCharacters(list) {
		characters.list = list;
		updateState();
	}

	return {
		...characters,
		loadCharacters,
	};
}

export default charactersState;
