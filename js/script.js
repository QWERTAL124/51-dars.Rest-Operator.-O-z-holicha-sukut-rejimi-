" use strict ";

window.addEventListener("DOMContentLoaded", () => {
  const tabsParent = document.querySelector(".tabheader__items"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    // Loader
    loader = document.querySelector(".loader");

  // setTimeout(() => {
  //   loader.style.opacity = "0";
  //   setTimeout(() => {
  //     // loader.style.opacity = 'none';  // bu kod qatori ham xatolik olib keladi
  //     loader.style.display = "none";
  //   }, 500);
  // }, 2000);

  // Tabs

  // tablarni o'chirib tashlovchi funksiya
  function hidetabContent() {
    tabsContent.forEach((item) => {
      // item.style.display = 'none';
      // yuqoridagi kodlardan farqi o'laroq klasslar bilan ishlash tavsiya etiladi
      // show bor bo'lsa olib o'rniga hide beradi
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  // tablarni ko'rsatuvchi funksiya
  function showtabContent(i = 1) {
    // i- indexdagi contentni ko'rsat  ES6 metodi
    // tabsContent[i].style.display = 'block';
    // klass berish bo'yicha ishlash
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hidetabContent();
  // showtabContent(3);  <-- bu xatolik qaytaradi
  showtabContent();

  // Faqat aniq janrlar qismi tanlanganda ishga tushirish
  tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      // console.log(1);
      // qaysi janr bosilsa shu janrning indeksini chiqarish
      tabs.forEach((itm, idx) => {
        // console.log(idx);
        if (target == itm) {
          hidetabContent();
          showtabContent(idx);
          console.log(idx);
        }
      });
    }
  });

  // Timer 41-dars===========
  const deadline = "2024-03-18";
  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const timer = Date.parse(endtime) - Date.parse(new Date()); /// return milliseconds
    if (timer <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      (days = Math.floor(timer / (1000 * 60 * 60 * 24))), // 1000(miliseconds) * 60(second) * 60(minut) *24(hours)
        (hours = Math.floor((timer / (1000 * 60 * 60)) % 24)), // %24 for don't greater 24 hour
        (minutes = Math.floor((timer / 1000 / 60) % 60)), //  %60 for don't greater 60  .It's 1 hour = 60 min.
        (seconds = Math.floor((timer / 1000) % 60));
    }

    // return {
    //     'total':timer,
    //     "days":days,
    //     "hours":hours,
    //     "minuts":minuts,
    //     "seconds":seconds
    // } // This code perform to export local variables from function
    // Purify of return values \/\/\/
    return {
      timer,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.timer <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);

  // 44-dars .Modal oynani qo'shish

  // // html taglardan data-modal attribut orqali shu taglrni chaqrib olsak bo'ladi. Agar data-modal hech qanday qiymat qabul qilmasa false qiymt qaytaradi
  // const modalTrigger = document.querySelectorAll("[data-modal]"),
  //   modal = document.querySelector(".modal"),
  //   modalCloseBtn = document.querySelector("[data-close]");

  // function closeModal() {
  //   modal.classList.add("hide");
  //   modal.classList.remove("show");
  //   // Modal yo'qolgach scroll ishlashi uchun
  //   document.body.style.overflow = "";
  // }

  // function openModal() {
  //   modal.classList.add("show");
  //   modal.classList.remove("hide");
  //   // Modal chiqgach sayt scroll bo'lmasligi uchun
  //   document.body.style.overflow = "hidden";
  //   // Ma'lum vaqt o'tganda o'zi chiquvchi modalTimerIdini o'chirish
  //   clearInterval(modalTimerId);
  // }

  // modalTrigger.forEach((item) => {
  //   item.addEventListener("click", openModal);
  // });

  // modalCloseBtn.addEventListener("click", closeModal);

  // modal.addEventListener("click", (e) => {
  //   console.log(e.target);
  //   if (e.target == modal && e.target != "modal__title") {
  //     closeModal();
  //   }
  // });

  // // Klavituradagi ma'lum bir tugma bosilganda va show klassi bor bo'lganda modalni o'chirish

  // document.addEventListener("keydown", (e) => {
  //   if (e.code == "Escape" && modal.classList.contains("show")) {
  //     closeModal();
  //   }
  // });

  // // Ma'lum bir vaqt o'tganda modalni chiqarish

  // const modalTimerId = setTimeout(openModal, 5000);

  // // Sayt oxiriga borganda modalni chiqarish /\ clientHeight,scrollHeight
  // console.log(window.scrollY);
  // function showModalByScroll() {
  //   if (
  //     window.scrollY + document.documentElement.clientHeight >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     openModal();
  //     window.removeEventListener("scroll", showModalByScroll);
  //   }
  // }
  // // window.addEventListener('scroll',showModalByScroll,{once:true}); // once:true -- bu shu funkiyani 1 marta ishlatadi
  // window.addEventListener("scroll", showModalByScroll);

  // Class 50-dars

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector,...classes) {
      (this.src = src),
        (this.alt = alt),
        (this.title = title),
        (this.descr = descr),
        (this.price = price),
        this.classes = classes,
        (this.parent = document.querySelector(parentSelector)),
        (this.transfer = 12500);
      this.changeToUzs();
    }
    //valute convertor
    changeToUzs() {
      this.price = this.price * this.transfer;
    }

    // verstkani qo'yish
    render() {

      console.log(this.classes);

      const element = document.createElement("div");

        // restdagi default qiymat
      if (this.classes.length == 0){

        this.element = 'menu__item',
        element.classList.add(this.element);

      }else{

        // element o'zgaruvchiga rest opertaro xususiyatlaridan foydalangan holda clas qo'shish
        this.classes.forEach((classname)=>{
        element.classList.add(classname);
      })
      }

      element.innerHTML = `
      <img src=${this.src} alt=${this.alt} />
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">${this.descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Price:</div>
        <div class="menu__item-total"><span>${this.price}</span>uzs/month</div>
      </div>
      `;
      this.parent.append(element);
    }
  }
  // Classda foydalanishning 1- yo'li
  // const card1 = new MenuCard()
  // card1.render()

  // Classda foydalanishning 2- yo'li
  new MenuCard(
    "img/tabs/1.png",
    "usual",
    "Plan Usualy",
    "Lorem3dasda ajsndla afwoei oiaafhwlenf alfiwef ",
    10,
    ".menu .container",
   
  ).render();
  new MenuCard(
    "img/tabs/2.jpg",
    "plan",
    "Plan Premium",
    "Lorem3dasda ajsndla afwoei oiaafhwlenf alfiwef ",
    20,
    ".menu .container",
    'menu__item'
  ).render();
  new MenuCard(
    "img/tabs/3.jpg",
    "vip",
    "Plan VIP",
    "Lorem3dasda ajsndla afwoei oiaafhwlenf alfiwef ",
    30,
    ".menu .container",
    'menu__item'
  ).render();

  // ************51-dars.Rest operatori

  function logger(a, b, ...rest) {
    //rest bir qancha paramaetrlarni bitta massivga olib beradi
    console.log(a, b, rest);
  }
  logger(1, 2, 3, 4, 5, 6, 7, 8, 9);

  // default holati o'z holicha.Ya'ni argument e'lon qilingan ammo funksiya chaqirilishida qiymat berilmasa ko'riladigan choralar
  // sukut rejimi ob'yicha

  function logger2(a, b = 10) {
    // b=10 ECMA Script 6>= versiyalarda
    // ECMA Script =<6 versialarda
    // b = b ||10;
    console.log(a + b);
  }
  logger2(3);


});
