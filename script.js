<script>
       // Listen for the scroll event
      window.onscroll = function () {
        // if the page is scrolled, call this function
        myFunction()
      };
 
      // function to add and remove the active class to the myHeader div
      function myFunction() {
        // If the page is scrolled more than 20px from the top, remove the active class from the my
        // Header div. This makes the div show in the page but not in a fixed position
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          // remove the active class from the myHeader div
          document.getElementById("myHeader").classList.remove("active");
        }
        // otherwise retain the myHeader div active class
        else {
          document.getElementById("myHeader").classList.add("active");
        }
      }
    </script>