// jQuery.ajax( url [, settings ] )
$(document).ready(function() {                                
  let stoic;      
  function getNewQuote() {
    $.ajax({
      url: "https://s3.amazonaws.com/fccquotemachine/test.json",
      dataType: "json",
      success: function(data) {
      // console.log(data);                                        
      const stoics = [];                    
      data.forEach(function(item) { 
      // console.log(item);  
        let {saying: quote, author} = item; 
                  
        stoics.push(`"${quote}" -${author}`);
        // console.log(stoics);
      }); // ends data.forEach();
      
      stoic = stoics[Math.floor(Math.random() * stoics.length)];
      // console.log(stoic); 
      
      // The Math.floor() function returns the largest integer less than or equal to a given number.
      // The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1); that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range. 
       
      document.querySelector('.quote-box').innerHTML = stoic;
      // $(".quote-box").html(stoic); 
      // appends random quote to div
           
      } // => end success:
  }); // => end ajax  
} // => end getNewQuote()
getNewQuote();
document.getElementById('new-quote').addEventListener('click', function(e){ 
  console.log(e);
  getNewQuote();
});
  
// $("#new-quote").on("click", function() { 
//   getNewQuote();
// });
function tweetQuote() {
  // function should grab quote shown, open twitter, tweet
  // window.open("https://twitter.com/intent/tweet?text=" + stoic + " &hashtags=perspective")
  // to shorten longer tweets 
  if(stoic.length > 240) {
    stoic = stoic.substr(0, 220).match(/(.+)\s/)[0]; // matches all ends following space
    window.open(`https://twitter.com/intent/tweet?text= ${stoic}... &hashtags=stoic, perspective`);
  }
  else {
    window.open(`https://twitter.com/intent/tweet?text= ${stoic} &hashtags=stoic, perspective`);
  }  
}
document.getElementById('tweet-quote').addEventListener('click', function(e) {
  tweetQuote();  
});
// $("#tweet-quote").on("click", function() {
//   tweetQuote(); 
//  });
}); // => document.ready() 