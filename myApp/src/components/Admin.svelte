<script lang="ts">
    import { ContactUsStore } from "../Stores/ContactStore";
    export let items:any = [];

    const unsubscribe = ContactUsStore.subscribe(value => {items = value});

</script>
<div class="w-full p-6">

    <div class="relative overflow-x-auto">
        <table class="adminTable w-full text-sm text-left">
            <thead class="admin_th text-lg font-semibold max-sm:text-base">
                <tr class="border-b-2 border-gray-500">
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Email-id
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Contact Number
                    </th>
                </tr>
            </thead>
            <tbody class="admin_data text-base">
                {#each items as item}
                <tr class="border-b border-gray-500 max-sm:border-b-2 max-sm:border-gray-500 max-sm:mb-12">
                    <td class="px-6 py-4" data-th="Name">
                        {item.name}
                    </td>
                    <td class="px-6 py-4" data-th="Email">
                        {item.emailid}
                    </td>
                    <td class="px-6 py-4" data-th="Contact Number">
                        {item.c_number}
                    </td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>