import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "",
      image:user.image,
      
        // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FChris-Hemsworth&psig=AOvVaw3feODZUGhHxppLpg2-K0Ya&ust=1687798795001000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjy39Ly3v8CFQAAAAAdAAAAABAE",
      contacts: [
        {
          id: 2,
          name: "Kamal",
          image:
            "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg",
          chatlog: [
            {
              text: "Hello, GoodMoring!",
              timestamp: "10:00 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Good morning",
              timestamp: "10:00 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "What are your plans for today?.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "lets meet",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Oky Bro !",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: "Hari prakash",
          image:"https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/c554d0b7-927e-4bd8-ad59-ae0a93e9e768",
            // "https://media.istockphoto.com/photos/portrait-of-a-confident-young-man-picture-id1141737652?b=1&k=20&m=1141737652&s=170667a&w=0&h=1Ni7irJ6VB9BXN7LbJIdNHP0h5EMoyJcRyvXl5_nzDs=",
          chatlog: [
            {
              text: "Hi !",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Badhiyaaaa Tu bata",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "sameee.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "im going to movies wanna come?",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "suree",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Simran",
          image:
            "https://th.bing.com/th/id/OIP.-d8GY5axNJZYoXsNOUJ4iwAAAA?rs=1&pid=ImgDetMain",
          chatlog: [
            {
              text: "Hi, Krishna!",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine simran. How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  Krishna.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "r u busy??",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: " no!",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Arun",
          image:
            "https://th.bing.com/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?rs=1&pid=ImgDetMain",
          chatlog: [],
        },
        {
          id: 6,
          name: "Bunny",
          image:
            "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
          chatlog: [
            {
              text: "Hey",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hii how are you",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Im okay and you?",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "im great thx",
              timestamp: "10:04 AM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "Great!",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Jatin",
          image:
            "https://static6.businessinsider.com/image/56a8f50ddd089553198b4731-1200/ditch-the-smirk-when-it-comes-to-profile-pictures-only-2-of-the-top-ranked-profiles-on-okcupid-featured-people-hiding-their-smiles-instead-try-smiling-with-your-teeth.jpg",
          chatlog: [
            {
              text: "Where are you bro ? ",
              timestamp: "10:06 AM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market",
              timestamp: "10:06 AM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ....",
              timestamp: "10:07 AM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "10:08 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "R u okay??",
              timestamp: "10:09 AM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Hmmmmm!",
              timestamp: "10:09 AM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "Kirti",
          image:"https://cdn2.f-cdn.com/files/download/38547697/ddc116.jpg",
            // "https://global-uploads.webflow.com/5d121ce15cf154f8f7d91740/5fb7e016798aa0ccca2ca0ba_Abhishek%20Dwivedi.jpg",
          chatlog: [],
        },
        {
          id: 9,
          name: "Dev",
          image:
            "https://images.freeimages.com/images/large-previews/51f/profile-1439243.jpg",
          chatlog: [],
        },
      ],
    },
  };