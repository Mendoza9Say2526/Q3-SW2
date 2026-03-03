    // variable declaration
    let budget = Number(document.getElementById("budget").value);
    let discount = Number(budget * .2).toFixed(2);
    
    document.getElementById("discount").innerHTML = `$${discount}`;
    document.getElementById("discount-box").style.display = "block";
    document.getElementById("discount-box").innerHTML = `
       <div class="container p-5 mt-3 bg-secondary text-dark rounded-3">
       <h2>Recommended Brands:</h2>
       <button type="button" class="btn btn-outline-info">Acer</button>
       <button type="button" class="btn btn-outline-info">Asus</button>
       <button type="button" class="btn btn-outline-info">Dell</button>
       <p>Discounts: <span id="discount">${discount}</span> </p>
       </div>

       `
}

function seeLocation(){
        document.getElementById("location").innerHTML = `;
        <div class="container p-3 mt-4 bg-secondary text-dark rounded-3">
       <img src="villman_logo_2020.png" class="img-fluid" alt="Laptop Image" width="200" height="200"> <br>
         <h2>_________________________________________________________________________</h2>
         <p>VillMan (GH Mall, Greenhills) 4F GH Mall Greenhills Shopping Center, San Juan, Metro Manila (02) 8241-0543, 8254-6752, 8-2887928 |
         0917-5325003 / 0917-879-3824 (for viber / text / incoming calls)_</p>
         <p>VillMan
         (SM North EDSA)  5/F Cyberzone SM City North Edsa
         The Annex, Quezon City 8441-8888, 8994-2222 ;
         0917-5328377 (for calls / text / Viber)</p>
      
       </div>

       `

     
}





