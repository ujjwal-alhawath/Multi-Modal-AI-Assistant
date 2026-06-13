import { prevUser } from "./context/UserContext";

export async function query() {
	const response = await fetch(
		"https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell",
		{
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ "inputs": prevUser.prompt }),
		}
	);
	const result = await response.blob();
	return result;
}
