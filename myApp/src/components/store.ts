import { writable } from "svelte/store";

const store = () => {
    const state = [];
    const {subscribe, set, update} = writable(state);
    const operations = {
        createProduct(data:any){
            console.log("data: ", data);
            update(state => {
                state = state.concat(data);
                console.log("store data: ",state);
                return state;
            })
        },
        modify(){
            update(state => {
                console.log('state in store: ',state);
                return state;
            });

        },
        delete(name:string){
            console.log(name);
            update(state => state.filter(state => state.name != name))
        }
    }

    return {
        subscribe,
        set,
        update,
        ...operations
    }
}
export const productsStore = store();