<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Trigger Random</title>

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <!-- Added link to the jQuery Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Added a link to Bootstrap-->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
  </head>
  <body>
    <div class="jumbotron">
      <h1 class="text-center">Generate a Random Number!</h1>

      <div class="text-center">
        <!-- Here we have our button for generating random numbers (#random-button) -->
        <button id="random-button" class="btn btn-primary btn-lg">
          <h1><span class="fa fa-question"></span></h1>
        </button>
      </div>
    </div>

    <!-- Using the code from the previous random number generator as a starting point, create a lottery generator.

In our case, the lottery number generator should pick 9 random numbers between 0-9 and output as one number. As an example: 886563264.

Display this number in the random-number div.

Then when a user clicks again, have the code create a new row with the latest number at the top. -->

    <!-- Here we have div called "random-number" where our random number will go -->
    <h1 class="text-center" id="random-number"></h1>

    <script type="text/javascript">
      $(document).ready(function() {
        // CREATE THE MISSING CODE HERE. Your code should add content to the random-number div.
        // ...
        $("#random-button").on("click", () => {
          let lottery = "";
          for (let i = 0; i < 9; i++) {
            const randomNumber = Math.floor(Math.random() * 10);
            lottery += randomNumber;
          }
          $("#random-number").text(lottery);
        });
        // ...
      });
    </script>
  </body>
</html>
