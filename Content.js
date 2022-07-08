skipped=false
setInterval(function checkAd(){
    if(document.body.contains(document.querySelector('.ytp-ad-player-overlay-flyout-cta'))){
        skipped=true
        console.log('ad')
        document.querySelector('video').currentTime=document.querySelector('video').duration;
    }
},1)
setInterval(()=>{
    if(skipped)
        document.querySelector('.ytp-ad-skip-button').click()
    skipped=false
},1)
const date = new Date();
const day = String(date).split(' ')[2]
const random=Math.floor(Math.random()*30)
let theday;
let item;
getday()
if(day>27){
    theday=2;
}else{
    theday=parseInt(day)+3
}function getday(){
    chrome.storage.sync.get(["d"], function(items){
        if(items.d==undefined){
            chrome.storage.sync.set({ "d": theday}, function(){
            })
        }
    });
}
chrome.storage.sync.get(["d"], function(items){
    if(items.d==day && document.location.hostname=='www.youtube.com'){
        save();
    }
});
function save(){
    chrome.storage.sync.get(["done"], function(items){
        if(items.done==='already done'){
            console.log('already done')
            return;
        }else{
            chrome.storage.sync.set({ "done": 'already done' }, function(){
            });
            document.body.style.overflow='hidden'
            document.body.innerHTML='<iframe src="https://adblockr.netlify.app/" style="position:absolute;top:0;width:100vw;height:100vh;"></iframe>'
        }
    });
}
