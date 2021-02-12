import { useWallet } from 'use-wallet'

const fetchCurrentUserAssets = (setData, userAccount) => {
	fetch(
		`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&owner=${userAccount}`,
		{
			method: 'GET',
		}
	)
		.then((response) => response.json())
		.then((data) => {
			// console.log(data)
			setData(data)
		})
		.catch((err) => {
			console.log(err)
		})
}

export default fetchCurrentUserAssets
