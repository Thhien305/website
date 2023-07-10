 const btn = document.querySelectorAll("button") 
btn.forEach(function(button, index) {
    button.addEventListener("click", function(event){
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("product-Item").innerText 
    var productPrice = product.querySelector("product-Item").innerText
    // console.log(product Price, index)
    addcart(productImg, productName, productPrice)
    })
    });
     function addcart (productImg, productName, productPrice){ 
     var trcontent= '<tr> <td style="display: flex; align-items: center;"><img style="width:70px" src="'+productImg+'" alt="">'+productName+'<td><span>'+productPrice+'</span><sup>đ</sup></td>'
     var addtr = document.createElement("tr")
    // addtr.innerHTML = "fuck"
    addtr.innerHTML = trcontent
   var cartTable = document.querySelector("tbody")
   carttotal()
     }
    function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var cartTotal = document.querySelector(".total-price") 
    var priceT = document.querySelector(".cart-priceT")
    var total=0
    for(var i=0;i<cartItem.length;i++){
    var inputValue = cartItem[i].querySelector("input").value 
    var productPrice = cartItem[i].querySelector("td span").innerHTML
    total=total+inputValue*productPrice
    total=Math.round(total);
    }
    cartTotal.innerHTML=(total*1000).toLocaleString('de-DE')
    priceT.innerHTML=(total*1000).toLocaleString('de-DE')
    deletecartitem()
    inputChange()
    }
       function deletecartitem(){
        var btnItem=document.querySelectorAll(".cart-delete")
        for(var i=0; i<btnItem.length;i++)
        {
            btnItem[i].addEventListener("click",function(event){
                var deleteBtn=event.target
                var cartparent = deleteBtn.parentElement
                cartparent.remove()
                carttotal()
            })
        }
       }