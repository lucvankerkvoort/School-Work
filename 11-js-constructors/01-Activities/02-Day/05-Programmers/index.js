// ----------------------------
// |        Constructor       |
// ----------------------------
// Here we create a constructor
// A constructor is used as a blue print for creating objects.
// We create new properties to our constructor using this

function Programmer(name, jobTitle, age, programLang) {
  //Here we create our properties and,
  //set our values to be the parameters of the constructor
  //This is the info the instances will hold

  (this.name = name),
    (this.jobTitle = jobTitle),
    (this.age = age),
    (this.programLang = programLang);

  // Here we create a method that will show,
  //   the data of every instance of the constructor we create

  this.displayInfo = function() {
    console.log(
      "\n-----------------------",
      "\n Name: " + this.name,
      "\n Job Title: " + this.jobTitle,
      "\n Programming Language: " + this.programLang,
      "\n-----------------------"
    );
  };
}

// Here we create a new instance from the constructor Programmer
var bob = new Programmer("Bob", "Master Destroyer", 25, "Javascript");

bob.displayInfo();
