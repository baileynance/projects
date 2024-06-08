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
			'http://schema4i.org/CreateAction.jsonld'
		],
		'@type': 'CreateAction',
		Result: {
			'@context': [
				'http://schema4i.org/DataLakeItem.jsonld',
				'http://schema4i.org/UserAccount.jsonld',
				'http://schema4i.org/OfferForPurchase.jsonld',
				'http://schema4i.org/Offer.jsonld',
				'http://schema4i.org/Organization.jsonld',
				'http://schema4i.org/PostalAddress.jsonld'
			],
			'@type': 'DataLakeItem',
			Name: 'X-PLOR Group',
			Creator: {
				'@type': 'UserAccount',
				Identifier: 'USERID-4711'
			},
			About: {
				'@type': 'Organization',
				Name: 'X-PLOR GmbH',
				Address: {
					'@type': 'PostalAddress',
					StreetAddress: 'Lindenstrasse',
					HouseNumber: '48-52',
					PostalCode: '40233',
					AddressLocality: 'Duesseldorf',
					AddressCountry: 'D'
				}
			}
		}
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export default class Storage {
    async saveList(title, items) {
        const response = fetch("https://baileynance.github.io/projects/list-ranking/json/create.json");
        const result = await response.text();
        result.Name(JSON.stringify(title));
        result.About(JSON.stringify(items));
    }

    async readList(title) {
        const response = fetch("https://baileynance.github.io/projects/list-ranking/json/read.json");
        const result = await response.text();
        return JSON.parse(result.FilterItem.title);
    }

    async updateList(title) {
        const response = fetch("https://baileynance.github.io/projects/list-ranking/json/update.json");
        const result = await response.text();
        result.FilterItem.title.About(JSON.stringify(items));
    }

    async deleteList(title) {
        const response = fetch("https://baileynance.github.io/projects/list-ranking/json/delete.json");
        const result = await response.text();
        result.FilterItem.title.About("");
    }
}