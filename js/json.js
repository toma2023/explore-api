const user = {id: 1, name: 'gorib amir', job: 'actor'};
const stringified = JSON.stringify(user);
/*console.log(stringified);
console.log(user);
 json={"id":1,"name":"gorib amir","job":"actor"}
 js={ id: 1, name: 'gorib amir', job: 'actor' }*/
 const shop ={
    owner: 'Alia',
    address:{
        street: 'kochukhet vut er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard' ],
    revenue: 45000,
    isOpen: true,
    isNew: false,
 }
 const type = typeof shop;
 console.log(type);
 console.log(shop);
 const shopJSON =JSON.stringify(shop);
 console.log(shopJSON);
 const type2 =typeof shopJSON;
 console.log(type2);
 //JSON object ke parse kore object kora hoy
 const shopObj =JSON.parse(shopJSON);
 console.log(shopJSON);
 const object =typeof shopObj;
 console.log(object);