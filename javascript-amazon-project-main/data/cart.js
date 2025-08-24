export let cart= JSON.parse(localStorage.getItem("cart"))||
[{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:1
},{
   productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:2 
}];

export function saveCart(){
localStorage.setItem("cart",JSON.stringify(cart));
}
export function addToCart(productId){
    let founditems="";
    cart.forEach((item)=>{
        if(item.productId===productId){
            founditems=item;
        }
    })

    if(founditems){
        founditems.quantity+=1;
    }
    else{
        cart.push({
        productId:productId,
        quantity:1
    }); 
    }
    saveCart()
}
export function updateCartQuantity(){
      let cartQantity=0;
   cart.forEach((item)=>{
    cartQantity+=item.quantity;

   });

   document.querySelector(".js-cart-quantity").innerHTML=cartQantity;
   
      saveCart()
}

export function removeItemFromCart(productId){
    let newCart=[];
    cart.forEach((item)=>{
        if(item.productId!=productId){
            newCart.push(item);
        }
    })
    cart=newCart;
    saveCart();
}

