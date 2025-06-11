import { Item } from "../components/item";

const API_BASE_URL = "https://app.wewantwaste.co.uk/api/skips";

export const getItems = async (
  postcode: string,
  area: string
): Promise<Array<Item>> => {
  const response = await fetch(
    `${API_BASE_URL}/by-location?postcode=${postcode}&area=${area}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
