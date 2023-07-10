const btn = document.querySelectorAll("giohang")
//console.log(btn)
btn.forEach(function(button, index){
    button.addEventListener("click", function(event){
        var btnItem = event.target
        var product = btnItem.parentElement 
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("test2").innerText
        var productPrice = product.querySelector("span").innerText
        console.log(productPrice,productImg, productName)
        addcart(productPrice,productImg, productName)
    })
})
function addcart(productPrice,productImg, productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll("title")
        if(productT[i].innerHTML == productName) {
            alert("Quý khách đã thêm sản phẩm vào giỏ hàng. Vui lòng kiểm tra giỏ hàng")
            return
        }
    }
    var trcontent = '<tr><td style="display: flex;align-items: center;"><img style="width: 100px;" src="'+productImg+'" alt=""><p class="test2"><p class="title">'+productName+'</p></td><td><p class="tien"><span class="prices">'+productPrice+'</span></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}

//--------------------------tong----------------------------
function carttotal(){
    var cartItem = document.querySelectorAll("tbody")
    var totalC = 0
    //console.log(cartItem.length)
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        //console.log(inputValue)
        var productPrice = cartItem[i].querySelector("prices").innerHTML
        //console.log(productPrice)
        var totalA = inputValue*productPrice*1000
        //totalB = totalA.toLocaleString('de-DE')
        //console.log(totalB)
        totalC = totalC + totalA
        //var totalD = totalC.toLocaleString('de-DE')
        //console.log(totalA)
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    inputchange ()
    // console.log(cartTotalA)
}   

//-----------------Xóa-------------------------
function deleteCart(){
    var cartItem = document.querySelectorAll('tbody tr')
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function(event) {
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
            //console.log(cartItemR)
        })
    }
}
function inputchange (){
    var cartItem = document.querySelectorAll('tbody tr')
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()   
        })
    }
}
const cartbtn = document.querySelector(".d")
const cartshow = document.querySelector(".cart")
cartshow.addEventListener("click",function(){
    //console.log(cartshow)
    document.querySelector(".cart1").style.right = "0"
})
cartbtn.addEventListener("click",function(){
    //console.log(cartbtn)
    document.querySelector(".cart1").style.right = "-100%"
})
   