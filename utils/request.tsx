const Key = "bdf23da35e554f11881ec710265f4e4a";



export default{
   headline:{
       url:`top-headlines?country=in&apiKey=${Key}`
   },
   business:{
       url:`top-headlines?country=in&category=business&apiKey=${Key}`
   },
   health:{
       url:`top-headlines?country=in&category=generalhealth&apiKey=${Key}`
   },
   entertainment:{
       url:`top-headlines?country=in&category=entertainment&apiKey=${Key}`
   },
   science:{
       url:`top-headlines?country=in&category=science&apiKey=${Key}`
   },
   sport:{
       url:`top-headlines?country=in&category=sports&apiKey=${Key}`
   },
   technology:{
       url:`top-headlines?country=in&category=technology&apiKey=${Key}`
   },
   usa:{
    url:`top-headlines?country=us&apiKey=${Key}`
   },
   australia:{
       url:`top-headlines?country=au&apiKey=${Key}`
   },
   russia:{
       url:`top-headlines?country=ru&apiKey=${Key}`
   },
   brazil:{
    url:`top-headlines?country=br&apiKey=${Key}`
   },
   china:{
    url:`top-headlines?country=cn&apiKey=${Key}`
   }

}