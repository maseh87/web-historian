$('form').submit(function(e){
  e.preventDefault();
  var inputData = $('input').val();
  console.log("INPUTDATA: " + inputData);
  $.ajax({
    url: "http://127.0.0.1:8080",
    type: "POST",
    data: JSON.stringify(inputData),
    // dataType: "text/html",
    success: function(data) {
      console.log("SUCCESS: " + data);
    },
    error: function(data) {
      console.log("ERROR" + inputData);
    }
  });
});
