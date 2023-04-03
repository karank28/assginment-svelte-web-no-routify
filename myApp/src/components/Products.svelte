<script lang="ts">
    export {switchPage} from 'svelte';
</script>
<div class="w-full p-6">
    <div class="p-2 flex justify-end">
        <a href="/#" class="w-1/4 bg-sky-500 text-white font-bold text-center py-2 px-4 rounded-lg transition hover:scale-110 hover:bg-amber-400 hover:text-black hover:shadow-xl max-md:w-1/2 max-sm:w-full max-sm:text-sm">Add new product</a> 
    </div>

    <hr class="h-px mt-5 bg-gray-200 border-0">

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
                <tr class="border-b border-gray-200">
                    <td class="px-6 py-4">
                        Item 1
                    </td>
                    <td class="px-6 py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore tempore quo culpa quisquam.
                    </td>
                    <td class="px-6 py-4">
                        $10
                    </td>

                    <td class="px-6 py-0 text-center">

                        <a href="/#" class="relative peer p-1 text-lg font-bold">
                            <i class="fa-solid fa-ellipsis p-1 text-white hover:text-black hover:shadow-xl border-2 bg-sky-400 rounded-full"></i>
                        </a>

                        <div class="w-24 absolute text-white text-start text-base font-semibold flex-col bg-sky-400 shadow-xl hidden peer-hover:flex hover:flex z-10">
                            <a class="p-3 hover:text-black hover:bg-amber-400" href="/#">Edit</a>
                            <a class="p-3 hover:text-black hover:bg-amber-400" href="/#">Delete</a>
                        </div>

                    </td>

                </tr>
                <tr class="border-b border-gray-200">
                    <td class="px-6 py-4">
                        Item 1
                    </td>
                    <td class="px-6 py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore tempore quo culpa quisquam.
                    </td>
                    <td class="px-6 py-4">
                        $10
                    </td>
                    <td class="px-6 py-0 text-center">

                        <a href="/#" class="relative peer p-1 text-lg font-bold">
                            <i class="fa-solid fa-ellipsis p-1 text-white hover:text-black hover:shadow-xl border-2 bg-sky-400 rounded-full"></i>
                        </a>

                        <div class="w-24 absolute text-white text-start text-base font-semibold flex-col bg-sky-400 shadow-xl hidden peer-hover:flex hover:flex z-10">
                            <a class="p-3 hover:text-black hover:bg-amber-400" href="/#">Edit</a>
                            <a class="p-3 hover:text-black hover:bg-amber-400" href="/#">Delete</a>
                        </div>

                    </td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="px-6 py-4">
                        Item 1
                    </td>
                    <td class="px-6 py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore tempore quo culpa quisquam.
                    </td>
                    <td class="px-6 py-4">
                        $10
                    </td>
                    <td class="px-6 py-0 text-center">

                        <a href="/#" class="relative peer p-1 text-lg font-bold">
                            <i class="fa-solid fa-ellipsis p-1 text-white hover:text-black hover:shadow-xl border-2 bg-sky-400 rounded-full"></i>
                        </a>

                        <div class="w-24 absolute text-white text-start text-base font-semibold flex-col bg-sky-400 shadow-xl hidden peer-hover:flex hover:flex z-10">
                            <a class="p-3 hover:text-black hover:bg-amber-400" href="/#">Edit</a>
                            <a class="p-3 hover:text-black hover:bg-amber-400" href="/#">Delete</a>
                        </div>

                    </td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="px-6 py-4">
                        Item 1
                    </td>
                    <td class="px-6 py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore tempore quo culpa quisquam.
                    </td>
                    <td class="px-6 py-4">
                        $10
                    </td>
                    <td class="px-6 py-0 text-center">

                        <a href="/#" class="relative peer p-1 text-lg font-bold">
                            <i class="fa-solid fa-ellipsis p-1 text-white hover:text-black hover:shadow-xl border-2 bg-sky-400 rounded-full"></i>
                        </a>

                        <div class="w-24 absolute text-white text-start text-base font-semibold flex-col bg-sky-400 shadow-xl hidden peer-hover:flex hover:flex z-10">
                            <a class="p-3 hover:text-black hover:bg-amber-400" href="/#">Edit</a>
                            <a class="p-3 hover:text-black hover:bg-amber-400" href="/#">Delete</a>
                        </div>

                    </td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="px-6 py-4">
                        Item 1
                    </td>
                    <td class="px-6 py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore tempore quo culpa quisquam.
                    </td>
                    <td class="px-6 py-4">
                        $10
                    </td>
                    <td class="px-6 py-0 text-center">

                        <a href="/#" class="relative peer p-1 text-lg font-bold">
                            <i class="fa-solid fa-ellipsis p-1 text-white hover:text-black hover:shadow-xl border-2 bg-sky-400 rounded-full"></i>
                        </a>

                        <div class="w-24 absolute text-white text-start text-base font-semibold flex-col bg-sky-400 shadow-xl hidden peer-hover:flex hover:flex z-10">
                            <a class="p-3 hover:text-black hover:bg-amber-400" href="/#">Edit</a>
                            <a class="p-3 hover:text-black hover:bg-amber-400" href="/#">Delete</a>
                        </div>

                    </td>
                </tr>
                <tr class="border-b border-gray-200">
                    <td class="px-6 py-4">
                        Item 1
                    </td>
                    <td class="px-6 py-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore tempore quo culpa quisquam.
                    </td>
                    <td class="px-6 py-4">
                        $10
                    </td>
                    <td class="px-6 py-0 text-center">

                        <a href="/#" class="relative peer p-1 text-lg font-bold">
                            <i class="fa-solid fa-ellipsis p-1 text-white hover:text-black hover:shadow-xl border-2 bg-sky-400 rounded-full"></i>
                        </a>

                        <div class="w-24 absolute text-white text-start text-base font-semibold flex-col bg-sky-400 shadow-xl hidden peer-hover:flex hover:flex z-10">
                            <a class="p-3 hover:text-black hover:bg-amber-400" href="/#">Edit</a>
                            <a class="p-3 hover:text-black hover:bg-amber-400" href="/#">Delete</a>
                        </div>

                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
</div>