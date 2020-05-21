
  var calculateBill = function(event) {
    event.preventDefault();
    var price = document.getElementById("Price").value;
    var qty=document.getElementById("Quantity").value;
    var tax=0.05;
    var discount=0.10;
   document.getElementById("Total").value = (price * qty)+(price * qty * tax )-(((price * qty)+(price * qty * tax ))*discount);
    
  }
  var form = document.getElementById('hotel-bill');
  form.addEventListener('submit', calculateBill, false);
  