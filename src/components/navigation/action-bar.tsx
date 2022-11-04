import { component$ } from '@builder.io/qwik';
import { AutoCompleteSearch } from './autocomplete-search';

export const ActionBar = component$(() => {
  return (
    <div 
      class="action-bar-wrapper grid grid-cols-4 items-start"
    >
      <div>
        <span class="text-lg">Market Place</span>
      </div>
      <div class="col-span-3 flex justify-end">
        <AutoCompleteSearch/>
      </div>
    </div>
  )
})