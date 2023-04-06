<script lang="ts">
	import { onMount } from 'svelte';
	
	import Home from "./components/Home.svelte";
	import Products from "./components/Products.svelte";
	import AboutUs from "./components/AboutUs.svelte";
	import ContactUs from "./components/ContactUs.svelte";
	import Admin from "./components/Admin.svelte";

	let myApp:string ='Global Bazar';
	let tab_home:string = 'Home';
	let tab_products:string = 'Products';
	let tab_aboutUs:string = 'About Us';
	let tab_contactUs:string = 'Contact Us';
	let tab_admin:string = 'Admin';

	// navigation 
	let masterPage = 'Home';
  
  	function switchPage(_masterPage) {
    	masterPage = _masterPage;
  	}

	// header
	let navbar = false;

	function toggleNavbar(): void {
		const NavbarMenu = document.getElementById('Menu');
		navbar = !navbar;
		if (navbar) {
			NavbarMenu.classList.add('block');
			NavbarMenu.classList.remove('hidden');
		} else {
			NavbarMenu.classList.add('hidden');
			NavbarMenu.classList.remove('block');
		}
	}

	onMount(() => {
		const NavbarMenu = document.getElementById('Menu');
		NavbarMenu.classList.add('hidden');
	});

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<!-- master page  -->
<!-- header  -->
<header class="w-full fixed top-0 z-10">
	<nav class="items-center justify-between flex-wrap bg-sky-500">
	  <div class="w-full flex flex-shrink-0 items-center text-white mr-6 justify-between">
		
		<div class="text-2xl p-5">
		  <div on:click = { () => switchPage('Home') } class="hover:text-amber-400 cursor-pointer">
			<div class="flex items-center transition hover:translate-x-2 hover:scale-110">
			  <i class="fa-solid fa-store mx-2"></i>
			  <p class="font-semibold">{myApp}</p>
			</div>
		</div>
		</div>
		
		<div class="block lg:hidden p-5 transition-all">
		  <button class="flex px-3 py-2 border rounded text-white border-2 border-white hover:text-amber-400 hover:border-amber-400 transition-all"
			on:click={() => toggleNavbar()}>
			<i class="fa-solid fa-bars text-xl"><title>Menu</title></i>
		  </button>
		</div>
  
	  </div>
	  
	  <div class="w-full block lg:text-center flex-grow lg:flex lg:items-center lg:w-auto p-0" id="Menu">
		
		<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
			<div on:click = { () => switchPage('Home') } class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">{tab_home}</div>
		</div>
		<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
			<div on:click = { () => switchPage('Products') } class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">{tab_products}</div>
		</div>
		<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
			<div on:click = { () => switchPage('About') } class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">{tab_aboutUs}</div>
		</div>
		<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
			<div on:click = { () => switchPage('ContactUs') } class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">{tab_contactUs}</div>
		</div>
		<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
			<div on:click = { () => switchPage('Admin') } class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">{tab_admin}</div>
		</div>
		
	  </div>
	</nav>
</header>


<!-- Pages    -->
<main>

	{#if masterPage == 'Home'}
  		<Home />
	{:else if masterPage === 'Products'}
		<Products />
	{:else if masterPage === 'About'}
		<AboutUs />
	{:else if masterPage === 'ContactUs'}
		<ContactUs />
	{:else if masterPage === 'Admin'}
		<Admin />
	{/if}

</main>

<!-- footer  -->
<footer class="w-full inset-x-0 bottom-0 fixed bg-sky-500 text-white font-semibold">
    <div class="p-5 text-lg max-md:text-center max-sm:text-center">
        <span>© 2023 <a href="/#" class="hover:underline">{myApp}</a>. All Rights Reserved.</span>
    </div>
</footer>