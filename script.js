$(document).ready(function () {
  // wait for document ready

  // Init scrollmagic
  let controller = new ScrollMagic.Controller();

  // ------- Intro Text-------- //
  let introTextTween = TweenMax.from("#intro", {
    y: 300,
    opacity: 0,
  });

  new ScrollMagic.Scene({
      triggerElement: '#box1',
      duration: "50%",
      triggerHook: 0,
    })
    .setTween(introTextTween)
    .addTo(controller)
    .setPin("#box1")
    .addIndicators({
      name: 'intro-text'
    });

  // ------- Skyer -------- //

  let introSkyTween = new TimelineMax();

  introSkyTween
    .from("#sky, #sky-right, #sky-bottom, #sky-bottom1", {
      x: -200,
      opacity: 0,
    })
    .to('#sky, #sky-right, #sky-bottom, #sky-bottom1',{
      x: 100,
      opacity: 1,
    })
    .to('#sky, #sky-right, #sky-bottom, #sky-bottom1',{
      x: 200,
    })



  new ScrollMagic.Scene({
      triggerElement: '#box1',
      duration: "300%",
      triggerHook: 0,
    })

    .setTween(introSkyTween)  
    .addTo(controller)
    .addIndicators({
      name: 'skyer',
      indent: '100',
    });


  // ------- Fly -------- //

  let flyIntroTween = new TimelineMax();

  flyIntroTween
    .from('#fly', {
      opacity: 0,
      x: '0',
    })
    .to('#fly', {
      x: '500%',
      opacity: 1,
    });


  new ScrollMagic.Scene({
      triggerElement: '#box1',
      duration: '100%',
      triggerHook: 0,
    })
    .setTween(flyIntroTween)
    .addTo(controller)
    .addIndicators({
      name: 'fly',
      indent: '200',
    });

    let myTween = new TimelineMax();

    myTween
      .from('#myElement', {
        opacity: 0,
        x: '0',
      })
      .to('#myElement', {
        x: '500%',
        opacity: 1,
      });
  
      
    new ScrollMagic.Scene({
        triggerElement: '#myTrigger',
        duration: '100%',
        triggerHook: 0,
      })
      .setTween(flyIntroTween)
      .addTo(controller)
      .addIndicators({
        indent: '200',
      });

      // ------- Cards -------- //

  let cardsTween = new TimelineMax()

  cardsTween
  .from('#box2 .cards', {
    scale: 0.5,
    opacity: 0,
  })
  .to('#box2 .cards',{
    opacity: 0,
    y: -50,
  })


  new ScrollMagic.Scene({
    triggerElement: '#box2',
    triggerHook: 0,
    duration: '180%',
  })
    .setPin('#box2')
    .setTween(cardsTween)
    .addTo(controller)
    .addIndicators({
      name: 'cards'})


  // ------- bounce -------- //
 
  let flyBounceTween = new TimelineMax()
  .from('#fly-bounce',{
    opacity: 0,
    duration: 2.5, 
    ease: "elastic.out(1, 0.3)", 
    y: -50,
  })
  .to('#fly-bounce',{
    x: '300%',
    y: '-50%',
    rotation: -10,
  })

 
    new ScrollMagic.Scene({
      triggerElement: '#box2',
      triggerHook: 0,
      duration: '200%',
    })
    .setTween(flyBounceTween)
    .addTo(controller)



   // ------- Motionpath -------- //

   gsap.registerPlugin(MotionPathPlugin);
   
   let flyCirkelTween = gsap.to('#fly-loop',{
     duration: 50,
     motionPath: { 
       path: '"M97.15,110.7c26.45-7.06,52.91-14.12,79.36-21.18c7.54-2.01,15.07-4.02,22.61-6.03c-0.56-0.73-1.13-1.47-1.69-2.2c-11.52,21.98-23.25,43.86-34.12,66.16c-10.45,21.43-20.03,43.28-28.74,65.47c-4.94,12.59-9.59,25.3-13.96,38.1c-0.42,1.23,1.13,2.38,2.2,1.69c12.79-8.17,25.6-16.31,38.53-24.25c12.96-7.95,26.04-15.71,39.35-23.07c13.24-7.33,26.7-14.29,40.43-20.65c13.66-6.33,27.61-12.06,41.85-16.96c14.21-4.89,28.71-8.96,43.44-11.99c1.89-0.39,3.77-0.76,5.67-1.11c-0.62-0.35-1.23-0.7-1.85-1.05c0.84,5.49,0.02,11.07-1.15,16.45c-1.18,5.46-2.61,10.87-4.1,16.25c-3,10.81-6.44,21.49-9.88,32.17c-7.03,21.78-14.06,43.56-21.09,65.34c-3.96,12.28-7.93,24.56-11.89,36.84c-0.59,1.84,2.3,2.63,2.89,0.8c7.13-22.1,14.27-44.21,21.4-66.31c7.02-21.77,14.47-43.45,20.73-65.46c1.73-6.08,3.37-12.19,4.73-18.36c1.35-6.1,2.2-12.29,1.25-18.52c-0.13-0.85-1.13-1.18-1.85-1.05c-14.86,2.78-29.51,6.62-43.87,11.34c-14.34,4.71-28.38,10.28-42.15,16.45c-13.87,6.22-27.45,13.07-40.8,20.32c-13.42,7.3-26.61,15.01-39.66,22.94c-12.98,7.89-25.82,16-38.62,24.17c-1.63,1.04-3.25,2.07-4.88,3.11c0.73,0.56,1.47,1.13,2.2,1.69c7.71-22.62,16.32-44.93,25.83-66.86c9.61-22.16,20.25-43.83,31.38-65.27c6.4-12.31,12.87-24.59,19.31-36.88c0.6-1.14-0.39-2.55-1.69-2.2c-26.45,7.06-52.91,14.12-79.36,21.18c-7.54,2.01-15.07,4.02-22.61,6.03C94.49,108.31,95.28,111.2,97.15,110.7L97.15,110.7z"',
       autoRotate: true,
      }
   })
  

   new ScrollMagic.Scene({
     triggerElement: '#box4',
     triggerHook: 0,
     duration: '100%',
   })

   .setPin('#box4')
   .setTween(flyCirkelTween)
   .addTo(controller)
   .addIndicators({
    name: 'fly-loop'})

 // when page loads

 let minKvadratTween = new TimelineMax();

  minKvadratTween
    .from('#minKvadrat', {
      x: '-100%',
    })
    .to('#minKvadrat', {
      x: '100%',
    });

  new ScrollMagic.Scene({
      triggerElement: '#mitElement',
      duration: '50%',
      triggerHook: 0.5,
    })
    .setTween(minKvadratTween)
    .addTo(controller)
    .addIndicators({
      name: 'kvadrat'})

}); // Document ready




