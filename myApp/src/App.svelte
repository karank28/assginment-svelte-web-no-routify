<script lang="ts">
	let appname:string = 'myApp';
	
	import Header from "./components/Header.svelte";

	import Home from "./components/Home.svelte";
	import Products from "./components/Products.svelte";
	import AboutUs from "./components/AboutUs.svelte";
	import ContactUs from "./components/ContactUs.svelte";

	import Footer from "./components/Footer.svelte";

</script>


<main>
	<Header />
	<Home />
	<Products />
	<AboutUs />
	<ContactUs />
	<Footer />
</main>

