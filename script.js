function home(){
        document.querySelector(".profile__page").style.display="none"; 

document.querySelector(".trending__page").style.display="none"; 

document.querySelector(".favourite__page").style.display="none"; 
 document.querySelector(".music__player__page__one").style.display="flex";
 
window.scrollTo(0, 0);
 
}


function trending(){
   document.querySelector(".profile__page").style.display="none"; 

document.querySelector(".trending__page").style.display="flex"; 

document.querySelector(".favourite__page").style.display="none"; 
 document.querySelector(".music__player__page__one").style.display="none";
   
window.scrollTo(0, 0);
 
}

function favourite(){
   document.querySelector(".profile__page").style.display="none"; 

document.querySelector(".trending__page").style.display="none"; 

document.querySelector(".favourite__page").style.display="flex"; 
 document.querySelector(".music__player__page__one").style.display="none";
   
window.scrollTo(0, 0);   
   
}

function profile(){
   document.querySelector(".profile__page").style.display="flex"; 

document.querySelector(".trending__page").style.display="none"; 

document.querySelector(".favourite__page").style.display="none"; 
 document.querySelector(".music__player__page__one").style.display="none";
 
window.scrollTo(0, 0);
 
}


function tabs(tabsc) {
    var i;
    var tabs = document.getElementsByClassName("tabsc");
    for (i = 0; i < tabs.length; i++) {
       tabs[i].style.display = "none";  
    }
    document.getElementById(tabsc).style.display = "flex";  
}



window.onload = ()=>{
  document.querySelector("#loader").style.display="none";

document.querySelector("body").style.overflow="scroll";
 /*document.querySelector(".xD").style.display="flex";*/
 document.querySelector(".bottom_navigation_bar").style.display="flex";
 
 var song_data = [
 {
       
       song:"Ala vikuntapuramlo",
       artist:"Thaman", 
       id:"1", music_link:"https://www.dropbox.com/s/8927i8163apzpfl/Samajavaragamana%20-%20SenSongsMp3.Co.mp3?raw=1", thumbnail:"https://a10.gaanacdn.com/gn_img/song/Bp1bAynb02/1bA4AoE4W0/size_xxl_1569643099.webp"
   },
   {
       song:"Let me Down Slowly",
       artist:"Alec Benjamin", 
       id:"2", 
       music_link:"https://www.dropbox.com/s/gfwbjjwpqbk8cq0/y2mate.com%20-%20Alec%20Benjamin%20%20Let%20Me%20Down%20Slowly%20Lyrics.mp3?raw=1", thumbnail:"https://i.ibb.co/XsTRjWs/maxresdefault.jpg"
   },
   
   {
       song:"Let Me Love You",
       artist:"DJ Snake feat Justin bieber", 
       id:"3", 
    music_link:"https://www.dropbox.com/s/pngtrll7ctzdtm4/y2mate.com%20-%20DJ%20Snake%20ft%20Justin%20Bieber%20%20Let%20Me%20Love%20You%20Lyric%20Video.mp3?raw=1", thumbnail:"https://i.ibb.co/N2qV8y8/DJSnake-Let-Me-Love-You-1.jpg"
   },
   {
       song:"Friends",
       artist:"Marshmello & Anne Marie", 
       id:"4", 
    music_link:"https://www.dropbox.com/s/mtc6ki2f71jx28w/y2mate.com%20-%20Marshmello%20%20AnneMarie%20%20FRIENDS%20Lyrics.mp3?raw=1", thumbnail:"https://i.ibb.co/YP04gh0/Marshmello-and-Anne-Marie-Friends.jpg"
   },
   
     
   {
       song:"Feelings",
       artist:"Vatsala", 
       id:"5",
        music_link:"https://www.dropbox.com/s/e7mu7ikdu37nq3p/y2mate.com%20-%20Feelings%20%20Vatsala%20%20Female%20Version%20%20Sumit%20Goswami.mp3?raw=1", thumbnail:"https://i.ibb.co/0jfyxyZ/maxresdefault-2.jpg"
       
       
   },
   
    {
       song:"Kill This Love",
       artist:"Black Pink", 
       id:"6",
        music_link:"https://www.dropbox.com/s/ea8x5psfnufacoz/y2mate.com%20-%20BLACKPINK%20%20Kill%20This%20Love%20MV.mp3?raw=1", thumbnail:"https://i.ibb.co/VSskSVb/5ed0be09c7c8d.jpg"
   },
  
 {
       song:"Tu hi hai Aashqui",
       artist:"Arijit Singh & Palak", 
       id:"7",
        music_link:"https://www.dropbox.com/s/fjwp0bi46vbt1yg/y2mate.com%20-%20Tu%20Hi%20Hai%20Aashiqui%20Tu%20Hi%20Aawargi%20%20Full%20HD%20Lyrics%20Video%20Status.mp3?raw=1", thumbnail:"https://i.ibb.co/kg3rXxX/514547fd-5e1f-4d1c-aada-3d5e40a2c23a-1024.jpg"
       
       
   },
   
 {
       song:"Mann Mera",
       artist:"Rishi Roy ft. Jatin Sharma", 
       id:"8",
        music_link:"https://www.dropbox.com/s/svqm2lpbey9vrm4/y2mate.com%20-%20Mann%20Mera%20Cover%20Song%20%20Rishi%20Roy%20%20WhatsApp%20Status%20%20DEVIL%20ABSAR.mp3?raw=1", thumbnail:"https://i.ibb.co/wg5QBsx/artworks-TIzyyd-Fszy-Jc-SM5w-Syw-YFQ-t500x500.jpg"
       
       
   },

 {
       song:"Sad",
       artist:"xxxtentacion", 
       id:"9",
  music_link:"https://www.dropbox.com/s/1wbqcnhof1macoo/y2mate.com%20-%20XXXTENTACION%20%20SAD%20%20WhatsApp%20Status.mp3?raw=1", thumbnail:"https://i.ibb.co/rxfTFPg/xxxtentacion-sad-download.jpg"
       
       
   },
   
 {
       song:"On my Way",
       artist:"Alan Walker", 
       id:"10",
 music_link:"https://www.dropbox.com/s/4e5cnbq45lk9avm/y2mate.com%20-%20On%20my%20way%20%20Best%20ever%20whatsapp%20status%20Alan%20Walker.mp3?raw=1", thumbnail:"https://i.ibb.co/0XHZ83H/artworks-000523641915-lo2qzf-t500x500-1.jpg"
       
       
   },
   
 {
       song:"Despacito",
       artist:"Luis Phonsi feat Daddy Yankee", 
       id:"11",
        music_link:"https://www.dropbox.com/s/dq7wuof5526mau8/y2mate.com%20-%20Despacito%20WhatsApp%20statusSK.mp3?raw=1", thumbnail:"https://i.ibb.co/JpFdJJ7/Despacito-Luis-Fonsi.jpg"
       
       
   },
   
   
 {
       song:"Dil Galti",
       artist:"JalRaj", 
       id:"12",
        music_link:"https://www.dropbox.com/s/e7mu7ikdu37nq3p/y2mate.com%20-%20Feelings%20%20Vatsala%20%20Female%20Version%20%20Sumit%20Goswami.mp3?raw=1", thumbnail:"https://i.ibb.co/2KLR41W/Dil-Galti-Kar-Baitha-Hai-Jal-Raj-mp3-image.jpg"
       
       
   },
   
 {
       song:"General",
       artist:"Zack Knight", 
       id:"13",
        music_link:"https://www.dropbox.com/s/r56jsywul5q3096/y2mate.com%20-%20SAD%20LOVE%20STATUS%20DORAEMON%20STATUSNOBITA%20SIZUKA%20STATUS%20tyroworld%20nobita%20doraemon%20anime%20love.mp3?raw=1", thumbnail:"https://i.ibb.co/4JytrB5/cebeb3c73d3c0620730c6447208bd127-1000x1000x1.jpg"
       
       
   },
   
 {
       song:"Feelings",
       artist:"Vatsala", 
       id:"14",
        music_link:"https://www.dropbox.com/s/e7mu7ikdu37nq3p/y2mate.com%20-%20Feelings%20%20Vatsala%20%20Female%20Version%20%20Sumit%20Goswami.mp3?dl=1", thumbnail:"https://i.ibb.co/0jfyxyZ/maxresdefault-2.jpg"
       
       
   },
   
  {
       song:"Vaaste",
       artist:"Nikhil D", 
       id:"15",
        music_link:"https://www.dropbox.com/s/e7mu7ikdu37nq3p/y2mate.com%20-%20Feelings%20%20Vatsala%20%20Female%20Version%20%20Sumit%20Goswami.mp3?raw=1", thumbnail:"https://i.ibb.co/8zj7RM9/crop-480x480-1554479538-2465302.jpg"
       
       
   },
   
  {
       song:"Emptiness",
       artist:"Gajendra Verma", 
       id:"16",
        music_link:"https://www.dropbox.com/s/4z725opm7j9b1zb/download.mp3?raw=1", thumbnail:"https://i.ibb.co/cr7FnKP/50ae9de83319a3f5b2e3f2886288f66e.jpg"
       
       
   },
   
 
  {
       song:"Bom Diggy Diggy",
       artist:"Zack Knight", 
       id:"17",
        music_link:"https://www.dropbox.com/s/e7mu7ikdu37nq3p/y2mate.com%20-%20Feelings%20%20Vatsala%20%20Female%20Version%20%20Sumit%20Goswami.mp3?dl=1", thumbnail:"https://i.ibb.co/r5HxcgV/zack-knight-lyrics.jpg"
       
       
   },
   
      
  {
       song:"I'll be waiting",
       artist:"Arjun", 
       id:"18",
        music_link:"https://www.dropbox.com/s/2s3ro1nd4z4inla/y2mate.com%20-%20Ill%20be%20waiting%20kabhi%20jo%20badal%20%20arjun%20song%20whatsapp%20status.mp3?raw=1", thumbnail:"https://i.ibb.co/mvM66CK/278975398270-arjun-ill-be-waiting-kabhi-jo-baadal-music-video-ov.jpg"
       
       
   }
   
 
   ]
    

   document.querySelectorAll(".song").forEach((div)=>{
        div.onclick = function (){
            var presentSong = this.getAttribute("data-no");
        createPlayer(presentSong); 
        let previousSong =document.querySelector('#prev_song'); ;
        let nextSong = document.querySelector('#next_song');
   
     
      nextSong.addEventListener("click",()=>{
      if((presentSong+1) <= song_data.length){
      songChange(song_data , ++presentSong)
      
      }
      else{
          alert("!!!!");
      }
      });
       previousSong.addEventListener("click",()=>{
       if((presentSong-1) >= 0){
     songChange(song_data , --presentSong)
     
      }
      else{
          alert("This is the first song");
          }; 
        })
    }
})
function createPlayer(i){
 var card = document.createElement("DIV");
            card.className = 'music__page';
            card.innerHTML = `
           
            <div class="upper__part">
                <div class="music__card">
                    <img src=${song_data[i].thumbnail} class="music_thumbnail">
            
                </div>
                <div class="credentials">
                <h6 class="music_name">
                ${song_data[i].song}
                </h6>
                <p>${song_data[i].artist}</p>
                </div>
             <div class="back_from_music_page"
             onclick="back()">
            <i class="ri-arrow-left-line"></i>
            </div>
            <div class="menu_in_music_page">
            <i class="ri-menu-3-fill"></i>
            </div>
            </div>
            
            <div class="down_part">
           
                <div class="play_and_all">
  <span id="prev_song">
        <i class="ri-skip-back-fill"></i>
                </span>
                <span id="song_play" onclick = "play_song()">
           <i id="play_toggle" class="ri-play-fill"></i>
           </span>
    <span id="next_song" >
           <i class="ri-skip-forward-fill"></i>
           </span>
                </div>
                
                <br />
                <div class="down_part_icons">
             <i class="ri-volume-up-fill"></i>
              <i class="ri-share-fill"></i>
              <i class="ri-heart-3-line"></i>
              <i class="ri-repeat-line"></i>
                </div>
     <audio src=${song_data[i].music_link} class="gaana"></audio>
            </div>
            
            `;
document.querySelector(".xD").classList.toggle("hide");



document.body.appendChild(card);
    }
    }
function songChange(song_data ,i){
    let thumbnail = document.querySelector('.music_thumbnail');
    let artist = document.querySelector('.credentials > p');
    let title =     document.querySelector('.music_name');
    let playbtn = document.querySelector("#play_toggle")
    let song = document.querySelector(".gaana");
    thumbnail.src = song_data[i].thumbnail;
    artist.innerText = song_data[i].artist;
    title.innerText = song_data[i].song;
    song.src = song_data[i].music_link;
    
    if(playbtn.className == "ri-pause-fill"){
        playbtn.className = "ri-play-fill";
    }
}
function back (){
            document.querySelector(".xD").classList.toggle("hide");
if(document.querySelector(".music__page")){
document.body.removeChild(document.querySelector(".music__page"))
}
}



function play_song(){
    document.querySelector("#song_play").setAttribute("onClick", "pause()");

var a = document.querySelector(".gaana") ;

    var playbtn = document.querySelector('#song_play');
  playbtn.innerHTML='<i id="play_toggle" class="ri-play-line"></i>';

var playbtn = document.querySelector('#song_play');
  playbtn.innerHTML=' <i id="play_toggle" class="ri-pause-fill"></i>';
a.play()

}


function pause(){
    document.querySelector("#song_play").setAttribute("onClick", "play_song()");

var a = document.querySelector(".gaana") ;
var playbtn = document.querySelector('#song_play');
  playbtn.innerHTML=' <i class="ri-play-fill"></i>';
  
 a.pause()

}

alert("Manu roy music app")

