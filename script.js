$("button").click(function() {
   let givenColor = $(".Color").val();
   let givenAge = $(".Age").val();
    
    //dog
    if (givenColor === "Blue" && givenAge >= 18) {
        $(".who").text("You are a dog!");
        $(".who1").prepend('<img src= "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*" alt="photo of dog outside"/>'); 
    
    //cat
    }else if (givenColor === "Pink" && givenAge >=18)  {
        $(".who").text("You are a cat!");
        $(".who1").prepend('<img src= "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg" alt="The Shots Your Cat Needs "/>' ); 
        
    //frog
    }else  if (givenColor === "Blue" && givenAge <=17) {
        $(".who").text("You are a frog!");
        $(".who1").prepend('<img src= "https://www.gannett-cdn.com/presto/2021/04/02/PTCN/857bdc21-18bd-4a09-b635-724ca063e527-TCN_STUART_TREE_FROG_FOLO_01.JPG?crop=4927,2771,x1,y377&amp;width=3200&amp;height=1800&amp;format=pjpg&amp;auto=webp" alt="Cadbury commercial 2021: Betty the tree frog, of Stuart, makes headlines "/>' );  
        
    //bear 
    }else if (givenColor === "Pink" && givenAge <= 17) {
        $(".who").text("You are  a bear!");
        $(".who1").prepend('<img src= "https://storage.googleapis.com/afs-prod/media/3fd6e06e678740c784f3f011a32b5489/1545.jpeg" alt="Bear has close call on utility poles in Arizona border city "/>' );   
    }
});
