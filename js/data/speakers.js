speakers = [{
    name: "Auwal Ms",
    company: "Google Inc.",
    topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image_url: "https://picsum.photos/200"
  },
  {
    name: "Abdullahi Aliyu",
    company: "Omniswift Ltd.",
    topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor",
    image_url: "https://picsum.photos/200"
  },
  {
    name: "Abdullahi Aliyu",
    company: "Omniswift Ltd.",
    topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor",
    image_url: "https://picsum.photos/200"
  },
  {
    name: "Abdullahi Aliyu",
    company: "Omniswift Ltd.",
    topic: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor",
    image_url: "https://picsum.photos/200"
  }
];
var firebaseConfig = {
  apiKey: "", //copy from the dashboard
  databaseURL: "https://devfest-abuja.firebaseio.com",
  projectId: "devfest-abuja",
  appId: "1:595188594579:web:f18586003e9a7df9d91a66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();
const speakersRef = db.collection("speakers");

const getSpeakers = () => {
  speakersRef
    .get()
    .then(speakerList => {
      speakers = speakerList.docs;
      console.log(speakers)
      // console.log(speakers.docs)
    })
    .catch(error => {
      console.error(error);
      // hideLoading();
    });
};

getSpeakers();