const shirts = document.querySelector(".shirtsbox");
const jeans = document.querySelector(".jeansbox");
const shoes = document.querySelector(".shoesbox");
const images = document.querySelectorAll(".img");
const cartbutton = document.querySelectorAll(".cart-button");
const cartcount=document.querySelector(".count");
const cartdetails =document.querySelector(".cart-details");
const addtocart =document.querySelector(".cart-count");
const cartitems =document.querySelector(".cartitem");
const conbut =document.querySelector(".confirmbut");
const M =document.createElement("div");
const L =document.createElement("div");
const xL =document.createElement("div");
const productsdetails =document.querySelectorAll("#product-details");

const shoping= document.querySelector(".shoping");
const productpage =document.querySelector(".productpage");
const banner=document.querySelector(".banner");
const homepage=document.querySelector(".homepage");
const cartpage=document.querySelector(".cartpage");
shoping.style.display="none";
productpage.addEventListener("click",()=>{
    if(shoping.style.display==="none"){
        shoping.style.display="block";
        banner.style.display="none";
        shirts.style.display='block';
        jeans.style.display='block';
        shoes.style.display="block";
        cartdetails.style.display="none";

    }
})
homepage.addEventListener("click",()=>{
    shoping.style.display="none";
    banner.style.display="block";
    cartdetails.style.display="none";
})
cartpage.addEventListener("click",()=>{
    shoping.style.display="none";
    banner.style.display="none";
    cartdetails.style.display="block";
})


const size= document.createElement("div");
let selectedsize ="";
let count =0;








shirts.style.display='block';
jeans.style.display='block';
shoes.style.display="block";
cartdetails.style.display="block";
const button =document.querySelector(".but");


button.addEventListener("click",()=>{
const  userInput = document.querySelector(".in-put").value.toLowerCase();
if(userInput === "shirts"){
    shirts.style.display="block";
    jeans.style.display="none";
    shoes.style.display="none";
     shoping.style.display="block";
      banner.style.display="none";

    

}
if(userInput === "jeans"){
    jeans.style.display="block";
    shoes.style.display="none";
    shirts.style.display="none";

}if(userInput === "shoes"){
    shoes.style.display="block";
    shirts.style.display="none";
    jeans.style.display="none";
}

});
images.forEach(img =>{


    img.addEventListener("mouseover",() => {
        img.style.border ="5px solid white";
   });
   img.addEventListener("mouseleave",() =>{
    img.style.border ="none";
    
   })
})
  
 


productsdetails.forEach(productsdetails=>{


const M =document.createElement("div");
const L =document.createElement("div");
const xL =document.createElement("div");

const size= document.createElement("div");







productsdetails.appendChild(size);
size.style.display="block";
   
size.style.height="70px";
size.style.width="100px";


size.style.marginTop="25px";




    
size.appendChild(M);
size.appendChild(L);
size.appendChild(xL);
M.innerText="M";
L.innerText="L";

xL.innerText="xL"
M.style.backgroundColor="gray";
L.style.backgroundColor="gray";xL.style.backgroundColor="gray";


function resetBackgrounds(){
    M.style.backgroundColor="gray";
   L.style.backgroundColor="gray";
   xL.style.backgroundColor="gray";
}
M.addEventListener("click",()=>{selectedsize = "M";
    resetBackgrounds();
    M.style.backgroundColor="red";
});
L.addEventListener("click",()=>{selectedsize = "L";
    resetBackgrounds()
    L.style.backgroundColor="red";
});
xL.addEventListener("click",()=>{selectedsize = "xL";
    resetBackgrounds()
    xL.style.backgroundColor="red";
});
})



   







cartbutton.forEach(button =>{
    button.addEventListener("click",(event)=>{
        
        if(!selectedsize){
            alert("please select the Size first");
            return;
        }
        alert("Added to cart");

        count += 1;
        M.style.backgroundColor="gray";
        L.style.backgroundColor="gray";
       xL.style.backgroundColor="gray";
        
        cartcount.innerText = count;
        const clothesdata = event.currentTarget.parentElement;
        const productname = clothesdata.dataset.name;
        const productid =clothesdata.dataset.id;
        const productprice =clothesdata.dataset.price;
        const itemselement =document.createElement("li");
        const imag = document.createElement("img");
        imag.src ="deleteitem.png";
        imag.style.height="16px";
        imag.style.width="16px";
        imag.style.cursor="pointer";
        itemselement.innerText=`Product-${productname} -Price -$${productprice} -Size-${selectedsize} `;
      itemselement.appendChild(imag);
        cartitems.appendChild(itemselement);
        
        
        imag.addEventListener("click",(eve)=>{
                itemselement.remove();
                count-=1;
                cartcount.innerText = count;

            });
            
            
        
       
        
    });
    
});




cartdetails.style.display="none";


addtocart.addEventListener("click",()=>{
    if(cartdetails.style.display==="none"){
        cartdetails.style.display="block";
    }else{
        cartdetails.style.display="none";
    }
    
});
const BIN_ID = "6a8c489fda38895dfe0aa6df";
const API_KEY = "$2a$10$U0zLR8lNkY/pjqlUPwEmoe1GuGNi13J5OSKGnMSTi47qGOyxyWLFq";
conbut.addEventListener("click",async(e)=>{
    e.preventDefault()
    const custname=document.querySelector(".name").value.toLowerCase();
    const custaddress=document.querySelector(".C-address").value.toLowerCase();
    const custnumber=document.querySelector(".custumer-number").value.toLowerCase();
    
    

if(custname === ""){
   alert("Please enter the name") ;
}else if(custaddress===""){
  alert("Please enter the address")
}
else if(cartcount.innerText === "0"){
    alert("cart is empty");
}else if(custnumber===""){
    alert("Please enter the mobile number")
}
else{
const newOrder = {
    id: Date.now(),
    customerName: custname,
    address: custaddress,
    items: cartitems.innerText,
    Phonenumber: custnumber,
    date: new Date().toLocaleString()

};

try {
     // 1. Fetch existing orders array from bin
     const getRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": API_KEY }
    });
    const data = await getRes.json();
    const currentOrders = data.record.orders || [];

            // 2. Append new order
    currentOrders.push(newOrder);

            // 3. Save updated array back into the orders object
    await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "X-Master-Key": API_KEY
                },
                body: JSON.stringify({ orders: currentOrders })
            });
    alert("Order placed successfully! we are contact to you in under 2 or 3 hour.Thank you")
    
   const itemselement =document.createElement("li");
    cartitems.appendChild(itemselement);
    
    document.querySelector(".name").value="";
    document.querySelector(".C-address").value="";
    document.querySelector(".custumer-number").value="";
    cartitems.innerHTML="";
    cartcount.innerText="0";
    

}catch (err) {
            console.error("Error submitting order:", err);
            alert("Failed to submit order.");
}
        
}

});
function showOrders() {
    fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": API_KEY }
    })
    .then(res => res.json())
    .then(data => console.table(data.record.orders))
    .catch(err => console.error("Error fetching orders:", err));
}


 