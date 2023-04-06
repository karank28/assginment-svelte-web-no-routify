<script lang="ts">
    import Products from './Products.svelte';
    import ContactUs from './ContactUs.svelte';

    import { product_countStore } from "../Stores/ProductCount";
    import { contactUs_countStore } from "../Stores/ContactUsCount";

    let product_count: number;
    product_countStore.subscribe((value) => (product_count = value));

    let contactUs_count: number;
    contactUs_countStore.subscribe((value) => (contactUs_count = value));

    let showProducts = false;
    let showContactUs = false;
    
    function viewProducts() {
        showProducts = true;
    }

    function viewContactus(){
        showContactUs = true;
    }

</script>

{#if !showProducts && !showContactUs}
<div class="w-full p-6">

    <div class="flex justify-between text-center max-sm:flex-col max-sm:justify-center max-md:my-2 max-sm:my-0 max-sm:items-center">
        
        <div class="w-80 h-80 mx-3 p-6 border-4 border-sky-400 rounded-2xl flex flex-col justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl hover:border-amber-400 max-md:h-min max-sm:w-full max-sm:h-min max-sm:my-2 max-sm:p-3 max-sm:border-2 max-sm:flex-row">
            <div class="w-full flex-rows p-2 justify-start items-center mb-10 max-sm:mb-0">
                <p class="text-xl font-bold tracking-tight max-sm:text-base">Product Count</p>
                <p class="text-7xl text-center font-bold text-sky-400 transition duration-400 ease-in-out hover:scale-150 hover:text-amber-400 max-sm:text-4xl max-sm:text-2xl">{product_count}</p>
            </div>
            
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={viewProducts} class="w-full flex justify-center items-center bg-sky-500 text-white font-bold py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-110 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:h-20 max-sm:m-0 max-sm:hover:-translate-x-3">View All</div>  
            
        </div>
        
        <div class="w-80 h-80 mx-3 p-6 border-4 border-sky-400 rounded-2xl flex flex-col justify-center items-center transition duration-400 cursor-default hover:bg-slate-100 hover:shadow-xl hover:border-amber-400 max-md:h-min max-sm:w-full max-sm:h-min max-sm:my-2 max-sm:p-3 max-sm:border-2 max-sm:flex-row">
            <div class="w-full flex-rows p-2 justify-start items-center mb-10 max-sm:mb-0">
                <p class="text-xl font-bold tracking-tight max-sm:text-base">Contact Us Count</p>
                <p class="text-7xl text-center font-bold text-sky-400 transition duration-400 ease-in-out hover:scale-150 hover:text-amber-400 max-sm:text-4xl max-sm:text-2xl">{contactUs_count}</p>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={viewContactus} class="w-full flex justify-center items-center bg-sky-500 text-white font-bold py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-110 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:h-20 max-sm:m-0 max-sm:hover:-translate-x-3">Contact us now</div>  
        </div>
        
    </div>

    <div class="my-5 p-3 max-md:text-center max-sm:text-center cursor-default">
        <p class="text-xl tracking-widest max-sm:text-lg">Explore</p>
        <p class="text-5xl font-bold uppercase py-1 max-sm:text-3xl">Top Brands</p>
        <p class="text-lg py-1 max-sm:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptatem voluptatibus odio ex animi sunt. Officiis explicabo et quam! Voluptates officia dignissimos voluptas totam repudiandae veritatis dolor laboriosam doloribus dolores?</p>
    </div>

</div>

{:else if showProducts}
    <Products />
{:else if showContactUs}
    <ContactUs />
{/if}