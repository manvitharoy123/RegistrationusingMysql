<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
     <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" />
        <script src="script.js"></script>
    <title>Music Player</title>
</head>
<body>
    <div id="loader">
        <div id="loding_text">
             <h1>Loading...</h1>
        </div>
     </div>
    <div class="xD">
    <div class="music__player__page__one" id="page_1">
    <div class="featured__song__div">
    <img src ="https://i.pinimg.com/originals/53/bc/d5/53bcd5adfc79dcf77c90d73d36890319.jpg" id="featured_img">
    </div>
    

   

    
    <div class="recently__played__song__div">
      <div class="recently__played__song__head">
        <h4>Recently Played <i class="ri-play-circle-line"></i></h4>  
      </div>
    <div class="recently__played__slider">
        <div class="recently__played__container_slider_1">
        
            <div class="recently_played_item song" data-no="0">
             <img src="https://a10.gaanacdn.com/gn_img/song/Bp1bAynb02/1bA4AoE4W0/size_xxl_1569643099.webp" class="image">
             <p class="text">Ala vikuntapuramlo</p>
            </div>
            
            <div class="recently_played_item song" data-no="1" >
             <img src="https://i.ibb.co/XsTRjWs/maxresdefault.jpg" class="image">   
            </div> 
            
            <div class="recently_played_item song" data-no="2">
                <img src="https://i.ibb.co/N2qV8y8/DJSnake-Let-Me-Love-You-1.jpg" class="image">   
            </div>
            

        </div>
    </div>

            
        </div>
        
        
        
        
         <div class="you_may_like__song__div">
      <div class="you_may_like__song__head">
        <h4>You May Like <i class="ri-user-heart-fill"></i> </h4>  
      </div>
    <div class="you_may_like__slider">
        <div class="you_may_like_slider_1">
        
             <div class="you_may_like_item song" data-no="3">
                <p class="text">Friends</p>
            </div>
            
            <div class="you_may_like_item song" 
         data-no="4"  >
               <img src="https://i.ibb.co/0jfyxyZ/maxresdefault-2.jpg" class="image">  
            </div>
            
            <div class="you_may_like_item song"
          data-no="5" >
               <img src="https://i.ibb.co/VSskSVb/5ed0be09c7c8d.jpg" class="image">   
            </div>
            
        </div>
    </div>

            
        </div>

<div class="genre__div">
      <div class="genre__head">
        <h4>Genre <i class="ri-user-heart-fill"></i> </h4>  
      </div>
    <div class="genre__slider">
        <div class="genre_slider_1">
        
            <div class="genre_item">
                <p class="text">K-Pop</p>
            </div>
            
            <div class="genre_item">
             <p class="text">English</p>   
            </div>
            
            
            <div class="genre_item">
                <p class="text">Hindi</p>   
            </div>
            
            

        </div>
    </div>

            
        </div>
        
        
        <div class="artists_first__div">
      <div class="artists_first__head">
        <h4>Artists <i class="ri-user-heart-fill"></i> </h4>  
      </div>
    <div class="artist_first__slider">
        <div class="artist_first_slider_1">
        
            <div class="artist_first_item">
                <img src="https://i.ibb.co/7Vvk050/e01886ab548dbeeb755747066cc95fef.jpg" class="image_artist">   
            </div>
            
            <div class="artist_first_item">
                   <img src="https://i.ibb.co/vxtbgbF/10-102537-marshmello-dj-wallpaper-group-pictures-marshmello-logo-wallpaper.png" class="image_artist">        
                
            </div>
            
            <div class="artist_first_item">
               <img src="https://i.ibb.co/F7M5ys5/BLACKPINK-Official-Logo-HD.jpg" class="image_artist">     
            </div>
            

        </div>
    </div>

            
        </div>
        </div>
        
        
        
        
        <div class="trending__page">
        <div class="trending_heading">
            <h2 id="trend_head">Trending Now <i class="ri-funds-line"></i></h2>
        </div>
            <div class="left__side">
             <div class="left_trending_item song" id="left_trending_item_one" data-no="6">
                
            </div>
            <div class="left_trending_item song" id="left_trending_item_two" data-no="7">
                
               
                
                
            </div>
            <div class="left_trending_item song" id="left_trending_item_three" data-no="8">
                  
                 
            </div>
            
             <div class="left_trending_item song" id="left_trending_item_one" data-no="9" >
                 
                 
            </div>
            <div class="left_trending_item song" id="left_trending_item_two" data-no="10">
                  
                 
            </div>
            <div class="left_trending_item song" id="left_trending_item_three" data-no="11">
                 
            </div>
            
            
            </div>
             <div class="right__side">
             <div class="right_trending_item song" id="right_trending_item_one" data-no="12">
                 
            </div>
            <div class="right_trending_item song" id="right_trending_item_three" data-no="13" >
                   
            </div>
            <div class="right_trending_item song" id="right_trending_item_two" data-no="14" >
            </div>
            
            <div class="right_trending_item song" id="right_trending_item_one" data-no="15">
                
            </div>
            <div class="right_trending_item song" id="right_trending_item_two" data-no="16">
                   
            </div>
            <div class="right_trending_item song" id="right_trending_item_three" data-no="17">
                    
            </div>
            </div>        
            
        </div>
        
        <div class="profile__page">
    
    <div class="profile__page__head pg">
        <h2 id="profile_head">My Profile <i class="ri-profile-line"></i></h2>  
    </div>
     <div class="profile__info pg pc">
    <div class="profile__image">
             <img src="https://api.sololearn.com/Uploads/Avatars/19034561.jpg" class="profile__pic"/>
    </div>
    <div class="profile__card pc">
        <h3>Name : Atul</h3>
        <h3>Works At : AIMU</h3>
         <h3>Songs listened : 420</h3>
         
    </div>
    <div class="socials__profile">
    <span onclick="open_git()" id="open_git">
    <i class="ri-github-fill"></i>
    </span>
    <i class="ri-codepen-line"></i>
    <i class="ri-dribbble-line"></i>
    <i class="ri-spotify-fill"></i>
    
     </div>
     <br />
     </div>
     </div>
       
        
        
      <div class="favourite__page">
    
    <div class="favourite__page__head">
        <h2>Your Favourites <i class="ri-heart-add-line"></i></h2>  
      </div>
      
      <div class="tabs__fav">
        <span onclick="tabs('playlist')">
            <h3>Playlists</h3>
        </span>
        <span onclick="tabs('artist')">
              <h3>Artists</h3>
        </span>
        <span onclick="tabs('album')">
            <h3>Albums</h3>
        </span>
        </div>
        <div class="tabs__fav_content">
        <div id="playlist" class="tabsc">
            <div class="playlists_fav">
                <div class="fav_playlist">
                   <p class="text">playlist</p>
                </div>
                <div class="fav_playlist">
                  <p class="text">Playlist</p>
                </div>
            </div>
        </div>
        <div id="artist" class="tabsc" style="display:none">
            <div class="artist_fav">
                <div class="fav_artist">
                     <p class="text">Artist</p>
                </div>
                <div class="fav_artist">
                     <p class="text">Artist</p>
                </div>
            </div>
        </div>
          <div id="album" class="tabsc" style="display:none">
            <div class="album_fav">
                <div class="fav_album">
                <p class="text">Album</p>
                </div>
                <div class="fav_album">
                     <p class="text">Album</p>
                </div>
            </div>
        </div>
        </div>
        </div>  
        
        
        
        
        <div class="bottom_navigation_bar">
        <nav>
            <ul>
        <li>
        <div onclick="home()">
       <i class="ri-home-2-fill"></i>
           </div> 
        </li>
        <li>
        <div onclick="trending()">
        <i class="ri-fire-fill"></i>
        </li>
        <li>
        <div onclick="favourite()">
        <i class="ri-heart-3-fill"></i>
        </div>
        </li>
        <li>
        <div onclick="profile()">
            <i class="ri-user-fill"></i>
        </div>
        </li>
    </ul>
        </nav>
    
         
        </div>
        </div>
        </div>
    
        

        
           
        <a href="Logout.jsp">Logout</a>
</body>
</html>
