
$(document).ready(function(){

    function startTime()
    {
        console.log('startTime run ');
        var tm=new Date();
        var h=tm.getHours();
        var m=tm.getMinutes();
        var s=tm.getSeconds();
        m=checkTime(m);
        s=checkTime(s);
        document.getElementById('gameTame_out').innerHTML=h+":"+m+":"+s;
        t=setTimeout('startTime()',500);
    }
    function checkTime(i)
    {
        if (i<10)
        {
            i="0" + i;
        }
        return i;
    }
    startTime();
});
