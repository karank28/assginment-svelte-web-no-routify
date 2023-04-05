<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    import { productsStore } from '../Stores/ProductStore';

    export let isOpen = false;
    function closepopForm():void {
        isOpen = false;
        data = {
            name: "",
            description: "",
            price: ""
        };
    }

    // export let isDelete = false;
    // function alertDelete():void{
    //     isDelete = true;
    // }

    let products:any = [];

    interface Product {
        name: string;
        description: string;
        price: string;
    }

    let data: Product = {
        name: "",
        description: "",
        price: ""
    };

    let errors = {
        name: '',
        description: '',
        price: '',
    };

    const unsubscribe = productsStore.subscribe(value => {products = value});

    let addProduct = () => {

        let hasError = false;
        if (!data.name) {
            errors.name = 'This field is required';
            hasError = true;
        } else {
            errors.name = '';
        }
        if (!data.description) {
            errors.description = 'This field is required';
            hasError = true;
        } else {
            errors.description = '';
        }
        if (!data.price) {
            errors.price = 'This field is required';
            hasError = true;
        } else {
            errors.price = '';
        }
        if (hasError) {
            return;
        }

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
        dispatch('submit', data);
        closepopForm();
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
        productsStore.modify();
        data = {
            name: "",
            description: "",
            price: ""
        };
        closepopForm();
    };
</script>


{#if isOpen }
<div class="fixed bottom-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center">
    <div class="w-full mt-48 flex justify-center">
        
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <form action="" class="h-auto bg-white absolute w-96 p-5 border-4 border-sky-400 shadow-5xl rounded-2xl hover:border-amber-400" id="Product-form">

            <div class="my-3">
                <label for="name" class="block p-1 text-lg max-sm:text-base">Product Name</label>
                <input bind:value={data.name} type="text" id="product-name" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter product name"/>
                {#if errors.name}
                    <div id="name-error" class="py-1 text-red-800 text-xs">
                        {errors.name}
                    </div>
                {/if}
            </div>
    
            <div class="my-3">
                <label for="name" class="block p-1 text-lg max-sm:text-base">Description</label>
                <textarea bind:value={data.description} id="description" rows="2" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Write product description"  />
                {#if errors.description}
                    <div id="des-error" class="py-1 text-red-800 text-xs">
                        {errors.description}
                    </div>
                {/if}
            </div>
    
            <div class="my-3">
                <label for="name" class="block p-1 text-lg max-sm:text-base">Price</label>
                <input bind:value={data.price} type="number" id="name" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter product price"  />
                {#if errors.price}
                    <div id="price-error" class="py-1 text-red-800 text-xs">
                        {errors.price}
                    </div>
                {/if}
            </div>
    
            <div class="mt-4 flex">
                {#if isEdit === false}
                    <input on:click|preventDefault = {addProduct} class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" type="submit">
                {:else}
                    <input on:click|preventDefault = {updateProduct} class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" type="submit" value="Update" />
                {/if}
                <input on:click={closepopForm} class="w-full bg-sky-500 text-white font-bold ms-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" type="reset" value="Cancel" />
            </div>

        </form>

    </div>
</div>
{/if}

<div class="w-full p-6">
    <div class="p-2 flex justify-end">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click|preventDefault = {() => isOpen = true } class="w-1/4 bg-sky-500 text-white font-bold text-center py-2 px-4 rounded-lg transition cursor-pointer hover:scale-110 hover:bg-amber-400 hover:text-black hover:shadow-xl max-md:w-1/2 max-sm:w-full max-sm:text-sm">Add new product</div> 
    </div>

    <hr class="h-px mt-5 bg-gray-200 border-0" />

    <div class="">
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
                            ${newproduct.price}
                        </td>

                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <td class="flex px-6 py-0 text-2xl text-center items-center">
                            <div on:click|preventDefault ={() => {isOpen=true; editProduct(newproduct)}} class="w-12 me-1 text-sky-800 hover:text-black hover:bg-sky-400 rounded-xl transition duration-400 cursor-pointer">
                                <i class="p-2 fa-regular fa-pen-to-square"></i>
                            </div>
                              
                            <div on:click={() => deleteProduct(newproduct.name)} class="w-12 text-red-800 hover:text-black hover:bg-sky-400 rounded-xl transition duration-400 cursor-pointer">
                                <i class="p-2 fa-regular fa-trash-can"></i>
                            </div>

                        </td>
                    </tr>
                    <!-- {#if isDelete}
                        <div class="fixed bottom-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center ">
                            <div class="w-full mt-48 flex justify-center">
                                
                                <form action="" class="bg-white absolute w-96 p-5 border-4 border-sky-400 shadow-5xl rounded-2xl hover:border-amber-400">

                                    <div class="my-5">
                                        <label for="delete" class="block p-1 text-lg max-sm:text-base">Product Name</label>
                                        <input type="text" id="del_product_name" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter product name" required />
                                    </div>
                            
                                    <div class="mt-7 flex">
                                        <input on:click={() => deleteProduct(newproduct.name)} class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" type="submit" value="Delete">
                                        <input on:click={() => isDelete = false} class="w-full bg-sky-500 text-white font-bold ms-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" type="reset" value="Cancel" />
                                    </div>
                                </form>

                            </div>
                        </div>
                    {/if} -->
                {/each}
            </tbody>
        </table>
    </div>
</div>