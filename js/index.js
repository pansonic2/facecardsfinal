$(document).ready(function(){
  
$("#roll").on("click", showstuff)
  function showstuff(){    
function randomPicFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
    allPics = ['https://media.gettyimages.com/photos/male-hairstylist-drying-hair-of-customer-in-hair-salon-picture-id923653766', 'https://media.gettyimages.com/photos/arrows-picture-id679379743', 'https://media.gettyimages.com/photos/full-frame-shot-of-audio-cassettes-picture-id562801405', 'https://media.gettyimages.com/photos/young-handsome-man-working-on-laptop-while-commuting-to-work-picture-id489632702', 'https://media.gettyimages.com/photos/pastry-chef-working-late-in-restaurant-kitchen-picture-id607047377', 'https://media.gettyimages.com/photos/business-meeting-in-modern-office-later-at-night-picture-id607477393', 'https://media.gettyimages.com/photos/offices-picture-id114169549', 'https://media.gettyimages.com/photos/vegan-lunch-in-epsom-picture-id955420006', 'https://media.gettyimages.com/photos/friendly-retail-worker-picture-id915623156', 'https://media.gettyimages.com/photos/child-with-broken-leg-picture-id938292048', 'https://media.gettyimages.com/photos/young-man-listening-to-music-and-using-his-smartphone-in-a-capsule-picture-id936399766', 'https://media.gettyimages.com/photos/silhouette-of-commuter-riding-bike-during-misty-early-morning-picture-id948013004', 'https://media.gettyimages.com/photos/beach-runners-picture-id953876236', 'https://media.gettyimages.com/photos/woman-playing-the-piano-picture-id953291264', 'https://media.gettyimages.com/photos/rockabilly-musicians-performing-on-stage-at-music-concert-picture-id956750294', 'https://media.gettyimages.com/photos/execution-of-school-lessons-late-in-the-evening-by-the-light-of-a-picture-id911732524', 'https://media.gettyimages.com/photos/people-working-in-modern-office-picture-id878980238', 'https://media.gettyimages.com/photos/closeup-of-hand-holding-hamburger-picture-id724245729', 'https://media.gettyimages.com/photos/sisters-eating-chips-picture-id136992466', 'https://media.gettyimages.com/photos/chicken-wings-picture-id869105782', 'https://media.gettyimages.com/photos/red-square-in-moscow-russia-picture-id857702164', 'https://media.gettyimages.com/photos/out-of-the-blue-picture-id840890706', 'https://media.gettyimages.com/photos/child-eating-a-slice-of-pizza-picture-id865306546' ];
    
  resultingPic = randomPicFrom(allPics);
 
    console.log(resultingPic);
   $('#gettypic').html('<img src="' + resultingPic + '">');
 console.log(resultingTile);
  }});