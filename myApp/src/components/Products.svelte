<script lang="ts">
    import * as _ from 'lodash';
    import { productsStore } from '../Stores/ProductStore';

    let back_screen : boolean = false

    function clear_addProduct_popup():void{
        p_name = '';
        p_description = ''
        price = ''
    }

    function clear_error():void{
        error_price = ''
        error_name = ''
        error_description = ''
    }

    function clear_updateProduct_popup():void{
        update_p_name = ''
        update_p_description = ''
        update_price = ''
    }

    function clear_deleteProduct_popup():void{
        delete_p_id = 0
        delete_p_name = ''
        delete_p_error = ''
        delete_view = ''
    }
    
    let add_product_popup : boolean = false;   
    let delete_product_popup : boolean = false;   
    let update_product_popup : boolean = false;
    
    function popup(operation:string):void{
        if(operation === 'insert'){
            add_product_popup = !add_product_popup;
            clear_addProduct_popup();
            clear_error();
        }
        if(operation === 'delete'){
            delete_product_popup = !delete_product_popup;
            clear_deleteProduct_popup();
        }
        if(operation === 'update'){
            update_product_popup = !update_product_popup;
            clear_updateProduct_popup();
            clear_error();
        }
        back_screen = !back_screen;
    }

    let p_name = '';
    let p_description = ''
    let price = ''

    let error_name = ''
    let error_description = ''
    let error_price = ''
    
    function Validation(p_name,p_description,price):boolean{
        let hasError:boolean = true;

        if(p_name === ''){
            error_name = '*This field is required!!';
            hasError = false;
        } else if (p_name.length < 3 || p_name.length >= 20 ){
            error_description = 'Name must be between 3 to 20!!';
            hasError = false;
        }

        if(p_description === ''){
            error_description = '*This field is required!!';
            hasError = false;
        } else if (p_description.length < 5 || p_description.length >= 70 ){
            error_description = 'Description must be between 5 to 70!!';
            hasError = false;
        }

        if(price === ''){
            error_price = '*This field is required!!';
            hasError = false;
        } else if ( isNaN(Number(price))){
            error_price = 'Invalid Price!!';
            hasError = false;
        }
        return hasError;
    }

    // add product 
    function addProduct(){
        clear_error();

        if (Validation(p_name,p_description,price)){
            let p_id = 1;
            productsStore.subscribe(value => {
                if(_.last(value) != undefined){
                    p_id = (_.last(value)).p_id + 1;
                }
            });
            productsStore.update(users => [...users , {p_id , p_name , p_description , price}]);
            popup('insert');
        }
    }

    // update product
    let update_p_id = 0;
    let update_p_name = '';
    let update_p_description = '';
    let update_price = '';

    function find_product(id):void{
        let product_Update = _.find(products,function(product){
            if (product.p_id == id){
                update_p_id = id
                update_p_name = product.p_name;
                update_p_description = product.p_description;
                update_price = product.price;
            }
        });   
    }

    function updateProduct():void{
        if (Validation(update_p_name,update_p_description,update_price)){
            productsStore.update(products => {
                let updatedProduct = _.find(products, { p_id : update_p_id });
                if (updatedProduct) {
                    updatedProduct.p_name = update_p_name;
                    updatedProduct.p_description = update_p_description;
                    updatedProduct.price = update_price;
                }
                update_p_id = 0;
                return products;
            });
            popup('update')
        }
    }
    
    // delete product 
    let delete_p_id = 0;
    let delete_p_name = '';
    let delete_p_error = '';
    let delete_view = '';

    function find_delete_product_id(id):void{
        delete_p_id = id;  
        let product_Update = _.find(products,function(product){
            if(product.p_id == id){
                delete_view = product.p_name
            }
        });  
    }

    function deleteProduct():void{
        productsStore.update(products => {
            let _delete_product = _.find(products, { p_id : delete_p_id });
            if(_delete_product.p_name === delete_p_name){
                _.remove(products, { p_id: delete_p_id });
                popup('delete');
            }
            else{
                delete_p_error = 'Invalid Name!!';
            }
            return products;
        });
    }

    let products:any;
    productsStore.subscribe(value => {
        products = value
    });

</script>

<div class="w-full p-6">
    <div class="p-2 flex justify-end z-[-1]"> 
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={()=>popup('insert')} class="w-1/4 bg-sky-500 text-white font-bold text-center py-2 px-4 rounded-lg transition cursor-pointer hover:scale-110 hover:bg-amber-400 hover:text-black hover:shadow-xl max-md:w-1/2 max-sm:w-full max-sm:text-sm">Add new product</div> 
    </div>

    <hr class="h-px my-5 bg-gray-200 border-0 max-sm:hidden" />

    <div class="">
        <table class="productTable w-full text-sm text-left">
            <thead class="product_th text-lg font-semibold max-sm:text-base">
                <tr class="border-b-2 border-gray-500">
                    <th scope="col" class="px-6 py-3 fw-bold">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Description
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Actions
                    </th>
                </tr>
            </thead>

            <tbody>
                {#each products as product}
                    <tr class="product_data border-b border-gray-500 max-sm:border-b-2 max-sm:border-gray-500 max-sm:mb-12">
                        <td data-th="Name" class="px-6 py-4">
                            {product.p_name}
                        </td>
                        <td data-th="Description" class="px-6 py-4">
                            {product.p_description}
                        </td>
                        <td data-th="Price" class="px-6 py-4 max-sm:font-bold">
                            ${product.price}
                        </td>

                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <td data-th="Actions" class="flex px-6 py-0 text-center items-center max-sm:text-base">
                            
                            <div  on:click={() => {popup('update'); find_product(product.p_id);}} class="w-12 me-1 text-2xl text-sky-800 hover:text-black hover:bg-sky-400 rounded-xl transition duration-400 cursor-pointer max-sm:me-0 max-sm:text-base">
                                <i class="p-2 fa-regular fa-pen-to-square"></i>
                            </div>
                            
                            <div on:click={() => {popup('delete'); find_delete_product_id(product.p_id);}} class="w-12 text-2xl text-red-800 hover:text-black hover:bg-sky-400 rounded-xl transition duration-400 cursor-pointer max-sm:text-base" >
                                <i class="p-2 fa-regular fa-trash-can"></i>
                            </div>

                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="{back_screen? '':'hidden' } fixed bottom-0 left-0 w-full h-full bg-slate-500 bg-opacity-75 flex justify-center">

    <!-- addproduct -->
    <div class="w-full mt-48 flex justify-center {add_product_popup? '':'hidden' }">
        <div class="h-auto bg-white absolute w-96 p-5 border-4 border-sky-400 shadow-5xl rounded-2xl hover:border-amber-400">
            <form action="#">
                <div class="my-3">
                    <label for="name" class="block p-1 text-lg max-sm:text-base">Product Name</label>
                    <input bind:value={p_name} type="text" id="productname" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter product name"/>
                    <div class="py-1 text-red-800 text-xs">
                        {error_name}
                    </div>    
                </div>
                <div class="my-3">
                    <label for="description" class="block p-1 text-lg max-sm:text-base">Description</label>
                    <textarea bind:value={p_description} id="productdescription" rows="2" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Write product description"  />
                    <div class="py-1 text-red-800 text-xs">
                        {error_description}
                    </div>
                </div>
                <div>
                    <label for="price" class="block p-1 text-lg max-sm:text-base">Price</label>
                    <input bind:value={price} type="text" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter product price" />
                    <div class="py-1 text-red-800 text-xs">
                        {error_price}
                    </div>    
                </div>
                <div class="mt-4 flex">
                    <button on:click = {addProduct} class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm disabled:opacity-40" type="button">Add</button>

                    <button on:click={()=>popup('insert')} type="button" class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm">Cancel</button>
                </div>
            </form>
        </div>
    </div>

    <!-- update product -->
    <div class="w-full mt-48 flex justify-center {update_product_popup? '':'hidden' }">
        <div class="h-auto bg-white absolute w-96 p-5 border-4 border-sky-400 shadow-5xl rounded-2xl hover:border-amber-400">
            <form action="#">
                <div class="my-3">
                    <label for="name" class="block p-1 text-lg max-sm:text-base">Product Name</label>
                    <input bind:value={update_p_name} type="text" id="productname" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter product name"/>
                    <div class="py-1 text-red-800 text-xs">
                        {error_name}
                    </div>    
                </div>
                <div class="my-3">
                    <label for="description" class="block p-1 text-lg max-sm:text-base">Description</label>
                    <textarea bind:value={update_p_description} id="productdescription" rows="2" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Write product description"  />
                    <div class="py-1 text-red-800 text-xs">
                        {error_description}
                    </div>
                </div>
                <div>
                    <label for="price" class="block p-1 text-lg max-sm:text-base">Price</label>
                    <input bind:value={update_price} type="text" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter product price" />
                    <div class="py-1 text-red-800 text-xs">
                        {error_price}
                    </div>    
                </div>
                <div class="mt-4 flex">
                    <button on:click = {updateProduct} class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm disabled:opacity-40" type="button">Update</button>

                    <button on:click={()=>popup('update')} type="button" class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm">Cancel</button>
                </div>
            </form>
        </div>
    </div>
    
    <!-- delete product  -->
    <div class="w-full mt-48 flex justify-center {delete_product_popup? '':'hidden' }">
        <div class="h-auto bg-white absolute w-96 p-5 border-4 border-sky-400 shadow-5xl rounded-2xl hover:border-amber-400">
            <form action="#">
                <div class="my-3">
                    <label for="name" class="block p-1 text-lg max-sm:text-base">Confirm Product Name</label>
                    <input bind:value={delete_p_name} type="text" id="productname" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter product name"/>
                    <div class="py-1 text-red-800 text-xs">
                        {delete_p_error}
                    </div>    
                </div>
                <div class="mt-4 flex">
                    <button on:click = {deleteProduct} class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm disabled:opacity-40" type="button">Delete</button>

                    <button on:click={()=>popup('delete')} type="button" class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</div>
