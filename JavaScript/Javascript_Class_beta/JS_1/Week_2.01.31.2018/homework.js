              /////////////////////////////////////////////////////
              //                    Q1                           //
              /////////////////////////////////////////////////////

              //Create a function that takes 3 arguments and returns the sum of the three arguments.//

              function num(a, b, c) {
                return a + b + c;
              }
              console.log(num(8, 10, 12)); //output 30


              //<<<<<<<<<<<<<<<   onother way   >>>>>>>>>>>>>>>>>>>//
              function addNumbers(a, b, c) {
                let out = a + b + c;
                return out;
              }
              console.log(addNumbers(8, 10, 12)); //output 30

              //<<<<<<<<<<<<<   3d way NOT return   >>>>>>>>>>>>>>>>//
              function sumNumbers(a, b, c) {
                let sum = a + b + c;
                console.log(sum);
              }
              sumNumbers(0, 30, 0); //output 30

              /////////////////////////////////////////////////////
              //                    Q2                           //
              /////////////////////////////////////////////////////

              // Create a function named colorCar that receives a color, and prints out, "a red car" for example.

              function colorCar(color) {
                return "a " + color + " car";

              }
              console.log();
              colorCar("red"); //output "a red car"

              /////////////////////////////////////////////////////
              //                    Q3                           //
              /////////////////////////////////////////////////////

              //Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for example when called as vehicleType("blue", 2)


              function vehicleType(c, t) {
                let theType;
                if (t == "1")
                  theType = "car";
                if (t == "2")
                  theType = "motorbike";
                return "a " + c + " " + theType;
              }
              console.log(vehicleType("blue", 2));
              vehicleType(" blue ", "1");
              vehicleType(" blue ", "2"); // output ==>> a  blue  motorbike

              /////////////////////////////////////////////////////
              //                    Q4                           //
              /////////////////////////////////////////////////////

              //               if ("e" == "e") {
              //     console.log("true")
              // } else {
              //     console.log("false")
              // }

              console.log("e" == "e");
              console.log(true);

              /////////////////////////////////////////////////////
              //                    Q5                           //
              ////////////////////////////////////////////////////

              // Create a function called vehicle, like before, but takes another parameter called age, so that
              //
              // vehicle("blue", 1, 2) prints "a blue used car".
              // vehicle("blue", 1, 1) prints "a blue new car".

              function vehicle(color, age, model) {

                const ages = {
                    "1": "new ",
                    "2": "old "
                  },
                  theType = {
                    "1": "car",
                    "2": "moterbike"
                  };
                return "a" + color + ages[age] + theType[model];
              }
              console.log(vehicle(" blue ", 1, 1));

              vehicle("blue", 1, 1);
              vehicle("blue", 1, 2);
              vehicle("blue", 2, 1);
              vehicle("blue", 2, 2);

              /////////////////////////////////////////////////////
              //                    Q6                           //
              /////////////////////////////////////////////////////

              //Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.


              const fruit = [" motorbike ", " caravan ", " bike ", " more "];
              console.log(1 + fruit[0]);
              console.log(2 + fruit[1]);
              console.log(3 + fruit[2]);
              console.log("and" + fruit[3]);

              /////////////////////////////////////////////////////
              //                    Q7                           //
              /////////////////////////////////////////////////////

              //            How do you get the third element from that list?

              const fruit = [" motorbike ", " caravan ", " bike ", " more "];
              console.log(fruit);
              fruit.pop();


              /////////////////////////////////////////////////////
              //                    Q8                           //
              /////////////////////////////////////////////////////
              //Change the function vehicle to use the list of question 6. So that vehicle("green", 3, 1) prints "a green new caravan".

              function vehicle(color, age, model) {
                const ages = {
                    "1": "old ",
                    "2": "used ",
                    "3": "new "
                  },

                  Model = {
                    "1": "motorbike ",
                    "2": "caravan ",
                    "3": "bike "
                  }
                return "a" + color + ages[age] + Model[model];
              }

              //  vehicle(" green " , 1 , 1);
              // 	vehicle(" green " , 1 , 2);
              // 	vehicle(" green " , 1 , 3);
              // 	vehicle(" green " , 2 , 1);
              // 	vehicle(" green " , 2 , 2);
              // 	vehicle(" green " , 2 , 3);
              vehicle(" green ", 3, 1);
              // 	vehicle(" green " , 3 , 2);
              // 	vehicle(" green " , 3 , 3);

              /////////////////////////////////////////////////////
              //                    Q9                           //
              /////////////////////////////////////////////////////

              //            Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

              const advertisement = ["cars,", " motorbikes,", " caravans", "bikes"];
              let phrase = " Amazing Joe's Garage, we service ";
              for (let i = 0; i < advertisement.length; i++) {}
              console.log(phrase + advertisement[0] + advertisement[1] + advertisement[2] + " and " + advertisement[3]);

              /////////////////////////////////////////////////////
              //                    Q10                          //
              /////////////////////////////////////////////////////

              //What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 9?
              const advertisement = ["cars,", " motorbikes,", " caravans", "bikes"];
              let phrase = " Amazing Joe's Garage, we service ";
              for (let i = 0; i < advertisement.length; i++) {}
              console.log(phrase + advertisement[0] + advertisement[1] + advertisement[2] + " and " + advertisement[3]);
              console.log(advertisement.push('track'));
              //But it dosent work //


              /////////////////////////////////////////////////////
              //                    Q11                          //
              /////////////////////////////////////////////////////

              // Write some code to test two arrays for equality using == and ===. Test the following:

              let a = 11;
              let b = 12;
              a = b;

              let c = 15;
              let d = 16;
              c == d;

              let e = 17;
              let f = 18;
              e === f

              /////////////////////////////////////////////////////
              //                    Q12                          //
              /////////////////////////////////////////////////////


              let bar = 42;
              typeof typeof bar; //  output 'string'