function billingFunction() {
      var name    = document.getElementById('shippingName');
      var zipcode = document.getElementById('shippingZip');
 	 		if ( document.getElementById('same').checked) {
         document.getElementById('billingName').setAttribute('required',true);
         document.getElementById('billingZip').setAttribute('required',true);
         document.getElementById('billingName').value = name.value;
         document.getElementById('billingZip').value  = zipcode.value;
  		}
      else{
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";

      }
}
