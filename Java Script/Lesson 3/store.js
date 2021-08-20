const removeCartItemButtons = document.getElementsByClassName("btn-danger")
console.log(removeCartItemButtons)

for (let i =0;i<removeCartItemButtons.length;i++)
{
    let button = removeCartItemButtons[i]
    button.addEventListener("click",(e)=>{
        var btnClicked = e.target
        btnClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

const updateCartTotal =() =>{
    var cartItemContainer = document.getElementsByClassName(
        
        )
}