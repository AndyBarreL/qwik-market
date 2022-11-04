import { component$ } from '@builder.io/qwik';
import { CoinState } from '~/api/market/market.model';

export const CardComponent = component$((props: { data: CoinState }) => {
  const { data } = props;
  return (
    <div class="card-wrapper">
      <div class="flex justify-between">
        <span>{data.symbol} - ${Number(data.averagePrice).toFixed(3)}</span>
        <a href="">load More</a>
      </div>

      <Controls/>
    </div>
  )
})

export const Controls = component$(() => (
  <div class="flex justify-around controls">
    <button class="sell">Sell</button>
    <button>View More</button>
    <button class="buy">Buy</button>
  </div>
))
