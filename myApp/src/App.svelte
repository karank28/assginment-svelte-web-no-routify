<script lang="ts">

	
	import Home from "./components/Home.svelte";
	import Products from "./components/Products.svelte";
	import AboutUs from "./components/AboutUs.svelte";
	import ContactUs from "./components/ContactUs.svelte";
	import Admin from "./components/Admin.svelte";
	import { NavigationTab } from './enum/navigationTabs';
  	import { currentTab } from "./Stores/GlobalStore";

	$currentTab = NavigationTab.Home

	let showNavbar:boolean = false;
	function toggleNavbar() {
	  showNavbar = !showNavbar;
	}

	function switchPage(tab: NavigationTab) {
		currentTab.set(tab)
		showNavbar = !showNavbar;
	}

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<header class="w-full fixed top-0 z-10">
	<nav class="items-center justify-between flex-wrap bg-sky-500">
		<div class="w-full flex flex-shrink-0 items-center text-white mr-6 justify-between">
			<div class="text-2xl p-5">
				<div on:click={() => switchPage(NavigationTab.Home)} class="hover:text-amber-400 cursor-pointer">
					<div class="flex items-center transition hover:translate-x-2 hover:scale-110">
						<i class="fa-solid fa-store mx-2"></i>
						<p class="font-semibold">Global Bazar</p>
					</div>
				</div>
			</div>
		
			<div class="block lg:hidden p-5 transition-all">
				<button class="flex px-3 py-2 border rounded text-white border-2 border-white hover:text-amber-400 hover:border-amber-400 transition-all"
				on:click={toggleNavbar}>
					<i class="fa-solid fa-bars text-xl"><title>Menu</title></i>
				</button>
			</div>
	  </div>
	  
	  <div class="{showNavbar? 'block': 'hidden'} w-full block lg:text-center flex-grow lg:flex lg:items-center lg:w-auto p-0" id="Menu">
		
		<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
			<div on:click={() => switchPage(NavigationTab.Home)} class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">Home</div>
		  </div>

		<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
			<div on:click={() => switchPage(NavigationTab.Products)} class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">Products</div>
		</div>

		<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
			<div on:click={() => switchPage(NavigationTab.About)} class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">About Us</div>
		</div>

		<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
			<div on:click={() => switchPage(NavigationTab.ContactUs)} class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">Contact Us</div>
		</div>

		<div class="flex-auto p-0 cursor-pointer lg:hover:shadow-lg">
			<div on:click={() => switchPage(NavigationTab.Admin)} class="w-full block lg:inline-block text-lg font-semibold text-white p-3 transition duration-400 lg:hover:bg-amber-400 hover:text-black max-lg:hover:text-amber-400 lg:hover:-translate-y-1 lg:hover:scale-110 max-lg:ml-5">Admin</div>
		</div>
	  </div>
	</nav>
</header>

<main>

	{#if $currentTab === NavigationTab.Home}
  		<Home />
	{:else if $currentTab === NavigationTab.Products}
		<Products />
	{:else if $currentTab === NavigationTab.About}
		<AboutUs />
	{:else if $currentTab === NavigationTab.ContactUs}
		<ContactUs />
	{:else if $currentTab === NavigationTab.Admin}
		<Admin />
	{/if}

</main>

<footer class="w-full inset-x-0 bottom-0 fixed bg-sky-500 text-white font-semibold">
    <div class="p-5 text-lg max-md:text-center max-sm:text-center">
        <span>© 2023 <a href="/#" class="hover:underline">Global Bazar</a>. All Rights Reserved.</span>
    </div>
</footer>