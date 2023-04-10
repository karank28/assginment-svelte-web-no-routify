import { writable } from "svelte/store";

const store = () => {
    const state = [];
    const {subscribe, set, update} = writable(state);
    const operations = {
        createProduct(data:any){
            update(state => {
                state = state.concat(data);
                return state;
            })
        },
        modify(){
            update(state => {
                return state;
            });
        },
        delete(name:string){
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

export  const productStore = writable([
productsStore.createProduct({ name: "Product 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 40 }),
productsStore.createProduct({ name: "Product 2", description: "Eveniet, dignissimos error laboriosam consectetur facere cupiditate aut animi sint perferendis", price: 50 }),
productsStore.createProduct({ name: "Product 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 20 }),
productsStore.createProduct({ name: "Product 4", description: "Eveniet, dignissimos error laboriosam consectetur facere cupiditate aut animi sint perferendis", price: 30 }),
productsStore.createProduct({ name: "Product 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 45 }),
productsStore.createProduct({ name: "Product 6", description: "Eveniet, dignissimos error laboriosam consectetur facere cupiditate aut animi sint perferendis", price: 70 }),
productsStore.createProduct({ name: "Product 7", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 55 }),
productsStore.createProduct({ name: "Product 8", description: "Eveniet, dignissimos error laboriosam consectetur facere cupiditate aut animi sint perferendis", price: 80 }),
productsStore.createProduct({ name: "Product 9", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 55 }),
productsStore.createProduct({ name: "Product 10", description: "Eveniet, dignissimos error laboriosam consectetur facere cupiditate aut animi sint perferendis", price: 80 }),
productsStore.createProduct({ name: "Product 11", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 40 }),
productsStore.createProduct({ name: "Product 12", description: "Eveniet, dignissimos error laboriosam consectetur facere cupiditate aut animi sint perferendis", price: 50 }),
productsStore.createProduct({ name: "Product 13", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 20 }),
productsStore.createProduct({ name: "Product 14", description: "Eveniet, dignissimos error laboriosam consectetur facere cupiditate aut animi sint perferendis", price: 30 }),
productsStore.createProduct({ name: "Product 15", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 45 }),
productsStore.createProduct({ name: "Product 16", description: "Eveniet, dignissimos error laboriosam consectetur facere cupiditate aut animi sint perferendis", price: 70 }),
productsStore.createProduct({ name: "Product 17", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 55 }),
productsStore.createProduct({ name: "Product 18", description: "Eveniet, dignissimos error laboriosam consectetur facere cupiditate aut animi sint perferendis", price: 80 }),
productsStore.createProduct({ name: "Product 19", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 40 }),
productsStore.createProduct({ name: "Product 20", description: "Eveniet, dignissimos error laboriosam consectetur facere cupiditate aut animi sint perferendis", price: 50 }),
productsStore.createProduct({ name: "Product 21", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 40 }),
productsStore.createProduct({ name: "Product 22", description: "Eveniet, dignissimos error laboriosam consectetur facere cupiditate aut animi sint perferendis", price: 50 }),
productsStore.createProduct({ name: "Product 23", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 20 }),
productsStore.createProduct({ name: "Product 24", description: "Eveniet, dignissimos error laboriosam consectetur facere cupiditate aut animi sint perferendis", price: 30 }),
productsStore.createProduct({ name: "Product 25", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", price: 45 })
]);