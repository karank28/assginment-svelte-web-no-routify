import { writable } from "svelte/store";

const store = () => {
    const state = [];
    const {subscribe, set, update} = writable(state);
    const operations = {
        createData(dataC:any){
            console.log("data: ", dataC);
            update(state => {
                state = state.concat(dataC);
                console.log("store data: ",state);
                return state;
            })
        },
    }

    return {
        subscribe,
        set,
        update,
        ...operations
    }
}
export const ContactUsStore = store();

ContactUsStore.createData([
    {name:"Palak" , emailid:"palak@gmail.com", c_number:1231231234},
    {name:"Kevin" , emailid:"kevin@gmail.com", c_number:2323456789},
    {name:"Bharti" , emailid:"bharti@gmail.com", c_number:1324576897},
    {name:"Shruti" , emailid:"shruti@gmail.com", c_number:1423586790},
    {name:"Mona" , emailid:"mona@gmail.com", c_number:1029384756},
    {name:"Nilesh" , emailid:"nilesh@gmail.com", c_number:2897564312},
    {name:"Ram" , emailid:"ram@gmail.com", c_number:6789564321},
    {name:"Shyam" , emailid:"shyam@gmail.com", c_number:3049586731},
    {name:"Janvi" , emailid:"Janvi@gmail.com", c_number:1029384756},
    {name:"Hardik" , emailid:"Hardik@gmail.com", c_number:5462807256},
    {name:"Zalak" , emailid:"Zalak@gmail.com", c_number:8047489301},
    {name:"Jitesh" , emailid:"Jitesh@gmail.com", c_number:1223231234},
    {name:"Jayesh" , emailid:"Jayesh@gmail.com", c_number:2322356789},
    {name:"Pratik" , emailid:"Pratik@gmail.com", c_number:1324236897},
    {name:"Narendra" , emailid:"Narendra@gmail.com", c_number:1233586790},
    {name:"Kush" , emailid:"Kush@gmail.com", c_number:1022384756},
    {name:"Keval" , emailid:"Keval@gmail.com", c_number:2237564312},
    {name:"Ishan" , emailid:"Ishan@gmail.com", c_number:6782364321},
    {name:"Vihan" , emailid:"Vihan@gmail.com", c_number:3042386731},
    {name:"Ayushi" , emailid:"Ayushi@gmail.com", c_number:1023384756},
    {name:"Payal" , emailid:"payal@gmail.com", c_number:5423807256},
    {name:"Sooraj" , emailid:"sooraj@gmail.com", c_number:8042389301},
    {name:"Aarav" , emailid:"Aarav@gmail.com", c_number:8040489301},
    {name:"Chirag" , emailid:"Chirag@gmail.com", c_number:3223231234},
    {name:"Darshan" , emailid:"darshan@gmail.com", c_number:7322356789}
]);