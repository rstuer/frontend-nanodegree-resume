var work = {
    "jobs": [
        {
            "employer": "Kronos",
            "title": "QA  Developer",
            "location": "Chelmsford, MA",
            "dates": "MAr 2013 - Current",
            "description": "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.",
            "display": "function()"
        },
        {
            "employer": "Analogic",
            "title": "Software Engineer",
            "location": "Peabody, MA",
            "dates": "May 1999 - Mar 2013",
            "description": "ise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it.",
            "display": "function()"
        },
        {
            "employer": "Nixdorf",
            "title": "Math Teacher",
            "location": "Groton, CT",
            "dates": "Jul 1996 - May 1999",
            "description": "Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which.",
            "display": "function()"
        }
    ]
}

var education = {
  "schools": [
    {
      "name": "University of Utrecht",
      "location": "Utrecht",
      "degree": "Bachelor",
      "majors": ["Sedimentology","Hydrology"],
      "dates": 1986,
      "url": "http://www.university.com",
      "display": "function()"
    },
    {
      "name": "University of Utrecht",
      "location": "Utrecht",
      "degree": "Master",
      "majors": ["Geophysics","Geology"],
      "dates": 1989,
      "url": "http://www.university.com",
      "display": "function()"
    },
    {
      "name": "College of Arnhem",
      "location": "Arnhem",
      "degree": "Diploma",
      "majors": ["Latin","Math"],
      "dates": 1979,
      "url": "http://www.college.com",
      "display": "function()"
    }
  ],
  "onlineCourses":  [
    {
      "title": "Computer Science",
      "school": "Universiy of Online",
      "dates": 2001,
      "url": "http://www.onlinecourse.com",
      "display": "function()"
    },
    {
     "title": "Java Course",
      "school": "Universiy of Online",
      "dates": 2010,
      "url": "http://www.onlinecourse.com",
      "display": "function()"
    }
  ]
}

var bio = {
    "name": "Richard Stuer",
    "role": "QA  Developer",
    "contacts": {
        "mobile": "999-999-9999",
        "email": "rstuer$org.com",
        "github": "https://githud.org/rstuer",
        "twitter": "@rstuer",
        "location": "Weston"
      },
      "welcomeMessage": "So if on advanced addition absolute received replying throwing he. Delighted consisted newspaper of unfeeling as neglected so.",
      "skills": ["Java","Communication","PM"],
      "biopic": "images/kitten.jpg",
      "display": "function()"
 }

 var projects = {
    "projects": [
        {
            "title": "Project 1",
            "dates": "2010-2011",
            "description": "Demesne far hearted suppose venture excited see had has",
            "images": ["http://yahoo.com", "http://yahoo.com"],
            "display": "function()"
        },
        {
             "title": "Project 2",
            "dates": "2012",
            "description": "Demesne enture excited see had has",
            "images": ["http://yahoo.com", "http://yahoo.com"],
            "display": "function()"
        },
        {
             "title": "Project 3",
            "dates": "2014-2015",
            "description": "Demesne excited see had has",
            "images": ["http://yahoo.com", "http://yahoo.com"],
            "display": "function()"
        }
    ]
}

var headerName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(headername);