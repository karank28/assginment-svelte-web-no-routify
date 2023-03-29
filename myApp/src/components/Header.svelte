<script lang="ts">
    let appname:string = 'myApp';
    
    let menu : boolean =true;
	function toggle():void {
      menu = !menu;
    }
    
</script>

<header class=" bg-slate-300">
    <div class="p-2 flex">
        <a href="/#" class="flex items-center">
            <i class="fa-solid fa-code h-6 sm:h-9"></i>
            <div class="px-2">
                <span class="self-center text-xl font-semibold whitespace-nowrap">{appname}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>            
        </a>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="flex-auto text-right p-3 md:hidden"  on:click={toggle}>
            <a href="/#" class=""><i class="fa-solid fa-bars text-xl"></i></a>
        </div>
    </div>

    <nav class="container flex-col p-2 text-center text-lg font-semibold md:flex md:flex-row md:w-screen md:m-0 sm:w-screen {menu? 'flex': 'hidden'}  ">
        <div class="flex-auto "><a href="/#">Home</a></div>
        <div class="flex-auto "><a href="/#">Products</a></div>
        <div class="flex-auto "><a href="/#">Contact Us</a></div>
        <div class="flex-auto "><a href="/#">About Us</a></div>
        <div class="flex-auto "><a href="/#">Admin</a></div>
    </nav>

</header>