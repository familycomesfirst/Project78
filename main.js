var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://media-exp2.licdn.com/dms/image/C4E03AQFHZsN4UlcWAQ/profile-displayphoto-shrink_200_200/0/1539094365689?e=2147483647&v=beta&t=mWAom8brA4tsrp83TtjzV2Ms35SbziwFfrq4T6IHd7k", "https://media-exp1.licdn.com/dms/image/C4E03AQHLPV2CrvutWg/profile-displayphoto-shrink_200_200/0/1611618472999?e=2147483647&v=beta&t=Nex-H6jy9Wgdztah5Kp0Ia8MOi1GamEH9oMqqm0ZFJc"];
var names = ["Family Book", "Kevin Judd", "Nissa Judd"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
