$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });

    pushFooter();
    function pushFooter(){
        $.ajax({
            url: 'footer.html',
            dataType: 'html',
            success: function(data) {
                $('.site-footer').html(data);
            },
            error: function() {
            }
        });
    }
    pushHeader();
    function pushHeader(){
        $.ajax({
            url: 'header.html',
            dataType: 'html',
            success: function(data) {
                $('.header-wrapped').html(data);
            },
            error: function() {
            }
        });
    }
    
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }