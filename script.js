function findSpam(txt) {
  let spamWords = ['dolor', 'amet'];
  let totalSpam = 0;
  if (!txt) return `no string...`;
  spamWords.forEach(word => {
    var re = new RegExp(word, "g");
    console.log(re);
    totalSpam += txt.toLowerCase().match(re).length;
  })
  return totalSpam;
};

$("button").click(function() {
  let spamWords = ['dolor', 'amet'];
  var source = $("p").text();
  var newSource = source;
  for(let i = 0; i < spamWords.length; i++){
    if(source.toLowerCase().includes(spamWords[i])){
     newSource = newSource.replace(spamWords[i], '<span style="color:red;text-decoration:underline;">' + spamWords[i] + '</span>');
     result = 'This article has spam.';
   };
  };
  $("#text").html(newSource);
  alert(`Total spam: ${findSpam(source)}`);
});
