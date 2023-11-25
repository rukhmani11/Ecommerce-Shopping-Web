
const productsArray =[
    {
        id:"1",
        title:"Coffee",
        price: 4.63
    },
    {
        id:"2",
        title:"Sunggasses",
        price: 4.63
    },
    {
        id:"3",
        title:"Apple",
        price: 4.63
    },
    {
        id:"4",
        title:"TV",
        price: 4.63
    },
    {
        id:"5",
        title:"Coffees",
        price: 4.63
    }
]
function getProductData(id){
    let productData = productsArray.find(product =>product.id === id) 
    if(productData == undefined){
        console.log("Product data does not exit for ID:" + id);
        return undefined;
    }
    return productData;
}
export{productsArray,getProductData};