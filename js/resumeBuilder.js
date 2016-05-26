/*
This is empty on purpose! Your code to build the resume will go here.

$("#main").append("css & html   <br>");
 */

var firstName="ronen";
console.log(firstName);

var owesometoughte="i am ronen and i am owesome";
console.log(owesometoughte);

var email="sebag_r@yahoo.com";
var newemail =email.replace("yahoo","gmail");
console.log(email);
console.log(newemail);
/*
var funthoughts=owesometoughte.replace("owesome" , "fun");
$("#main").append(funthoughts);


var formattedname=HTMLheaderName.replace("%data%","ronen sebag");
$("#header").prepend(formattedname);
var formattedrole=HTMLheaderRole.replace("%data%","web developer");
$("#header").append(formattedrole);
*/
var bio={
    "name":"ronen",
    "role":"web developer",
    "contact":{
                 "email":"sebag_r@yahoo.com",
                 "phone number":"0523867667",
                 "addres":"hazmaut 30"
             },
    "skills":["teach","electricity" ,"electronic"],
    "wellcomemesage":"bone avenue",
    "biopic":"images/fry.jpg"
}
var education={
    "schools":[
         {
            "name":"sce",
            "city":"beer sheba",
            "degree":"bsc",
            "majors":"electricity",
            "dates":2003,
            "url":"sce.ac.il"
          },
          {
            "name":"bgu",
            "city":"beer sheba",
            "degree":"msc",
            "majors":"electricity",
            "dates":2010,
            "url":"bgu.ac.il"
          }
          ],
          "online course":[
          {
            "title":"html&css",
            "school":"udacity",
            "dates":2014,
            "url":"udacity.com"
          }
          ]
}
var work={
    "jobes": [{
            "employer": "idf",
            "title": "radar teach",
            "dates": "jun 1986-may 1990",
            "description": "projects contains an array"

        }, {
            "employer": "iec",
            "title": "electric teach",
            "dates": "jun 1990-future",
            "description": "projects contains an array of projects."
        }

    ]
}
var projects={
    "projects":[
      {
        "title":"simulator",
        "dates":2000,
        "description":"projects contains an array of projects. Each",
        "images":[
        "http://jsonlint.com/",
        "http://jsonlint.com/"
        ]
      }

    ]
}

/*$("#main").append(bio.biopic);

var bio={
    "name":"ronen",
    "age":49,
    "haircolor":"black"
}

bio.addres="hazmaut";
bio["email"]="sebag_r@yahoo.com <br>";
$("#main").append(bio.email);

$("#main").append(bio["email"]);*/