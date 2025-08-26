import { useQuery } from '@tanstack/react-query';

const useRandom = () => {
	
	const API = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';
	
	const getCriptoNumber = async (): Promise<number> => {
		const response = await fetch(API);
		const data = await response.json();
		return Number(data);
	};
	
	const randomQuery = useQuery({
		queryKey: ['randomNumber'],
		queryFn: getCriptoNumber
	});
	
	return randomQuery
}

export default useRandom;
