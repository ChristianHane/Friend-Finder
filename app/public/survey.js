$("#submit").on("click", function(event) {
  event.preventDefault();

  function validateForm() {
    let isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });

    $(".chosen-select").each(function() {

      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  if (validateForm()) {
    let scores = [ 
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ];
    let userData = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: scores
    };

    $.post('/api/friends', userData)
    .then(response => {
      $("#match-name").text(response.name);
      $("#match-img").attr("src", response.photo);
      $("#results-modal").modal("toggle");
    })
  } else {
    alert("Please fill out all fields before submitting!");
  }
});
