(function(){
    var buttons = document.querySelectorAll(".btn");
    var storeImages = document.querySelectorAll(".store-item");

buttons.forEach((button) =>{
    button.addEventListener("click", (e)=>{
        e.preventDefault()
        var filter = e.target.dataset.filter
        console.log(filter)

        storeImages.forEach((item) => {
            if (filter === "all") {
                item.style.display ="block"
            } 
            else {
                if (item.classList.contains(filter)) {
                    // item.classList.add("visible")
                    item.style.display ="block"

                }else {
                    item.style.display = "none"
                }
            }
        })
    })
})
})();



