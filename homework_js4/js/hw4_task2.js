function checkSpam(text) {
   var text1 = text.toLowerCase().indexOf("sex");
   var text2 = text.toLowerCase().indexOf("spam");

    if (text1 >= 0 || text2 >= 0 ) {
     return true;
     } else {
     return false;
     }
}

    console.log(checkSpam('get new Sex videos'));
    console.log(checkSpam('[SPAM] How to earn fast money?'));
    console.log(checkSpam('New PSD template'));
