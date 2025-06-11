import { useState, useEffect } from "react";
import { Item, ItemClass } from "../components/item";
import { getItems } from "../services";

export const useGetItems = (
  postcode: string = "NR32",
  area: string = "Lowestoft"
) => {
  const [items, setItems] = useState<ItemClass[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getItems(postcode, area);
        setItems(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while fetching items"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [postcode, area]);

  const refetch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await getItems(postcode, area);
      setItems(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while fetching items"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    items,
    loading,
    error,
    refetch,
  };
};
