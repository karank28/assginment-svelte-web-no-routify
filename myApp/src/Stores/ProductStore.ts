import { writable } from "svelte/store";

export const productsStore = writable([
    { p_id : 1, p_name : 'Sony TV', p_description : 'Sony TV Description', price : '50000' },
    { p_id : 2, p_name : 'Boat Headphones', p_description : 'Boat Headphones Description', price : '5000' },
    { p_id : 3, p_name : 'LG Computer', p_description : 'LG Computer Description', price : '35000' },
    { p_id : 4, p_name : 'Samsung TV', p_description : 'Samsung TV Description', price : '40000' },
    { p_id : 5, p_name : 'Iphone 7 plus', p_description : 'Iphone 7 plus Description', price : '32000' },
    { p_id : 6, p_name : 'Dell Laptop', p_description : 'Dell Laptop Description', price : '65000' },
    { p_id : 7, p_name : 'HP Laptop', p_description : 'HP Laptop Description', price : '75000' },
    { p_id : 8, p_name : 'Samsung S22', p_description : 'Samsung S22 Description', price : '66000' },
    { p_id : 9, p_name : 'Boat Airdopes', p_description : 'Boat Airdopes Description', price : '3000' },
    { p_id : 10, p_name : 'Galaxy Watch', p_description : 'Galaxy Watch Description', price : '8500' },
    { p_id : 11, p_name : 'Mi TV', p_description : 'Mi TV Description', price : '33000' },
    { p_id : 12, p_name : 'Iphone 14 pro', p_description : 'Iphone 14 pro Description', price : '88000' },
    { p_id : 13, p_name : 'Acer Laptop', p_description : 'Acer Laptop Description', price : '44000' },
    { p_id : 14, p_name : 'Mac Book', p_description : 'Mac Book Description', price : '84000' },
    { p_id : 15, p_name : 'Sony Speakers', p_description : 'Sony Speakers Description', price : '15000' },
    { p_id : 16, p_name : 'Boat Watch', p_description : 'Boat Watch Description', price : '3000' },
    { p_id : 17, p_name : 'LG Refrigerator', p_description : 'LG Refrigerator Description', price : '35000' },
    { p_id : 18, p_name : 'Floraware Ovan', p_description : 'Floraware Ovan Description', price : '40000' },
    { p_id : 19, p_name : 'Milton Water Bottle', p_description : 'Milton Water Bottle Description', price : '2000' },
    { p_id : 20, p_name : 'Mi Powerbank', p_description : 'Mi Powerbank Description', price : '65000' },
    { p_id : 21, p_name : 'HP Mouse', p_description : 'HP Mouse Description', price : '75000' },
    { p_id : 22, p_name : 'Samsung Memory Card', p_description : 'Samsung Memory Card Description', price : '66000' },
    { p_id : 23, p_name : 'Boat Earphones', p_description : 'Boat Earphones Description', price : '3000' },
    { p_id : 24, p_name : 'JBL Soundbar', p_description : 'JBL Soundbar Description', price : '8500' },
    { p_id : 25, p_name : 'JBL Speaker', p_description : 'JBL Speaker Description', price : '8500' }
]);