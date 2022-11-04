import { useResource$, useStore } from "@builder.io/qwik";
import { getCoin } from './market.actions';

export const coinsList = () => {
  const store = useStore({
    symbolList: [
      "BTC-USDT",
      "ETH-USDT",
      "APE-USDT",
      "XRP-USDT",
      "GALA-USDT",
      "KLAY-USDT",
      "AVAX-USDT",
      "LTC-USDT"
    ],
  });

  const result = useResource$<any>(({ track, cleanup }) => {
  const coinsList = track(() => store.symbolList);

  const abortController = new AbortController();
  cleanup(() => abortController.abort('cleanup'));

  const promises = coinsList.map(async (coin) => await getCoin(coin));
  return Promise.all(promises);
  });

  return result;
}