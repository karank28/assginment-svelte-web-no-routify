<script lang="ts">
let appname:string = 'myApp';

import Home from "./components/Home.svelte";
</script>


<header>
	<div class="border-b-4">
		<a href="" class="flex items-center">
			<i class="fa-solid fa-code mx-2"></i>
			<div class="">
				<span class="self-center text-xl font-semibold whitespace-nowrap">{appname}</span>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>
		</a>
	</div>

	<nav class="border-b-4">
		<div class="container items-center justify-between mx-auto">
			<div class="w-full flex-wrap md:block md:w-auto" id="navbar-default">
				<ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
					<li>
					<a href="#" class="block py-2 pl-3 pr-4 md:p-0" aria-current="page">Home</a>
					</li>
					<li>
						<a href="#" class="block py-2 pl-3 pr-4 md:p-0">Products</a>
					</li>
					<li>
						<a href="#" class="block py-2 pl-3 pr-4 md:p-0">Contact Us</a>
					</li>
					<li>
						<a href="#" class="block py-2 pl-3 pr-4 md:p-0">About Us</a>
					</li>
					<li>
						<a href="#" class="block py-2 pl-3 pr-4 md:p-0">Admin</a>
					</li>
					<li>
						<a href="#" class="block py-2 pl-3 pr-4 md:p-0">Admin2</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>  

<main>
	<Home />
</main>

<footer class="footer border-t-4">
    <div class="content has-text-centered">
        <p>
            All rights reserved to {appname}
        </p>
    </div>
</footer>

