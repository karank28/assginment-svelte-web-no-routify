<script lang="ts">
  let appname:string = 'myApp';
    
  let menu : boolean =true;
  function toggle():void {
    menu = !menu;
  }
    
</script>

<div class="bg-slate-300 sticky top-0 right-0 left-0">
  
  <div class="container mx-auto flex p-5 justify-start items-center">
    
    <div class="px-2">
      <i class="fa-solid fa-code h-6"></i>
    </div>
    
    <div class="px-2">
      <span class="text-xl font-semibold whitespace-nowrap">{appname}</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>  

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="flex-auto text-right p-3 md:hidden"  on:click={toggle}>
      <a href="/#" class=""><i class="fa-solid fa-bars text-xl"></i></a>
    </div>

  </div>

  <nav class="container flex-col p-2 text-center text-lg font-semibold md:flex md:flex-row md:w-screen md:m-0 sm:w-screen {menu? 'flex': 'hidden'}  ">
    <div class="flex-auto "><a href="/#">Home</a></div>
    <div class="flex-auto "><a href="/#">Products</a></div>
    <div class="flex-auto "><a href="/#">About Us</a></div>
    <div class="flex-auto "><a href="/#">Contact Us</a></div>
    <div class="flex-auto "><a href="/#">Admin</a></div>
  </nav>

</div>
<!-- <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <a href="#" class="text-white">Logo</a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false" id="mobile-menu">
            <span class="sr-only">Open main menu</span>
            Heroicon name: menu
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  
    Mobile menu, show/hide based on menu state.
    <div class="md:hidden" id="mobile-menu-dropdown">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
        <a href="#" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
        <a href="#" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
      </div>
    </div>
  </nav> -->
  
 