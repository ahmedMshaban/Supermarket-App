import { useState } from "react";

interface ProductData {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  price_id: string;
}

export function useFetch(baseUrl: string) {
  const [loading, setLoading] = useState(true);

  function get<ProductData>(url: string) {
    return new Promise<ProductData>((resolve, reject) => {
      fetch(baseUrl + url)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  function post<ProductData>(url: string, body: object) {
    return new Promise<ProductData>((resolve, reject) => {
      fetch(baseUrl + url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get, post, loading };
}
