const a = [
    {id:1, name:'hola', amigos: ["a", "b"] },
    {id:2, name:'hola', amigos: ["a", "b"] },
    {id:2, name:'hola', amigos: ["a", "b"] }
];

const form = {
    id: "id", 
    edad: "edaz", 
    amigos:  {
        lenght: true
    }
}
   

const dest = a.map(obj => {
    let result = {};
    for ( let field in form) {
       if (typeof form[field] === "string") {
           result[form[field]] = obj[field]
       } else if (typeof form[field] === "object") {
           if("length" in form[field]) {
               resusl[field] = obj[field].lenght;
           }
       }
    }
    return result;
})

/*
   {id:1,"edaz", amigos:2 },
    {id:2,"edaz", amigos: 2 },
    {id:2, amigos: 2 }
 */

