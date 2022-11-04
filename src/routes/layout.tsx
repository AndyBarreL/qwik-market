import { component$, Slot } from '@builder.io/qwik';
import { ActionBar } from '~/components/navigation/action-bar';

export default component$(() => {
  return (
    <div class="flex-col items-start">
      <header class="py-2 px-3 mb-5">
        <ActionBar/>
      </header>
      <main>
        <Slot />
      </main>
    </div>
  );
});
