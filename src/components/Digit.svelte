<script lang="ts">
  import { fly } from "svelte/transition";
  import { cubicInOut, bounceOut, backInOut } from "svelte/easing";

  export let digit: number;

  let digitContainer: HTMLDivElement;
</script>

<div
  class="relative h-48 w-36 overflow-hidden rounded-2xl"
  bind:this={digitContainer}
>
  {#key digit}
    <div
      in:fly={{
        y: -digitContainer.offsetHeight,
        opacity: 1,
        easing: backInOut,
        duration: 500,
      }}
      class="absolute grid h-full w-full cursor-pointer select-none place-items-center bg-main p-8 text-6xl font-extralight text-white"
    >
      {digit}
    </div>
  {/key}
  {#key digit}
    <div
      out:fly={{
        y: digitContainer.offsetHeight,
        opacity: 1,
        easing: backInOut,
        duration: 500,
      }}
      class="grid h-full w-full cursor-pointer select-none place-items-center bg-main p-8 text-6xl font-extralight text-white"
    >
      {digit}
    </div>
  {/key}
  <div
    class="absolute top-0 left-0 bottom-0 right-0 z-50 shadow-neumorphism-inset"
  />
</div>
