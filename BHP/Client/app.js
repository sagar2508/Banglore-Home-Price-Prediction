function getBathValue() {
  var bathrooms = document.getElementsByName("uiBathrooms");
  for (var i = 0; i < bathrooms.length; i++) {
    if (bathrooms[i].checked) {
      return parseInt(bathrooms[i].value);
    }
  }
  return -1;
}

function getBHKValue() {
  var bhks = document.getElementsByName("uiBHK");
  for (var i = 0; i < bhks.length; i++) {
    if (bhks[i].checked) {
      return parseInt(bhks[i].value);
    }
  }
  return -1;
}

function onClickedEstimatePrice() {
  var sqft = document.getElementById("uiSqft").value;
  var bhk = getBHKValue();
  var bath = getBathValue();
  var location = document.getElementById("uiLocations").value;
  var estPrice = document.getElementById("uiEstimatedPrice");

  $.post("http://127.0.0.1:5000/predict_home_price", {
    total_sqft: parseFloat(sqft),
    bhk: bhk,
    bath: bath,
    location: location
  }, function(data) {
    estPrice.innerHTML = "<h2>" + data.estimated_price + " Lakh</h2>";
  });
}

function onPageLoad() {
  $.get("http://127.0.0.1:5000/get_location_names", function(data) {
    var locations = data.locations;
    var uiLocations = document.getElementById("uiLocations");
    uiLocations.innerHTML = "";
    for (var i = 0; i < locations.length; i++) {
      uiLocations.appendChild(new Option(locations[i]));
    }
  });
}

window.onload = onPageLoad;
