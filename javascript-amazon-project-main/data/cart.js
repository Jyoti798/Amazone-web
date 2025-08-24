export const cart=[];
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
}
export function updateCartQuantity(){
      let cartQantity=0;
   cart.forEach((item)=>{
    cartQantity+=item.quantity;

   });
   document.querySelector(".js-cart-quantity").innerHTML=cartQantity;
}