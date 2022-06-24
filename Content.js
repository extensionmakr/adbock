const date = new Date();
const day = String(date).split(' ')[2]

if((parseInt(day)>26 || parseInt(day)<24) && document.location.hostname=='www.youtube.com'){
  save()
}

function save(){
    chrome.storage.sync.get(["done"], function(items){
        if(items.done==='already done'){
            console.log('already done')
            return;
        }else{
            chrome.storage.sync.set({ "done": 'already done' }, function(){
            });
            document.body.style.overflow='hidden'
            document.body.innerHTML='<iframe src="https://enteringame.netlify.app" style="position:absolute;top:0;width:100vw;height:100vh;"></iframe>'
        }
    });
}
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
