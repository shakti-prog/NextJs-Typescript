export default{
   headline:{
       url:`top-headlines?country=in&apiKey=${process.env.API_KEY}`
   },
   business:{
       url:`top-headlines?country=in&category=business&apiKey=${process.env.API_KEY}`
   },
   health:{
       url:`top-headlines?country=in&category=generalhealth&apiKey=${process.env.API_KEY}`
   },
   entertainment:{
       url:`top-headlines?country=in&category=entertainment&apiKey=${process.env.API_KEY}`
   },
   science:{
       url:`top-headlines?country=in&category=science&apiKey=${process.env.API_KEY}`
   },
   sport:{
       url:`top-headlines?country=in&category=sports&apiKey=${process.env.API_KEY}`
   },
   technology:{
       url:`top-headlines?country=in&category=technology&apiKey=${process.env.API_KEY}`
   },

}