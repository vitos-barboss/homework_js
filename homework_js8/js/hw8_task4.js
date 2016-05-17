function Article() {
    this.created = new Date();
    Article.count++;
    Article.lastDate = this.created;

}
Article.count = 0;

Article.showStats = function() {
    console.log( "Number of counts " +  this.count + " / The last Date is " + this.lastDate );
    alert( "Number of counts " +  this.count + " / The last Date is " + this.lastDate );

};

new Article();
new Article();

Article.showStats();

new Article();
new Article();
new Article();

Article.showStats();