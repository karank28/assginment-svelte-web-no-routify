<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    import { ContactUsStore } from "../Stores/ContactStore";
    export let items:any = [];

    let dataC:any = {
        name: "",
        emailid: "",
        c_number: ""
    };

    let errors = {
        name: '',
        emailid: "",
        c_number: ""
    };

    const unsubscribe = ContactUsStore.subscribe(value => {items = value});

    let adddetails = () => {

        let hasError = false;
        const namePattern = /^[a-zA-Z]+$/;
        const emailPattern =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const contactNumberPattern = /^\d{10}$/;

        if (!dataC.name) {
            errors.name = 'This field is required';
            hasError = true;
        } else if (!namePattern.test(dataC.name)) {
            errors.name = 'Name should contain only alphabets!!';
            hasError = true;
        } else {
            errors.name = '';
        }

        if (!dataC.emailid) {
            errors.emailid = 'This field is required';
            hasError = true;
        } else if (!emailPattern.test(dataC.emailid)) {
            errors.emailid = 'Please enter a valid email id!!';
            hasError = true;
        } else {
            errors.emailid = '';
        }

        if (!dataC.c_number) {
            errors.c_number = 'This field is required';
            hasError = true;
        } else if (!contactNumberPattern.test(dataC.c_number)) {
            errors.c_number = 'Contact number should be in 10 digits only!!';
            hasError = true;
        }
        else {
            errors.c_number = '';
        }

        if (hasError) {
            return;
        }

        const newItem = {
            name: dataC.name,
            emailid: dataC.emailid,
            c_number: dataC.c_number
        };
        
        ContactUsStore.createData(newItem);
        dataC = {
            name: "",
            emailid: "",
            c_number: ""
        };
        alert('Thankyou for contacting us!!');
        dispatch('submit', dataC);
    }

</script>

<div class="w-full p-6 flex justify-between max-sm:flex-col">
    <form action="" class="w-96 p-5 border-4 border-sky-400 rounded-2xl hover:border-amber-400 max-lg:w-2/4 max-lg:me-5 max-sm:w-full">
        <div class="my-5">
            <label for="name" class="block p-1 text-lg max-sm:text-base">Name</label>
            <input bind:value={dataC.name} type="text" id="name" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter your full name" />
            {#if errors.name}
                <div id="name-error" class="py-1 text-red-800 text-xs">
                    {errors.name}
                </div>
            {/if}
        </div>

        <div class="my-5">
            <label for="emailid" class="block p-1 text-lg max-sm:text-base">Email-id</label>
            <input bind:value={dataC.emailid} type="email" id="emailid" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter your email id" />
            {#if errors.emailid}
                <div id="email-error" class="py-1 text-red-800 text-xs">
                    {errors.emailid}
                </div>
            {/if}
        </div>

        <div class="my-5">
            <label for="c_number" class="block p-1 text-lg max-sm:text-base">Contact Number</label>
            <input bind:value={dataC.c_number} type="tel" id="c_number" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter your contact number" maxlength="10"  />
            {#if errors.c_number}
                <div id="c-error" class="py-1 text-red-800 text-xs">
                    {errors.c_number}
                </div>
            {/if}
        </div>

        <div class="mt-7 flex">
            <input  on:click|preventDefault = {adddetails} class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" type="submit" value="Submit">
            <input class="w-full bg-sky-500 text-white font-bold ms-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" type="reset" value="Clear">
        </div>
    </form>

    <div class="w-96 p-6 flex-rows text-lg border-4 border-sky-400 rounded-2xl hover:border-amber-400 hover:shadow-xl max-lg:w-2/4 max-sm:w-full max-sm:mt-5">
        
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe class="w-full h-56 flex border-2 border-sky-400 rounded-xl transition hover:border-amber-400 hover:shadow-xl hover:-translate-y-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8780706790326!2d72.49672071494041!3d23.028248684950135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d5c5d6ba3f%3A0x2dac1a9a5d5f34be!2sIT%20Path%20Solutions!5e0!3m2!1sen!2sin!4v1680447378861!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <div class="flex-cols py-5 cursor-default">
            <p class="text-3xl font-semibold py-1 max-sm:text-lg">Reach out to us</p>
            <p class="text-base py-1 max-sm:text-sm">Located in: Binori B Square 1</p>
            <p class="text-base py-1 max-sm:text-sm">Binori B Square 1, 801, 8th floor, BRTS road</p>
            <p class="text-base py-1 max-sm:text-sm">Ambli Road, Ahmedabad</p>
            <p class="text-base py-1 max-sm:text-sm">Gujarat - 380058</p>

        </div>
    </div>
</div>  