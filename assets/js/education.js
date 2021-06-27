AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Introduction to Cybersecurity",
    cardImage: "assets/images/education-page/cisco.png",
    moocLink: "https://www.credly.com/badges/02002c9c-d16d-4117-82be-fc7a51379526?source=linked_in_profile",
  },
  {
    title: "Cyber Security Foundation Professional Certificate",
    cardImage: "assets/images/education-page/cert.png",
    moocLink: "https://certificates.easy-lms.com/exam/session/12aacd21-c2d7-4994-b1b5-e1d1abb01631",
  },
  {
    title: "Introduction to Cloud Entity",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://coursera.org/share/8646b9ea0d4d9772b6a8b4111cf1c4c1",
  },
  {
    title: " Python Programming - From Basics to Advanced level [2021]",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-cf619c85-4099-4c96-9b66-0244dec40ddf.pdf",
  },
  {
    title: "Automate the Boring Stuff with Python Programming",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-93347198-aa29-4fdc-90dd-28ed5fd4c441.pdf",
  },
  {
    title: " HTML, JavaScript, & Bootstrap - Certification Course",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-d3f26199-386d-427c-8258-5dd94fe6ef83.pdf",
  },
  {
    title: "Practical Web Design and Development: 7 Courses in One",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/certificate/UC-9f996760-6f3e-4ca7-be2b-366917583022/",
  },
  // {
  //   title: "Intro to React",
  //   cardImage: "assets/images/education-page/EdX.png",
  //   moocLink: "https://www.edx.org/learn/reactjs",
  // },
  // {
  //   title: "Intro to React Native",
  //   cardImage: "assets/images/education-page/coursera1.png",
  //   moocLink: "https://www.coursera.org/lecture/react-native/introduction-to-react-native-Eax0D",
  // },
  // {
  //   title: "NodeJS, Express and MongoDB",
  //   cardImage: "assets/images/education-page/coursera1.png",
  //   moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  // },
  // {
  //   title: "XML-AJAX",
  //   cardImage: "assets/images/education-page/udemy.png",
  //   moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  // },
  // {
  //   title: "Data Structures & Algorithms",
  //   cardImage: "assets/images/education-page/udacity_logo.png",
  //   moocLink: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  // },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);