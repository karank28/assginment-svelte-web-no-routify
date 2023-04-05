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
export const ContactStore = store();