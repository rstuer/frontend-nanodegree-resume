var work = {
    "jobs": [
        {
            "employer": "Kronos",
            "title": "QA  Developer",
            "location": "Chelmsford, MA",
            "dates": "MAr 2013 - Current",
            "description": "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate."
        },
        {
            "employer": "Analogic",
            "title": "Software Engineer",
            "location": "Peabody, MA",
            "dates": "May 1999 - Mar 2013",
            "description": "ise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it."
        },
        {
            "employer": "Nixdorf",
            "title": "Math Teacher",
            "location": "Groton, CT",
            "dates": "Jul 1996 - May 1999",
            "description": "Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which."
        }
    ]
}

var education = {
  "schools": [
    {
      "name": "University of Utrecht",
      "location": "New York, NY",
      "degree": "Bachelor",
      "majors": ["Sedimentology","Hydrology"],
      "dates": 1986,
      "url": "http://www.university.com"
    },
    {
      "name": "University of Utrecht",
      "location": "Miami, FL",
      "degree": "Master",
      "majors": ["Geophysics","Geology"],
      "dates": 1989,
      "url": "http://www.university.com"
    },
    {
      "name": "College of Arnhem",
      "location": "Boston, MA",
      "degree": "Diploma",
      "majors": ["Latin","Math"],
      "dates": 1979,
      "url": "http://www.college.com"
    }
  ],
  "onlineCourses":  [
    {
      "title": "Computer Science",
      "school": "Universiy of Online",
      "dates": 2001,
      "url": "http://www.onlinecourse.com"
    },
    {
     "title": "Java Course",
      "school": "Universiy of Online",
      "dates": 2010,
      "url": "http://www.onlinecourse.com" 
    }
  ]
}

var bio = {
    "name": "Richard Stuer",
    "role": "QA  Developer",
    "contacts": {
        "mobile": "999-999-9999",
        "email": "rstuer@org.com",
        "github": "https://githud.org/rstuer",
        "twitter": "@rstuer",
        "location": "Weston, MA"
      },
      "welcomeMessage": "So if on advanced addition absolute received replying throwing he.",
      "skills": ["Java","Communication","PM"],
      "biopic": "images/kitten.jpg"
 }

 var projects = {
    "project": [
        {
            "title": "Project 1",
            "dates": "2010-2011",
            "description": "Demesne far hearted suppose venture excited see had has",
            "images": ["http://placekitten.com/g/200/300", "http://placekitten.com/g/200/240"]
        },
        {
             "title": "Project 2",
            "dates": "2012",
            "description": "Demesne enture excited see had has",
            "images": ""
        },
        {
             "title": "Project 3",
            "dates": "2014-2015",
            "description": "Demesne excited see had has",
            "images": ""        }
    ]
  }

bio.display = function () {
  var headerRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(headerRole);

	var headerName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(headerName);
	
	var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var email = HTMLemail.replace("%data%",bio.contacts.email);
	var twitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var github = HTMLgithub.replace("%data%",bio.contacts.github);
	var userLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	
	$("#topContacts").append(mobile);
	$("#topContacts").append(email);
	$("#topContacts").append(twitter);
	$("#topContacts").append(github);
	$("#topContacts").append(userLocation);
	
	$("#footerContacts").append(mobile);
	$("#footerContacts").append(email);
	$("#footerContacts").append(twitter);
	$("#footerContacts").append(github);
	$("#footerContacts").append(userLocation);
	
	var bioPic = HTMLbioPic.replace("%data%",bio.biopic);
	var welcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	
	$("#header").append(bioPic);
	$("#header").append(welcomeMsg);
	
		if (bio.skills.length > 0 ) {
	    $("#header").append(HTMLskillsStart);
	    for (var i = 0; i < bio.skills.length; i +=1) {
	      $("#header").append(HTMLskills.replace("%data%",bio.skills[i]));
	  	}
	}
}
//bio.display();

//if (work.jobs.length > 0 ) {
//      displayWork();
// }

//function displayWork()
//{
//   for (job in work.jobs) {
//      $("#workExperience").append(HTMLworkStart);
//      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[job].employer) + HTMLworkTitle.replace("%data%",work.jobs[job].title));
//      $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].location));
 //     $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].dates));
 //     $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
//    }
//}

$("#main").append(internationalizeButton);

function inName() {
  var nameArray = [];
  nameArray=bio.name.trim().split(" ");
  var first=nameArray[0];
  var last = nameArray[1];
  return (first[0].toUpperCase() + first.slice(1,first.length).toLowerCase() + " " + last.toUpperCase());
}

work.display = function () {
	if (work.jobs.length > 0 ) {
		for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[job].employer) + HTMLworkTitle.replace("%data%",work.jobs[job].title));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job].location));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[job].dates));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
    }
  }
}

// work.display();

projects.display = function () {
  for (project in projects.project) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.project[project].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.project[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.project[project].description));
    if (projects.project[project].images.length > 0 ) {
      for (image in projects.project[project].images) {
         $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.project[project].images[image]));
      }
    }
  }
}

// projects.display();


education.display = function () {
 for (school in education.schools) {
  $("#education").append(HTMLschoolStart);
  $(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[school].name));
  $(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[school].degree));
  $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
  $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
  if ( education.schools[school].majors.length > 0) {
    for (major in education.schools[school].majors) {
       $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]));
    }
  }
 }

 $(".education-entry:last").append(HTMLonlineClasses);

  for (onlinecourse in education.onlineCourses) {
     $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[onlinecourse].title));
     $(".education-entry:last").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[onlinecourse].school));
     $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.onlineCourses[onlinecourse].dates));
     $(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[onlinecourse].url));
   }
}
bio.display();

work.display();

projects.display();

education.display();

$("#mapDiv").append(googleMap);