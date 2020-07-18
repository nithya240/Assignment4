(function(){
var array=["Manu","Jay","Sai","Satya","Bhargav","Jen","Json"];
for(var i=0;i<array.length;i++)
{
	var firstletter=array[i].charAt(0).toLowerCase();
    var tempName = array[i];
	if(firstletter==="j")
	{
		byespeaker.saybye(tempName);
	}
	else
	{
		hellospeaker.sayhello(tempName);
	}
}
})();