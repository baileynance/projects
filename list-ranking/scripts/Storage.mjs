const url = 'https://json-storage-api.p.rapidapi.com/datalake';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': 'fe21f57b6fmsh56d1e90dbddccd3p12a417jsnd87e765ff938',
		'x-rapidapi-host': 'json-storage-api.p.rapidapi.com',
		'Content-Type': 'application/json'
	},
	body: {
		'@context': [
			'http://schema4i.org/Thing.jsonld',
			'http://schema4i.org/Action.jsonld',
			'http://schema4i.org/SearchAction.jsonld'
		],
		'@type': 'DeleteAction',
		Object: {
			'@context': [
				'http://schema4i.org/Thing.jsonld',
				'http://schema4i.org/Filter',
				'http://schema4i.org/DataLakeItem',
				'http://schema4i.org/UserAccount'
			],
			'@type': 'Filter',
			FilterItem: {
				'@type': 'DataLakeItem',
				Creator: {
					'@type': 'UserAccount',
					Identifier: 'USERID-4711'
				},
				Name: 'X-PLOR Group',
				Identifier: 'USERID-4711_07821380-a9ea-11ed-bc53-59e8e73b3d77',
				About: {
					'@type': 'Organization'
				}
			}
		}
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


