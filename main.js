function displaydiscount() {
    // variable declaration
    let budget = document.getElementById("budget").value;
    let discNum = budget * .2;
    
    //display with JS Method
    document.getElementById("discount").innerHTML = "Discount is: " + discNum.toFixed(2);
    <div class="container bg-secondary p-3 mt-3 rounded-3" id="discount-box">
      <h2>Recommended Brands:</h2>
      <button type="button" class="btn btn-outline-info">Asus</button>
      <button type="button" class="btn btn-outline-info">Dell</button>
      <button type="button" class="btn btn-outline-info">Lenovo</button>
      <p>Eligible Discount: <span id="discount"></span></p> 
    </div>
    
}

function displaylocation() {
    // variable declaration
    let location = document.getElementById("location").value;   
    document.getElementById("location-box").style.display = "block";
}


