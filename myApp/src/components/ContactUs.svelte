<script lang="ts">
    import { feedbackStore } from './contactUsStore';

    let contactData:any = [];

    let data:any = {
        name: "",
        emailid: "",
        contactNumber: ""
    };

    const unsubscribe = feedbackStore.subscribe(value => {contactData = value});

    let addData = () => {
        const newData = {
            name: data.name,
            emailid: data.emailid,
            contactNumber: data.contactNumber
        };
        
        feedbackStore.createData(newData);
        data = {
            name: "",
            emailid: "",
            contactNumber: ""
        };
    }
</script>


<div class="w-full p-6 flex justify-between max-sm:flex-col">
    <form action="" class="w-96 p-5 border-4 border-sky-400 rounded-2xl hover:border-amber-400 max-lg:w-2/4 max-lg:me-5 max-sm:w-full">
        <div class="my-5">
            <label for="name" class="block p-1 text-lg max-sm:text-base">Name</label>
            <input bind:value={data.name} type="text" id="name" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter your full name" required />
        </div>

        <div class="my-5">
            <label for="name" class="block p-1 text-lg max-sm:text-base">Email-id</label>
            <input bind:value={data.emailid} type="email" id="emailid" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter your email id" required />
        </div>

        <div class="my-5">
            <label for="name" class="block p-1 text-lg max-sm:text-base">Contact Number</label>
            <input bind:value={data.contactNumber} type="number" id="contactNumber" class="w-full p-3 text-base outline outline-2 outline-gray-300 rounded-lg transition duration-400 hover:outline-amber-400 focus:outline-amber-400 hover:shadow-xl focus:shadow-xl max-sm:text-sm" placeholder="Enter your contact number" required />
        </div>

        <div class="mt-7 flex">
            <input on:click|preventDefault = {addData} class="w-full bg-sky-500 text-white font-bold me-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" type="submit" value="Submit">
            <input class="w-full bg-sky-500 text-white font-bold ms-1 py-2 px-4 rounded-lg transition duration-400 cursor-pointer hover:scale-105 hover:bg-amber-400 hover:text-black hover:shadow-xl max-sm:text-sm" type="reset" value="Reset">
        </div>
    </form>

    <div class="w-96 flex-rows text-lg rounded-2xl max-lg:w-2/4 max-sm:w-full max-sm:mt-5">
        
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe class="w-full h-56 flex border-4 border-sky-400 rounded-2xl transition hover:border-amber-400 hover:shadow-xl hover:-translate-y-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8780706790326!2d72.49672071494041!3d23.028248684950135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d5c5d6ba3f%3A0x2dac1a9a5d5f34be!2sIT%20Path%20Solutions!5e0!3m2!1sen!2sin!4v1680447378861!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <div class="flex-cols py-5">
            <p class="text-3xl font-semibold py-1 max-sm:text-lg">Reach out to us</p>
            <p class="text-base py-1 max-sm:text-sm">Address Line - 1</p>
            <p class="text-base py-1 max-sm:text-sm">Address Line - 2</p>
            <p class="text-base py-1 max-sm:text-sm">Landmark, City</p>
            <p class="text-base py-1 max-sm:text-sm">State - Zip</p>

        </div>
    </div>
</div>
 
<!-- 
    <div class="p-5 flex">
        <div class="w-1/2">
            
        </div>
        
        <div class="p-5 w-1/2">
            <div class="border-4 w-48 h-48 p-5">
            </div>
    
            <div>
                <p>Reach out to us</p>
                <p>Address Line - 1</p>
                <p>Address Line - 2</p>
                <p>Landmark, City</p>
                <p>State - Zip</p>
    
            </div>
        </div>
    </div> -->



  