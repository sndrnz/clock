<script lang="ts">
  import { readable } from "svelte/store";
  import Digit from "./Digit.svelte";

  type TimeDigits = {
    [key in "seconds" | "minutes" | "hours"]: {
      one: number;
      ten: number;
    };
  };

  const timer = readable(new Date(), (set) => {
    setInterval(() => {
      const date = new Date();

      set(new Date());
    }, 100);
  });

  $: digits = timeDigits($timer);
  function timeDigits(date: Date): TimeDigits {
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondsTen = Math.floor(seconds / 10);
    const secondsOne = seconds - secondsTen * 10;

    const minutesTen = Math.floor(minutes / 10);
    const minutesOne = minutes - minutesTen * 10;

    const hoursTen = Math.floor(hours / 10);
    const hoursOne = hours - hoursTen * 10;

    return {
      seconds: {
        one: secondsOne,
        ten: secondsTen,
      },
      minutes: {
        one: minutesOne,
        ten: minutesTen,
      },
      hours: {
        one: hoursOne,
        ten: hoursTen,
      },
    };
  }
</script>

<div class="flex aspect-video flex-row-reverse items-center gap-2">
  <Digit digit={digits.seconds.one} />
  <Digit digit={digits.seconds.ten} />
  <div class="text-6xl text-white">:</div>
  <Digit digit={digits.minutes.one} />
  <Digit digit={digits.minutes.ten} />
  <div class="text-6xl text-white">:</div>
  <Digit digit={digits.hours.one} />
  <Digit digit={digits.hours.ten} />
</div>
