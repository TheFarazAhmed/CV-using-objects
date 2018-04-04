var personalInfo = {
    name: "FARAZ AHMED",
    address: "30-C (B) , Block-2 , PECHS, Karachi",
    contact: "0332-1327313",
    email: "faraz17968@gmail.com",
    fatherName: "ABDUL HAMID",
    dob: "20 May, 1987",
    religion: "Islam",
    nationality: "Pakistani",
    language: "Urdu, English, Sindhi",
    maritalStatus: "Married"
};

var qualification = {
    qual1: "BCS (2005) University of Karachi",
    qual2: "MCS (2007) University of Karachi",
    qual3: "MSCS (2016) M.A.J.U"
};

var experience = {
    exp1: "currently working as Lecturer(BPS-17) at Govt. National College Karachi, since Dec-2014",
    exp2: "10+ years teaching experience at different universities & institutes"
};

var skills = {
    skill1: "Academic Management",
    skill2: "Administrative Management",
    skill3: "Invigilation Expert",
    skill4: "C , C++",
    skill5: "Java",
    skill6: "HTML",
    skill7: "CSS",
    skill8: "Javascript",
    skill9: "Advance Javascript",
    skill10: "MS Office"
};

var fields_in_cv = {
    field1: "OBJECTIVE",
    field2: "ACADEMIC QUALIFICATION",
    field3: "EXPERIENCE",
    field4: "PROFESSIONAL SKILLS",
    field5: "PERSONAL INFORMATION",
    field6: "COMPUTER SKILLS / COURSES",
    field7: "PERSONAL STRENGTH",
    field8: "REFERENCES",
}

var content = {
    cnt1: "To obtain a challenging position utilizing all of my skill and joining an advance Organization, this offers opportunities for career development having futuristic approach.",
    cnt2: "Able to work under pressure, Hardworking, Honest, Optimistic, ready to face challenges, ability to manage a team or working as a team member and complete daily tasks.",
    cnt3: "provided upon request"
}

var div1 = document.getElementById("info");
var infoH2 = div1.getElementsByTagName("h2");
var infoP = div1.getElementsByTagName("p");

infoH2[0].innerHTML = personalInfo.name;
infoP[0].innerHTML = personalInfo.address;
infoP[1].innerHTML = personalInfo.contact;
infoP[2].innerHTML = personalInfo.email;
infoP[2].parentNode.setAttribute("href", "mailto:faraz17968@gmail.com");

var img = div1.getElementById("img1");
img[0].setAttribute("src", "fa.jpg");

var div2 = document.getElementsByClassName("alert-danger");
var div_h5 = div2.getElementsByTagName("h5");
var div2_p = div2.getElementsByTagName("p");

div_h5[0].innerHTML = fields_in_cv.field1;
div2_p[0].innerHTML = content.cnt1;

div_h5[1].innerHTML = fields_in_cv.field2;
div2_p[1].innerHTML = qualification.qual1;
div2_p[2].innerHTML = qualification.qual2;
div2_p[3].innerHTML = qualification.qual3;

div_h5[2].innerHTML = fields_in_cv.field3;
div2_p[4].innerHTML = experience.exp1;
div2_p[5].innerHTML = experience.exp2;

div_h5[3].innerHTML = fields_in_cv.field4;
div2_p[6].innerHTML = skills.skill1;
div2_p[7].innerHTML = skills.skill2;
div2_p[8].innerHTML = skills.skill3;
div2_p[9].innerHTML = skills.skill4;
div2_p[10].innerHTML = skills.skill5;
div2_p[11].innerHTML = skills.skill6;
div2_p[12].innerHTML = skills.skill7;
div2_p[13].innerHTML = skills.skill8;
div2_p[14].innerHTML = skills.skill9;

div_h5[4].innerHTML = fields_in_cv.field5;
div2_p[16].innerHTML = personalInfo.name;
div2_p[18].innerHTML = personalInfo.fatherName;
div2_p[20].innerHTML = personalInfo.dob;
div2_p[22].innerHTML = personalInfo.religion;
div2_p[24].innerHTML = personalInfo.nationality;
div2_p[26].innerHTML = personalInfo.language;
div2_p[27].innerHTML = skills.skill10;

div_h5[6].innerHTML = fields_in_cv.field7;
div2_p[32].innerHTML = content.cnt2;

div_h5[7].innerHTML = fields_in_cv.field8;
div2_p[33].innerHTML = content.cnt3;


//styling
for (var i = 0; i < div_h5.length; i++) {
    div_h5[i].setAttribute("class", "text-primary");
    div_h5[i].className += " smhd"
}