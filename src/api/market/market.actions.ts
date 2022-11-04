import { CoinState } from "./market.model";

export const getCoin = async (symbol: string): Promise<CoinState> =>
  await fetch(`https://api.kucoin.com/api/v1/market/stats?symbol=${symbol}`)
    .then((response) => {
      return response.json();
    })
    .then((parsedResponse) => {
      return parsedResponse.data;
    });