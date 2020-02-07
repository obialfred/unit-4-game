$(document).ready(function(){
    var cScore = Math.ceil(Math.random() * 99);
    $('.score').text(cScore);
    var userTotalScore = 0;
    var wins = 0;
    var losses = 0;
    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);
    
    
    var ruby = 0;
    var diamond = 0;
    var topaz = 0;
    var emerald = 0;
    
    
    function gemPick (){
        var values = [2, 5, 10, 1, 7]
        gemScore = values[Math.floor(Math.random() * values.length)];
        ruby = gemScore;
        gemScore = values[Math.floor(Math.random() * values.length)];
        diamond = gemScore;
        gemScore = values[Math.floor(Math.random() * values.length)];
        topaz= gemScore;
        gemScore = values[Math.floor(Math.random() * values.length)];
        emerald = gemScore;
    }
    
    
    gemPick();
    
    function scoreTrack(){ 
        if (userTotalScore == cScore){
        $('.score').text('MATCH!').css({'color': 'green', 'font-size': '35px'});
        setInterval(function(){$('.score').text(cScore).css({'color': 'black', 'font-size': '300%'});}, 3000);
        wins++;
        $('#wins').text("Wins: " + wins);
        cScore = Math.ceil(Math.random() * 99);
        userTotalScore = 0;
        $('.bottomScore').text(userTotalScore);
        $('#rubyScore').text('?');
        $('#diamondScore').text('?');
        $('#topazScore').text('?');
        $('#emeraldScore').text('?');
        gemPick();
    } 
    
    else if (userTotalScore > cScore){
        // alert('eh, you lost chief');
        $('.score').text('NOO! You lost!').css({'color': 'red', 'font-size': '35px'});
        setInterval(function(){$('.score').text(cScore).css({'color': 'black', 'font-size': '300%'});}, 3000);
        losses++;
        $('#losses').text("Losses: " + losses);
        cScore = Math.ceil(Math.random() * 99);
        userTotalScore = 0;
        $('.bottomScore').text(userTotalScore);
        $('#rubyScore').text('?');
        $('#diamondScore').text('?');
        $('#topazScore').text('?');
        $('#emeraldScore').text('?');
        gemPick();
    }
    }   
    
    $('#ruby').on('click', function ()
    {
        console.log("you clicked a ruby!"); 
        console.log(ruby);
        $('#rubyScore').text(ruby);
        userTotalScore = userTotalScore + ruby;
        $('.bottomScore').text(userTotalScore);
        scoreTrack();
    });
    
    $('#diamond').on('click', function ()
    {
        console.log("you clicked a diamond!");
        console.log(diamond);
        $('#diamondScore').text(diamond);
        userTotalScore = userTotalScore + diamond;
        $('.bottomScore').text(userTotalScore);
        scoreTrack();
    
    });
    
    $('#topaz').on('click', function ()
    {
        console.log("you clicked a topaz!");
        console.log(topaz);
        $('#topazScore').text(topaz);
        userTotalScore = userTotalScore + topaz;
        $('.bottomScore').text(userTotalScore);
        scoreTrack();
    });
    
    $('#emerald').on('click', function ()
    {
        console.log("you clicked an emerald!");
        console.log(emerald);
        $('#emeraldScore').text(emerald);
        userTotalScore = userTotalScore + emerald;
        $('.bottomScore').text(userTotalScore);
        scoreTrack();
    });
    
    
     
});
