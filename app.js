(function(){
    var buttons = document.querySelectorAll(".btn");
    var storeImages = document.querySelectorAll(".store-item");

    //loop through the button indidvidually to know the actually button clicked

buttons.forEach((button) =>{
    button.addEventListener("click", (e)=>{
        e.preventDefault()

        // get the filter name using the dataset.filter
        var filter = e.target.dataset.filter
        

    // loop through the images and use the filter to ascertain which image has the same filter name as button clicked
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



