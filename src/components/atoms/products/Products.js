import Kobered from '../../styles/img/kobeRed.png';
import NikeDunkHighPurple from '../../styles/img/purple.jpg';
import NikeDunkLowGreen from '../../styles/img/dunkLowGreen.png';
import NikeAirforce1 from '../../styles/img/nikeairforce1.png';
import NikeOffWhiteTerra from '../../styles/img/NikeTerra.png';
import NikeSlides from '../../styles/img/nikeslides.png';
import NikeWaffle from '../../styles/img/nikeRunner.png';
import NikeHumaraBlack from '../../styles/img/NikeHumaraBlack.png';
import NikeAirMaxPlus from '../../styles/img/AirMaxPlus.png';
import NikeAirMaxPlusRed from '../../styles/img/AirMaxPLusRed.png';
import NikeAirHumara from '../../styles/img/NikeAirHumara.png';
import NikeDunkHighBlue from '../../styles/img/NikeDunkBlueHigh.png';
import NikePattaBlue from '../../styles/img/NikePattaBlue.png';
import NikeAirMaxOrange from '../../styles/img/NikeAirMax1.png';
import NikeNewSpecies from '../../styles/img/NikeNewSpecies.png';
import NikeDunkReflective from '../../styles/img/nikeDUNKReflect.png';
import JordanXTravisScott from '../../styles/img/JordanXTravis.png';

const products = [
    {
      id: 1,
      name: 'Nike Dunk low',
      price: 99.99,
      imgSrc: NikeDunkLowGreen, 
      description: "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colours. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century.",
      sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41']
    },
    {
        id: 2,
        name: 'Nike Dunk High',
        price: 99.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description: 'Created for the hardwood but taken to the streets, the `80s basketball icon returns with perfectly sheened overlays and original university colours. With its classic hoops design, the Nike Dunk High Retro channels `80s vintage back onto the streets while its padded, high-top collar adds an old-school look rooted in comfort.',
        imgSrc: NikeDunkHighPurple 
      },
      {
        id: 3,
        name: 'Kobe Red',
        price: 99.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Create space, stop in an instant, shoot off the dribble—do it all with the Nike Precision 6. It's designed to enable quick players to shift speeds and change directions while staying in control. From the plush collar and tongue to the modified herringbone traction, the agile low top lets you make the most of your skills while pushing the tempo of the game.",
        imgSrc: Kobered 
      },
      {
        id: 4,
        name: "Nike Air Force 1",
        price: 99.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"As cool today as when it first dropped more than 40 years ago, the AF-1 is a classic you can count on. Its durable construction and grippy tread will see you through breaktime after breaktime. And while they look great fresh out of the box, they remain cool even when covered in scuffs and scrapes. In fact, they might be even better.",
        imgSrc: NikeAirforce1 
      },
      {
        id: 5,
        name: 'Nike X Off-White Waffle Racer',
        price: 229.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Off-White founder Virgil Abloh and Nike join forces once again to continue their work with champions in progress. Featuring striking patterns and silhouettes built for speed, Virgil delivers style and substance designed to inspire progress both on and off the pitch. Abloh delivers his latest tribute to the 'athlete in progress' with the Nike x Off-White Waffle Racer. The race-inspired design takes the foundation created by Bill Bowerman and turns it into a shoe bursting with colours and iconic details.",
        imgSrc: NikeWaffle 
      },
      {
        id: 6,
        name: 'Nike Humara',
        price: 99.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Tame the wild—says who? Delivering vintage ACG aesthetics and Nike trail running DNA, the Air Humara sets you up to break free from mediocrity. Fast, comfy and with a whole lot of outdoor appeal, its premium materials and fresh-air colours encapsulate the '90s zeitgeist. Turn it over: its textile-wrapped midsole puts you a step ahead of the rest, while Zoom Air in the forefoot and Nike Air in the heel deliver legendary comfort so you can stay untamable.",
        imgSrc: NikeHumaraBlack 
      },
      {
        id: 7,
        name: 'Off-White x Nike Air Terra',
        price: 199.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Virgil Abloh's legacy continues. Inspired by Nike's late '80s and early '90s offerings, the Terra Forma reinvents the hiking boot like only Off-White™ can. Imaginative details like splashy suede overlays and a cored-out tongue reference past designs while pushing the boundaries of reinvention. To finish, the chunky outsole's message graces each step with a reminder: tread lightly and treat the earth with care.",
        imgSrc: NikeOffWhiteTerra 
      },{
        id: 8,
        name: 'Nike AirMax Plus',
        price: 99.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Show your attitude with the Nike Air Max Plus. Tuned Air provides premium stability and incredible cushioning. With the original's wavy design lines, TPU accents and airy mesh on the upper, the shoe is a tribute to rebellious style.",
        imgSrc: NikeAirMaxPlusRed 
      },
      {
        id: 9,
        name: 'Nike Calm',
        price: 99.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Enjoy a peaceful, comfortable experience wherever your day off takes you. Made from soft yet responsive foam, these lightweight slippers are easy to style and carry. While the water-friendly design is ideal for the beach or pool, the minimalist look is beautiful enough to wear around town too. Slide in and head out the door.",
        imgSrc: NikeSlides 
      },
      {
        id: 10,
        name: 'Nike AirMax Plus',
        price: 99.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Show your attitude with the Nike Air Max Plus. Tuned Air provides premium stability and incredible cushioning. With the original's wavy design lines, TPU accents and airy mesh on the upper, the shoe is a tribute to rebellious style.",
        imgSrc: NikeAirMaxPlus 
      },
      {
        id: 11,
        name: 'Nike Humara',
        price: 99.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Tame the wild—says who? Delivering vintage ACG aesthetics and Nike trail running DNA, the Air Humara sets you up to break free from mediocrity. Fast, comfy and with a whole lot of outdoor appeal, its premium materials and fresh-air colours encapsulate the '90s zeitgeist. Turn it over: its textile-wrapped midsole puts you a step ahead of the rest, while Zoom Air in the forefoot and Nike Air in the heel deliver legendary comfort so you can stay untamable.",
        imgSrc: NikeAirHumara 
      },
      {
        id: 12,
        name: 'Nike Dunk High',
        price: 159.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Created for the hardwood but taken to the streets, the `80s basketball icon returns with perfectly sheened overlays and original university colours. With its classic hoops design, the Nike Dunk High Retro channels `80s vintage back onto the streets while its padded, high-top collar adds an old-school look rooted in comfort.",
        imgSrc: NikeDunkHighBlue 
      },
      {
        id: 13,
        name: 'Nike X Patta',
        price: 159.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Created for the hardwood but taken to the streets, the `80s basketball icon returns with perfectly sheened overlays and original university colours. With its classic hoops design, the Nike Dunk High Retro channels `80s vintage back onto the streets while its padded, high-top collar adds an old-school look rooted in comfort.",
        imgSrc: NikePattaBlue 
      },
      {
        id: 14,
        name: 'Nike Air Max 1',
        price: 159.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Created for the hardwood but taken to the streets, the `80s basketball icon returns with perfectly sheened overlays and original university colours. With its classic hoops design, the Nike Dunk High Retro channels `80s vintage back onto the streets while its padded, high-top collar adds an old-school look rooted in comfort.",
        imgSrc: NikeAirMaxOrange 
      },
      {
        id: 15,
        name: 'Nike Air Max 90',
        price: 159.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Created for the hardwood but taken to the streets, the `80s basketball icon returns with perfectly sheened overlays and original university colours. With its classic hoops design, the Nike Dunk High Retro channels `80s vintage back onto the streets while its padded, high-top collar adds an old-school look rooted in comfort.",
        imgSrc: NikeNewSpecies 
      },
      {
        id: 16,
        name: 'Nike Air Max 90',
        price: 159.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Created for the hardwood but taken to the streets, the `80s basketball icon returns with perfectly sheened overlays and original university colours. With its classic hoops design, the Nike Dunk High Retro channels `80s vintage back onto the streets while its padded, high-top collar adds an old-school look rooted in comfort.",
        imgSrc: NikeNewSpecies 
      },
      {
        id: 17,
        name: 'Nike Dunk Low',
        price: 129.99,
        sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
        description:"Created for the hardwood but taken to the streets, the `80s basketball icon returns with perfectly sheened overlays and original university colours. With its classic hoops design, the Nike Dunk High Retro channels `80s vintage back onto the streets while its padded, high-top collar adds an old-school look rooted in comfort.",
        imgSrc: NikeDunkReflective 
      },
      {
        id: 18,
        name: 'Jordan X Travis Scott',
        price: 129.99,
        sizes: ['XS', 'M', 'L', 'XL', 'XXL'],
        description:"Created for the hardwood but taken to the streets, the `80s basketball icon returns with perfectly sheened overlays and original university colours. With its classic hoops design, the Nike Dunk High Retro channels `80s vintage back onto the streets while its padded, high-top collar adds an old-school look rooted in comfort.",
        imgSrc: JordanXTravisScott 
      },
      
  ];
  
  export default products;