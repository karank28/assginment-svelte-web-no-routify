<script lang="ts">
    import { ContactStore } from "../Stores/ContactStore";

    export let items:any = [];

    const unsubscribe = ContactStore.subscribe(value => {items = value});

</script>
<div class="w-full p-6">

    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left">
            <thead class="text-lg font-semibold max-sm:text-base">
                <tr class="border-b border-gray-200">
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
            <tbody class="text-base max-sm:text-sm">
                {#each items as item}
                <tr class="border-b border-gray-200">
                    <td class="px-6 py-4">
                        {item.name}
                    </td>
                    <td class="px-6 py-4">
                        {item.emailid}
                    </td>
                    <td class="px-6 py-4">
                        {item.c_number}
                    </td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>