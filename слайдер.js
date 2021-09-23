//'use strict';
new Swiper('.image-slider',{
    //cтрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //Навигация
    //Буллеты,текущее положение прогрессбар
    pagination:{
        el:'.swiper-pagination',
        //Буллеты
        //clickable:true,
        //Динамические булеты
        //dynamicBullets:true,
        //Фракция
        type:'progressbar',
    },
    //Скрол
    scrollbar:{
        el:'.swiper-scrollbar',
        // Возможность перетаскивать ползунок скрол
        draggable:true
    },
    //Автовысота
    autoHeight:true,
    //количество слайдов для показа
    slidesPerView:3.5,
    //если слайдов меньше чем нужно
    wathOverflow: true,
    //отступ между слайдами
    spaceBetween:60,
    //количество пролистываемых слайдов
    slidesPerGroup:2,
    //Активный слайд по центру
    centeredSlides:false,
    //Cтартовый слайд
    initialSlide:0,
    //Мультирядность
    //slidesPerColumn:2,
    //Бесконечный слайдер
    loop:false,
    //количество дублируемых слайдов
    looppedslides:0,
    //cвободный режим можно перетаскивать без единых значений , например как ленту
    freeMode:true,
    autoplay:{
        //пауза между прокруткой
        delay:1500,
        //закончить на последнем слайде
    stopOnLastSlide:false,
        //Отключить после ручного переключения
    disableOnInteraction:false
    }

});






  function sasha(){
      console.log(this);
  }
  let faf={
      name:"dsf",
      age:19,
      sayhelloW:sasha.bind(document),
      logInfo:function(job,tel){
          console.group(`${this.name} :info`),
          console.log(` name is ${this.name}`),
          console.log(` moui vozrast ${this.age}`),
          console.log(` moia rabota ${job}`),
          console.log(`moi telephone ${tel}`)

          console.groupEnd()
      }
  };
  const lena={
      name:"elena",
      age:60,
  }

  faf.logInfo.call(lena,'maca','12321');
  faf.logInfo.apply(lena,['sdfs','801234']);
  faf.logInfo.bind(lena,'sdfdsf','dsf')();
  const array=[1,2,3,5,6]
  Array.prototype.multBy=function(n){
return this.map(function(i){
console.log(i*n)
})
  }
  array.multBy(2);

  document.querySelector('.btn').addEventListener('click',f1);

  function f1 (){
      this.style.background="yellow";
  }
const p=document.querySelectorAll('p');
for(let i of p){
    i.onclick=f1;
}


class User{
    constructor(name,pass){
this.name=name;
this.pass=pass;
    }
    validatePass(){
        if(this.pass.lenght>6){
            return true
        }
        else{
            return false
        }
    }
}
let aaa='sdfsdf';
let bbb='1234536';
const user=new User(aaa,bbb);
console.log(user.validatePass())

console.log('------------------');
let ar=[1,2,3,4,5,53,2,2,34,345];
const bobr=new Set(ar);
for(let cf of bobr){
    console.log(cf)
}
console.log(bobr)
console.log('---------------------')
const s1=new Set()
s1.add('h');
s1.add('o');
s1.add('h');
console.log(s1);

