document.querySelector("#menu").addEventListener("click",()=>{
    document.querySelector("#popup").style.display="flex";
})
document.querySelector("#cut").addEventListener("click",()=>{
    document.querySelector("#popup").style.display="none";
})



gsap.to("#cover",{
    scrollTrigger:{
        trigger: "#main",
        start: "top top",
        end:"bottom 200%",
        // markers: true,
        scrub:true
    },
    height:"100%",
    // opacity:0
})
function loader1(){
    var a = 0;
    setInterval(function(){
        if(a<30)
        {
            document.querySelector("#module").innerHTML=a;
            a++;
        }
        else
        {
            a =30;
            document.querySelector("#module").innerHTML=a;
        }
    },30)
}
function loader2(){
    var a = 0;
    setInterval(function(){
        if(a<60)
        {
            document.querySelector("#classtime").innerHTML=a;
            a++;
        }
        else
        {
            a =60;
            document.querySelector("#classtime").innerHTML=a;
        }
    },30)
}
function loader3(){
    var a = 0;
    setInterval(function(){
        if(a<1)
        {
            document.querySelector("#goal").innerHTML=a;
            a++;
        }
        else
        {
            a =1;
            document.querySelector("#goal").innerHTML=a;
        }
    },50)
}


gsap.to("#loader",{
    display:"none",
    duration:4,
    onComplete: function(){
        document.querySelector("#main").style.display="block";
        // gsap.from("#nav",{
        //     y:-100,
        //     duration:1
        // })

        gsap.to("#module",{
            scrollTrigger:{
                trigger: "#module",
                start: "top 80%",
                // markers: true,
            },
            onComplete: function(){
                loader1();
            }
        })

        gsap.to("#classtime",{
            scrollTrigger:{
                trigger: "#classtime",
                start: "top 80%",
                // markers: true,
            },
            onComplete: function(){
                loader2();
            }
        })

        gsap.to("#goal",{
            scrollTrigger:{
                trigger: "#goal",
                start: "top 80%",
                // markers: true,
            },
            onComplete: function(){
                loader3();
            }
        })
    }
})
