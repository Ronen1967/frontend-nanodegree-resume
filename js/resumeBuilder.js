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

for(var i=0;i<9;i++)
    {
        console.log (i);
    }
/*
var funthoughts=owesometoughte.replace("owesome" , "fun");
$("#main").append(funthoughts);
*/


var bio={
    "name":"    רונן סבאג    ",
    "role":"מעצב אתרי אינטרנט",
    "contact":{
                 "email":"sebag_r@yahoo.com",
                 "phonenumber":"0546093397",
                 "addres":"hazmaut 30 ashdod"
             },
    "skills":["מהנדס חשמל","הנדסאי חשמל" ,"אלקטרונאי","מפעיל תחנות כח"],
    "wellcomemesage":"bone avenue",
    "biopic":"images/fry.jpg"
}
var education={
    "schools":[
         {
            "name":"sce",
            "city":"beer sheba  ",
            "degree":"  bsc  ",
            "majors":"electricity",
            "dates":2003,
            "url":"sce.ac.il"
          },
          {
            "name":"bgu",
            "city":"beer sheba  ",
            "degree":"  msc  ",
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
            "datese": "jun 1986may 1990",
            "description": "Resume.com is the best place to build and post your resume \
            online at no cost to you. Not only is it free, but it’s easy to sign up.\
             Once you have posted a resume to our site, you can access it from anywhere! Use our free resume builder\
             to create the perfect resume online in just minutes.\
If you are looking for a job, odds are you know you need a great resume. But did you know that a professional-looking \
resume can set you apart from the\
 rest of the field in a matter of seconds? The first impression is everything to an employer when going through application after \
 application, which is why your resume must be top notch. The good news is you’ve come to the right place! ",
            "location": "zrifin bamtsa 108"

        }, {
            "employer": "iec",
            "title": "electric teach",
            "datese": "jun 1990future",
            "description": "Resume.com is the best place to build and post your resume online at no cost to you. Not only is it free, but it’s easy to sign up. Once you have posted a resume to our site, you can access it from anywhere! Use our free resume builder to create the perfect resume online in just minutes.\
If you are looking for a job, odds are you know you need a great resume. But did you know that a professional-looking resume can set you apart from the rest of the field in a matter of seconds? The first impression is everything to an employer when going through application after application, which is why your resume must be top notch. The good news is you’ve come to the right place! ",
            "location": "eshcol power station"
        }

    ]
}
var projects={
    "projects":[
      {
        "title":"gca simulator build ",
        "dates":"june 2000-may 2001",
        "description":"Resume.com is the best place to build and post your resume online at no cost to you. Not only is it free, but it’s easy to sign up. Once you have posted a resume to our site, you can access it from anywhere! Use our free resume builder to create the perfect resume online in just minutes.If you are looking for a job, odds are you know you need a great resume. But did you know that a professional-looking resume can set you apart from the rest of the field in a matter of seconds? The first impression is everything to an employer when going through application after application, which is why your resume must be top notch. The good news is you’ve come to the right place!",
        "images":[
        "images/2.jpg",
        "images/2.webp"
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
var formattedrole=HTMLheaderRole.replace("%data%","מעצב אתרי אינטרנט");
$("#header:last").prepend(formattedrole);
var formattedname=HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedname);


var formattedHTMLwelcomeMsg=HTMLwelcomeMsg.replace("%data%",owesometoughte);
$("#topContacts").prepend(formattedHTMLwelcomeMsg);
var formattedlocHTMLbioPic=HTMLbioPic.replace("%data%","images/fry.jpg");
$("#topContacts").prepend(formattedlocHTMLbioPic);

 //$("#topContacts").append(HTMLcontactGeneric);
var formattedmobile=HTMLmobile.replace("%data%",bio.contact.phonenumber);
$("#topContacts").prepend(formattedmobile);
var formattedemail=HTMLemail.replace("%data%",bio.contact.email);
$("#topContacts").prepend(formattedemail);
var formattedlocation=HTMLlocation.replace("%data%",bio.contact.addres);
$("#topContacts").prepend(formattedlocation);



if(bio.skills.length>0)
    {
        $("#header").append(HTMLskillsStart);
     var formatedskills=HTMLskills.replace("%data%",bio.skills[0]);
     $("#skills").append(formatedskills);
       var formatedskills=HTMLskills.replace("%data%",bio.skills[1]);
     $("#skills").append(formatedskills);
       var formatedskills=HTMLskills.replace("%data%",bio.skills[2]);
     $("#skills").append(formatedskills);
        var formatedskills=HTMLskills.replace("%data%",bio.skills[3]);
     $("#skills").append(formatedskills);
}

var displaywork=function() {
for (job in work.jobes)
{
$("#workExperience").append(HTMLworkStart);
var formatedwork=HTMLworkEmployer.replace("%data%",work.jobes[job].employer);
var formatedTitle=HTMLworkTitle.replace("%data%",work.jobes[job].title);
var formatedDates=HTMLworkDates.replace("%data%",work.jobes[job].datese);
var formatedLocation=HTMLworkLocation.replace("%data%",work.jobes[job].location);
var formatedDescription=HTMLworkDescription.replace("%data%",work.jobes[job].description);
var formatedworktitle=formatedwork+formatedTitle+formatedDates+formatedLocation+formatedDescription;
$(".work-entry:last").append(formatedworktitle);
}
}
console.log(HTMLworkStart);
displaywork();
$(document).click(function(loc){
  var x = loc.pageX;
   var y = loc.pageY;
   logClicks(x,y);
});
/*
function ronen (r,s)
{
var er=r+s;
return er;
}
console.log(ronen(7,8));
*/
/*
var localizer=function(wor_k) {
       var local=[];
for (job in wor_k.jobes)
{
   locations =  wor_k.jobes[job].location;
   local.push(locations);
}
return local;
}
console.log(localizer(work));
$("#main").append(localizer(work));
*/
var edna="ronen sebag";
var r=edna.split(" ");
console.log(r);
var e=r[1]
var n=r[0]

console.log(n.toUpperCase()+" "+e.slice(0,1).toUpperCase()+e.slice(1));

projects.display=function(){
for (project in projects.projects)
{
$("#projects").append(HTMLprojectStart);
var formattedtitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
$(".project-entry:last").append(formattedtitle);
var proformateddates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
$(".project-entry:last").append(proformateddates);
var proformatedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
$(".project-entry:last").append(proformatedDescription);
for (image in projects.projects[project].images)
{
    var formatedimages=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
    $(".project-entry:last").append(formatedimages);
}
}
}
projects.display();
for (school in education.schools)
{
$("#education").append(HTMLschoolStart);
var formatednamesch=HTMLschoolName.replace("%data%",education.schools[school].name);
$(".education-entry:last").append(formatednamesch);
var formatemajors=HTMLschoolMajor.replace("%data%",education.schools[school].majors);
$(".education-entry:last").append(formatemajors);
var formateddegrysch=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
$(".education-entry:last").append(formateddegrysch);
var formateddeyear=HTMLonlineDates.replace("%data%",education.schools[school].dates);
$(".education-entry:last").append(formateddeyear);
}



//console.log(projects.projects[0].images.length);
$(document).click(function(loc){
    console.log(loc.pageX,loc.pageY);
})
$("#mapDiv").append(googleMap);
//<button type="button" onclick="document.write(5 + 6)">Try it</button>
