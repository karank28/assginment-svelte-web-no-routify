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

ContactUsStore.createData({name:"abc" , emailid:"name1@gmail.com", c_number:1231231234});
ContactUsStore.createData({name:"def" , emailid:"name2@gmail.com", c_number:2323456789});
ContactUsStore.createData({name:"ghi" , emailid:"name3@gmail.com", c_number:1324576897});
ContactUsStore.createData({name:"jkl" , emailid:"name4@gmail.com", c_number:1423586790});
ContactUsStore.createData({name:"mno" , emailid:"name5@gmail.com", c_number:1029384756});
ContactUsStore.createData({name:"opq" , emailid:"name6@gmail.com", c_number:2897564312});
ContactUsStore.createData({name:"rst" , emailid:"name7@gmail.com", c_number:6789564321});
ContactUsStore.createData({name:"stu" , emailid:"name8@gmail.com", c_number:3049586731});
ContactUsStore.createData({name:"uvw" , emailid:"name9@gmail.com", c_number:1029384756});
ContactUsStore.createData({name:"xyz" , emailid:"name10@gmail.com", c_number:5462807256});
ContactUsStore.createData({name:"bcd" , emailid:"name11@gmail.com", c_number:8047489301});
ContactUsStore.createData({name:"abc1" , emailid:"name1a@gmail.com", c_number:1223231234});
ContactUsStore.createData({name:"def2" , emailid:"name2d@gmail.com", c_number:2322356789});
ContactUsStore.createData({name:"gh3" , emailid:"name3g@gmail.com", c_number:1324236897});
ContactUsStore.createData({name:"jkl4" , emailid:"name4j@gmail.com", c_number:1233586790});
ContactUsStore.createData({name:"mno5" , emailid:"name5m@gmail.com", c_number:1022384756});
ContactUsStore.createData({name:"opq6" , emailid:"name6o@gmail.com", c_number:2237564312});
ContactUsStore.createData({name:"rst7" , emailid:"name7r@gmail.com", c_number:6782364321});
ContactUsStore.createData({name:"stu8" , emailid:"name8s@gmail.com", c_number:3042386731});
ContactUsStore.createData({name:"uvw9" , emailid:"name9u@gmail.com", c_number:1023384756});
ContactUsStore.createData({name:"abz" , emailid:"name10a@gmail.com", c_number:5423807256});
ContactUsStore.createData({name:"ycd" , emailid:"name11y@gmail.com", c_number:8042389301});
ContactUsStore.createData({name:"axk" , emailid:"name7a@gmail.com", c_number:8040489301});
ContactUsStore.createData({name:"utc1" , emailid:"name5h@gmail.com", c_number:3223231234});
ContactUsStore.createData({name:"etx" , emailid:"name2d@gmail.com", c_number:7322356789});