import { component$, Resource } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { CoinState } from '~/api/market/market.model';
import { coinsList } from '~/api/market/market.store';
import { CardComponent } from '~/components/common/card';

export default component$(() => {
  const list = coinsList();
  return (
    <div class="grid grid-cols-4">
      <Resource
        value={list}
        onPending={() => <div>Loading...</div>}
        onResolved={(coins: CoinState[]) => (
          <>{coins.map((coin) => (<CardComponent data={coin} />))}</>
        )}
      />
    </div>
  )
})

export const head: DocumentHead = {
  title: 'App',
};