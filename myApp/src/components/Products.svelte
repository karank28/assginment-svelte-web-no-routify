<script lang="ts">
    import { productsStore } from './store';

    let productForm : boolean = true;
    function open_close_Form():void {
        productForm = !productForm;
    }

    let backdropFilterActive = false;

    let products:any = [];

    let data:any = {
        name: "",
        description: "",
        price: ""
    };

    const unsubscribe = productsStore.subscribe(value => {products = value});

    let addProduct = () => {
        const newItem = {
            name: data.name,
            description: data.description,
            price: data.price 
        };
        
        productsStore.createProduct(newItem);
        data = {
            name: "",
            description: "",
            price: ""
        };
    }

    let deleteProduct = (name: string) : void => {
        productsStore.delete(name);
    }

    let isEdit:boolean = false;
    let editProduct = newProduct => {
        isEdit = true;
        data = newProduct;
    };

    let updateProduct = (): void => {
        isEdit =!isEdit;
        productsStore.modify(data);
        data = {
            name: "",
            description: "",
            price: ""
        };
    };

</script>

<div class="w-full p-6">
    <div class="p-2 flex justify-end">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={open_close_Form} class="w-1/4 bg-sky-500 text-white font-bold text-center py-2 px-4 rounded-lg transition cursor-pointer hover:scale-110 hover:bg-amber-400 hover:text-black hover:shadow-xl max-md:w-1/2 max-sm:w-full max-sm:text-sm">Add new product</div> 
    </div>

    <div class="w-full flex justify-center {productForm? 'hidden':'flex'}">
        
        <form action="" class="backdrop-blur-sm bg-white absolute z-10 w-96 p-5 border-4 border-sky-400 shadow-5xl rounded-2xl hover:border-amber-400">
            
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div on:click={open_close_Form} class="w-full flex justify-end cursor-pointer " >
                <i class="fa-solid fa-xmark"></i>
            </div>

            <div class="my-5">
                <label for="name" class="block p-1 text-lg max-sm:text-base">Product Name</label>
                <input bind:value={data.name} type="text" id="name" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter product name" required />
            </div>
    
            <div class="my-5">
                <label for="name" class="block p-1 text-lg max-sm:text-base">Description</label>
                <textarea bind:value={data.description} id="description" rows="2" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Write product description" required />
            </div>
    
            <div class="my-5">
                <label for="name" class="block p-1 text-lg max-sm:text-base">Price</label>
                <input bind:value={data.price} type="number" id="name" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter product price" required />
            </div>
    
            <div class="mt-7 flex">
                {#if isEdit === false}
                    <input on:click|preventDefault = {addProduct} class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" type="submit" value="Submit" />
                {:else}
                    <input on:click|preventDefault = {updateProduct} class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" type="submit" value="Update" />
                {/if}
                <input on:click={open_close_Form} class="w-full bg-sky-500 text-white font-bold ms-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" type="reset" value="Cancel" />
            </div>
        </form>

    </div>

    <hr class="h-px mt-5 bg-gray-200 border-0" />

    <div class="relative overflow-visible">
        <table class="w-full text-sm text-left">
            <thead class="text-lg font-semibold max-sm:text-base">
                <tr class="border-b border-gray-200">
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody class="text-base max-sm:text-sm">
                {#each products as newproduct}
                    <tr class="border-b border-gray-200">
                        <td class="px-6 py-4">
                            {newproduct.name}
                        </td>
                        <td class="px-6 py-4">
                            {newproduct.description}
                        </td>
                        <td class="px-6 py-4">
                            {newproduct.price}
                        </td>

                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <td class="flex px-6 py-0 text-2xl text-center">
                            
                            <div on:click={() => editProduct(newproduct)} class="w-12 mx-1 border-4 border-sky-400 rounded-xl">
                                <i class="p-2 fa-regular fa-pen-to-square"></i>
                            </div>
                              
                            <div on:click={() => deleteProduct(newproduct.name)} class="w-12 mx-1 border-4 border-sky-400 rounded-xl cursor-pointer">
                                <i class="p-2 fa-regular fa-trash-can"></i>
                            </div>

                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>