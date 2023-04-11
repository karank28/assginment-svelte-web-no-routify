<script lang="ts">
    import { onMount } from 'svelte';
    
    const images = [
      "./img/slide1.jpg",
      "./img/slide2.jpg",
    ];
    
    let currentIndex = 0;
    const interval = 2000;
    
    function next() {
      currentIndex = (currentIndex + 1) % images.length;
    }
    
    onMount(() => {
      const intervalId = setInterval(() => {
        next();
      }, interval);
      
      return () => clearInterval(intervalId);
    });
  </script>

<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="w-full">
    
    <div class="w-full relative text-center cursor-default drop-shadow-xl  ">
        <img class="w-full opacity-150" src="{images[currentIndex]}" alt="image description">
    </div>
    
    <div class="text-center cursor-default">
        <div class="my-5 p-3">
            <p class="text-5xl font-bold uppercase tracking-widest max-md:text-4xl max-sm:text-3xl max-sm:text-lg">The-globalbazar-story</p>
            <hr class="h-px mt-5 bg-gray-200 border-0" />
            <p class="text-xl uppercase my-1 max-sm:text-lg">Launched in october 2007</p>
            <p class="text-base font-semibold py-1 max-sm:text-base">Leading e-commerce market place with over</p>
            <p class="text-xl font-bold py-1 tracking-widest max-sm:text-base">80 Million Products Across 80+ Categories</p>
            <p class="text-lg py-1 max-sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio illo aperiam, dolorum reprehenderit veniam minima nulla iure fugit. Sapiente in libero, necessitatibus nisi distinctio dolor totam nulla illum architecto?</p>
        </div>
    </div>
</div>


  
  <!-- <div class="w-full h-screen flex justify-center items-center">
    <img src={images[currentIndex]} class="object-cover w-full h-full" />
  </div> -->
  
  