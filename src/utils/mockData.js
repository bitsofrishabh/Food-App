const resList = [
  {
    address: "8/6, Kensington Point, Ulsoor Road, Ulsoor, Bangalore",
    name: "The Grill House",
    online_order: "Yes",
    book_table: "Yes",
    rate: "4.1",
    votes: 765,
    phone: "080 40977011",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig1",
    location: "Ulsoor",
    rest_type: "Casual Dining, Bar",
    dish_liked:
      "Steak, Burgers, Cocktails, Beer, Buffalo Wings, Pasta, Chicken Stroganoff",
    cuisines: "American, Mexican, Italian, Steak",
    cost: "1,200",
    "listed_in(type)": "Delivery",
  },
  {
    address: "322, Shalini Complex, CMH Road, Indiranagar, Bangalore",
    name: "Kartik's Mithai Shoppe",
    online_order: "Yes",
    book_table: "No",
    rate: "4.1",
    votes: 110,
    phone: "080 41264166",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig2",
    location: "Indiranagar",
    rest_type: "Quick Bites, Sweet Shop",
    dish_liked:
      "Chaat, Panipuri, Chole Bhature, Rasmalai, Chhole Bhature, Sev Puri, Samosa",
    cuisines: "Mithai, Street Food",
    cost: 150,
    "listed_in(type)": "Delivery",
  },
  {
    address: "48, Triump Tower, Church Street, Bangalore",
    name: "Desi Vdesi",
    online_order: "Yes",
    book_table: "No",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig3",
    rate: "3.9",
    votes: 202,
    phone: "+91 7406262230\n+91 9880733916",
    location: "Church Street",
    rest_type: "Quick Bites",
    dish_liked:
      "Paratha, Momos, Lassi, Sandwiches, Burgers, Nachos, Potato Wedges",
    cuisines: "Fast Food, North Indian, Rolls",
    cost: 250,
    "listed_in(type)": "Delivery",
  },
  {
    address: "57, Coles Road, Near ICICI Bank, Frazer Town, Bangalore",
    name: "Taipan",
    online_order: "Yes",
    book_table: "No",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig4",
    rate: "3.5",
    votes: 126,
    phone: "+91 8041251279\n080 25467784",
    location: "Frazer Town",
    rest_type: "Casual Dining",
    dish_liked: "Noodles, Dragon Chicken, Chop Suey",
    cuisines: "Chinese, Momos",
    cost: 700,
    "listed_in(type)": "Delivery",
  },
  {
    address:
      "Ground Floor, Figure and Fitness Gym, ESI Hospital Road, Double Road, Stage 3, Indiranagar, Bangalore",
    name: "UBCR",
    online_order: "Yes",
    book_table: "No",
    rate: "3.3",
    votes: 5,
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig4",
    phone: "+91 8123049997",
    location: "Indiranagar",
    rest_type: "Cafe, Quick Bites",
    dish_liked: "",
    cuisines: "Italian, American, Chinese, Arabian, North Indian, Cafe",
    cost: 350,
    "listed_in(type)": "Delivery",
  },
  {
    address: "St Patricks Complex, 2nd Floor, Brigade Road, Ashok Nagar",
    name: "The Adukkala Restaurant",
    online_order: "Yes",
    book_table: "No",
    rate: "3.6",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig5",
    votes: 41,
    phone: "+91 9845765017\n+91 9980225321",
    location: "Brigade Road",
    rest_type: "Casual Dining",
    dish_liked: "",
    cuisines: "Kerala",
    cost: 500,
    "listed_in(type)": "Delivery",
  },
  {
    address: "2A-3A-4A, Cears Plaaza, Residency Road, Bangalore",
    name: "The Good Grain",
    online_order: "Yes",
    book_table: "No",
    rate: "4.1",
    votes: 54,
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig6",
    phone: "080 43751583\n080 43751584",
    location: "Residency Road",
    rest_type: "Casual Dining",
    dish_liked: "Curd Rice, Biryani",
    cuisines: "Healthy Food, North Indian, South Indian",
    cost: 400,
    "listed_in(type)": "Delivery",
  },
  {
    address:
      "192/1, Ground Floor, Second Cross, Rose Garden, Park Road, Jeevanhalli, Cox Town",
    name: "Debby's Kitchen",
    online_order: "Yes",
    book_table: "No",
    rate: "3.6",
    votes: 16,
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig7",
    phone: "+91 8310531184",
    location: "Frazer Town",
    rest_type: "Quick Bites",
    dish_liked: "",
    cuisines: "Modern Indian, American, Chinese",
    cost: 250,
    "listed_in(type)": "Delivery",
  },
  {
    address:
      "104, Narayan Pillai Street, Opposite C Mart, Shivajinagar Bangalore",
    name: "Vasavi Bangarpet Chats",
    online_order: "Yes",
    book_table: "No",
    rate: "",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig8",
    votes: 0,
    phone: "+91 9898045929",
    location: "Shivajinagar",
    rest_type: "Quick Bites",
    dish_liked: "",
    cuisines: "Street Food",
    cost: 150,
    "listed_in(type)": "Delivery",
  },
  {
    address: "24/48, M M Road, Benson Town, Frazer Town, Bangalore",
    name: "Food Singh",
    online_order: "Yes",
    book_table: "No",
    rate: "",
    votes: 0,
    phone: "+91 7834929000",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig19",
    location: "Frazer Town",
    rest_type: "Delivery",
    dish_liked: "",
    cuisines: "North Indian",
    cost: 500,
    "listed_in(type)": "Delivery",
  },
  {
    address: "110-A, Westminister Building, Cunningham Road, Bengaluru",
    name: "Brownie Heaven",
    online_order: "Yes",
    book_table: "No",
    rate: "4.2",
    votes: 34,
    phone: "080 43747949\n+91 9742023272",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig10",
    location: "Cunningham Road",
    rest_type: "Dessert Parlor",
    dish_liked:
      "Filter Coffee, Triple Chocolate, Brownie Chocolate, Vanilla Ice Cream, Brownie Shake, Tiramisu, Chocolate Shake",
    cuisines: "Desserts, Fast Food",
    cost: 300,
    "listed_in(type)": "Delivery",
  },
  {
    address:
      "286, 287, 292, /3, 2nd Floor, 21 Nova Villa, New BBMP, 74, Commercial Plaza, K Kamraj Road. Kammanahalli Main Road. Near Commercial Street, Kacharakaranahalli, Kammanahalli, Bangalore",
    name: "Gelato Italiano",
    online_order: "Yes",
    book_table: "No",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig11",
    rate: "3.2",
    votes: 4,
    phone: "+91 9886399948",
    location: "Kammanahalli",
    rest_type: "Dessert Parlor, Bakery",
    dish_liked: "",
    cuisines: "Ice Cream, Desserts, Bakery",
    cost: 200,
    "listed_in(type)": "Delivery",
  },
  {
    address:
      "15/2, Pothallappa Garden, 1st Cross Road, Ayappa Garden, Adugodi, Koramangala 7th Block, Bangalore",
    name: "Bhandary's Kitchen",
    online_order: "Yes",
    book_table: "No",
    rate: "3.6",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig12",
    votes: 16,
    phone: "+91 9342693634",
    location: "Koramangala 7th Block",
    rest_type: "Delivery",
    dish_liked: "",
    cuisines: "North Indian",
    cost: 300,
    "listed_in(type)": "Delivery",
  },
  {
    address: "99, Shivaji Road, Rajiv Gandhi Colony, Shivajinagar, Bangalore",
    name: "Kabab Mela",
    online_order: "Yes",
    book_table: "No",
    rate: "",
    votes: 0,
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig13",
    phone: "+91 8105395444\n+91 7795425885",
    location: "Shivajinagar",
    rest_type: "Quick Bites",
    dish_liked: "",
    cuisines: "North Indian, Chinese, Kebab",
    cost: 300,
    "listed_in(type)": "Delivery",
  },
  {
    address:
      "Q Court, 3rd Floor, Garuda Mall, Magarth Road, Ashok Nagar, Brigade Road, Bangalore",
    name: "China South",
    online_order: "Yes",
    book_table: "No",
    rate: "",
    votes: 0,
    phone: "+91 9513300912",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig14",
    location: "Brigade Road",
    rest_type: "Casual Dining",
    dish_liked: "",
    cuisines: "Chinese, Tibetan",
    cost: 600,
    "listed_in(type)": "Delivery",
  },
  {
    address: "24/48, M Road Benson Town Frazer Town, Bangalore",
    name: "Chination",
    online_order: "No",
    book_table: "No",
    rate: "",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig15",
    votes: 0,
    phone: "+91 8750482000\n+91 9910009994",
    location: "Frazer Town",
    rest_type: "Delivery",
    dish_liked: "",
    cuisines: "Chinese",
    cost: 600,
    "listed_in(type)": "Delivery",
  },
  {
    address:
      "Garuda Mall, 3rd Floor, 15 Magrath Road, Craig Park Layout, Ashok Nagar, Bengaluru",
    name: "Desi Streat",
    online_order: "Yes",
    book_table: "No",
    rate: "",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig16",
    votes: 0,
    phone: "+91 9513300902",
    location: "Brigade Road",
    rest_type: "Food Court",
    dish_liked: "",
    cuisines: "South Indian, Street Food",
    cost: 400,
    "listed_in(type)": "Delivery",
  },
  {
    address: "KH Marigowda Road, Near Hopcoms Complex, Shanti Nagar, Bangalore",
    name: "Durga Sagar",
    online_order: "Yes",
    book_table: "No",
    rate: "3.3",
    imageURL:
      "https://source.unsplash.com/random/900%C3%97700/?restaurant?sig17",
    votes: 8,
    phone: "00 919986218630",
    location: "Shanti Nagar",
    rest_type: "Quick Bites",
    dish_liked: "",
    cuisines: "South Indian",
    cost: 150,
    "listed_in(type)": "Delivery",
  },
];

export default resList;
