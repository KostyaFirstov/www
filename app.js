window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 1000);
}

const findFullPage = document.querySelector('#fullpage');
const findScrollable = document.querySelector('.project__scrollable');

if(findFullPage){
$(document).ready(function () {
	$('#fullpage').fullpage({
		scrollingSpeed: 1000,
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		menu: '#nav-r',
	});
});
}
if(findScrollable){
	$(document).ready(function () {
		$('#fullpage2').fullpage({
			scrollingSpeed: 1000,
			anchors:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			scrollOverflow: true,
			menu: '#nav-r',
		});
	});
	}

const scrollImations = (entries, observer) => {
	entries.forEach((entry) => {
  
	  if(entry.isIntersecting) {
		entry.target.classList.add('active');
	  } else {

	  }
	});
  }
  
  const options = {
	threshold: 0
  };
  const observer = new IntersectionObserver(scrollImations);
  
  const boxes = document.querySelectorAll('.anim');
  boxes.forEach((box) => {
	observer.observe(box);
  });


const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__container');

menuBtn.addEventListener('click', function(){
	if(menu.classList.contains('active')){
		setTimeout(function(){menu.classList.remove('active')}, 600);
		menu.classList.remove('visible');
		menuBtn.classList.remove('active');
		header.classList.remove('usage');
	} else {
		setTimeout(function(){menu.classList.add('visible')}, 1);
		menu.classList.add('active');
		menuBtn.classList.add('active');
		header.classList.add('usage');
	}
});


const wrapper = document.querySelectorAll('.panel__wrapper');
const image = document.querySelectorAll('.wrapper__image');

const getPercentOfX = (event) => {
    const position = event.clientX;
    const width = event.currentTarget.offsetWidth;
    
    return position / width * 100;
};

const updateImageClipPosition = (percent) => {
    image.forEach(function(img){
		img.style.setProperty('--clip-position', `${percent.toFixed(2)}%`);
	});
};

wrapper.forEach(function(item){
	item.addEventListener('mousemove', (event) => updateImageClipPosition(getPercentOfX(event)));
});


const section = document.querySelectorAll('.section');
const changeColor = document.querySelector('.service__block');


if(changeColor){
	
	window.addEventListener('hashchange', (e)=>{
		section.forEach(function(item){ 

		let hash = window.location.hash

		if(hash == '#secondPage' || hash == '#thirdPage' || hash == '#fourthPage' || hash == "#undefined"){
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
})
});
	window.addEventListener('DOMContentLoaded', (e)=>{
		section.forEach(function(item){ 

		let hash = window.location.hash

		if(hash == '#secondPage' || hash == '#thirdPage' || hash == '#fourthPage'){
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	})
	});
}


const changeColorProject = document.querySelector('.project__block');


if(changeColorProject){

	const allSections = document.querySelectorAll('.section');

	let lastEl = allSections.length;

	window.addEventListener('hashchange', (e)=>{
		section.forEach(function(item){ 

		let hash = window.location.hash;

		if(hash != `#${lastEl}`){
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
		})
	});

	window.addEventListener('DOMContentLoaded', (e)=>{
		section.forEach(function(item){ 

		let hash = window.location.hash

		if(hash != `#${lastEl}`){
			header.classList.add('active');
		} else {
			header.classList.remove('active');
		}
	})
	});
}



function chooseGoods(){


	const filterBtn = document.querySelectorAll('.project__filter');
	const filterTable = document.querySelectorAll('.section');
		
	function findTable(items, category){
		items.forEach(function(card){
		const isItemFiltered = card.classList.contains(category);
		if(!isItemFiltered){
			card.classList.add('none');
			card.classList.add('hide');
		}
		else{
			card.classList.remove('none');
			setTimeout(function(){card.classList.remove('hide')}, 0);
		}
	  });
	};
		
	filterBtn.forEach(function(button){
		button.addEventListener('click', function(){

		button.classList.add('active')
		const btnData = button.dataset.filter;
		findTable(filterTable, btnData);
		});
	});
	};
	
chooseGoods();



const isContainsSwiper = document.querySelector('.swiper-container');

if(isContainsSwiper){

new Swiper('.project-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    simulateTouch: true,
    speed: 800,
	slidesPerView: 2,
	spaceBetween: 40,
	breakpoints: {
		0: {
		  slidesPerView: 1.2,
		  spaceBetween: 10,
		},
		600: {
		  slidesPerView: 2,
		  spaceBetween: 10,
		},
		800: {
			spaceBetween: 40,
		}
	},
});

new Swiper('.management-slider', {
    navigation: {
      nextEl: '.management-button-next',
      prevEl: '.management-button-prev'
    },
    loop: true,
    simulateTouch: true,
    speed: 800,
    centeredSlides: true,
	slidesPerView: 2.45,
	spaceBetween: 0,
	effect: 'coverflow',
	breakpoints: {
		0: {
		  slidesPerView: 1,
		  spaceBetween: 10,
		},
		600: {
		  slidesPerView: 2,
		  spaceBetween: 10,
		},
		800: {
			slidesPerView: 3,
			spaceBetween: 10,
		}
	},
});

new Swiper('.vacancy-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true,
    simulateTouch: true,
    speed: 800,
    centeredSlides: true,
	slidesPerView: 3,
	spaceBetween: 40,
	breakpoints: {
		0: {
		  slidesPerView: 1,
		  spaceBetween: 10,
		},
		400: {
		  slidesPerView:1.25,
		},
		600: {
		  slidesPerView: 1.8,
		  spaceBetween: 10,
		},
		800: {
			slidesPerView: 3,
			spaceBetween: 40,
		}
	},
});

new Swiper('.projects-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    simulateTouch: true,
    speed: 1400,
    centeredSlides: true,
	slidesPerView: 1,
	mousewheel: true,
	direction: "vertical",
});
}

let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
	labelVal = label.querySelector('.input__file-button-text').innerText;

  input.addEventListener('change', function (e) {
	let countFiles = '';
	if (this.files && this.files.length >= 1)
	  countFiles = this.files.length;

	if (countFiles)
	  label.querySelector('.input__file-button-text').innerText = 'Файл успешно загружен';
	else
	  label.querySelector('.input__file-button-text').innerText = 'Загрузите резюме';
  });
});
	

const openModalBtn = document.querySelector('.modal-btn');
const openVacancyBtn = document.querySelector('.modal-btn-vacancy');
const modal = document.querySelector('.modal__window');
const modalV = document.querySelector('.modal__window-vacancy');
const closeModalBtn = document.querySelector('.close-btn');
const closeVacancyBtn = document.querySelector('.vacancy-btn');
const successModal = document.querySelector('.succes__alert');
const successBtn = document.querySelector('.succes__btn');


openModalBtn.addEventListener('click', function(){
	modal.classList.add('active');
})

successBtn.addEventListener('click', function(){
	successModal.classList.remove('active');
})

closeModalBtn.addEventListener('click', function(){
	modal.classList.remove('active');
})

if(openVacancyBtn){

openVacancyBtn.addEventListener('click', function(){
	modalV.classList.add('active');
})
closeVacancyBtn.addEventListener('click', function(){
	modalV.classList.remove('active');
})
}

const vacancyPage = document.querySelectorAll('.vacancy');

if(vacancyPage){
	const openModalBtn = document.querySelectorAll('.modal-btn');

	openModalBtn.forEach(function(btn){
	btn.addEventListener('click', function(){
		modal.classList.add('active');
	})
  })	
}


function chooseGoods(){

	const filterBtn = document.querySelectorAll('.project__filter');
	const filterTable = document.querySelectorAll('.projects__wrapper');
		
	function findTable(items, category){
		items.forEach(function(card){
		const isItemFiltered = card.classList.contains(category);
		if(!isItemFiltered){
			card.classList.add('none');
			card.classList.add('hide');
		}
		else{
			card.classList.remove('none');
			setTimeout(function(){card.classList.remove('hide')}, 0);
		}
		})
	}
		
	filterBtn.forEach(function(button){
		button.addEventListener('click', function(){
		isActive()
		button.classList.add('active')
		const btnData = button.dataset.filter;
		findTable(filterTable, btnData);
		})
	})
		
		
	function isActive(){
		filterBtn.forEach(function(button){
		const haveActive = button.classList.contains('active');
		if(haveActive){
			button.classList.remove('active');
		}
		})
		} 
	}
		
chooseGoods();

const modalContainer = document.querySelector('.modal__container');
const vacancyContainer = document.querySelector('.vacancy-container');
const succesContainer = document.querySelector('.succes__container');

modal.addEventListener('click', function(event){
	if(!event.composedPath().includes(modalContainer)){
		modal.classList.remove('active');
	}
})

if(vacancyContainer){

modalV.addEventListener('click', function(event){
	if(!event.composedPath().includes(vacancyContainer)){
		modalV.classList.remove('active');
	}
})
}

successModal.addEventListener('click', function(event){
	if(!event.composedPath().includes(succesContainer)){
		successModal.classList.remove('active');
	}
})


// jQuery(document).ready(function () {
     
// 	$(".phone").mask("+7 (999) 999-99-99"); 
   
  
//    jQuery('.send-form').click( function() {
// 	   var form = jQuery(this).closest('form');
// 		   jQuery.ajax({
// 			   url: 'sender.php',
// 			   type: 'post',
// 			   dataType: 'html',
// 			   data: form.serialize(),
// 			   success: function(data) {
// 					$('.modal__window').removeClass('active'); 
// 					$('.succes__alert').addClass('active');
// 			   },
// 			   error:	 function() {
// 					form.find('.status').html('серверная ошибка');
// 			   }
// 		   });
//    });
// });



jQuery(document).ready(function () {
     
	$(".phone").mask("+7 (999) 999-99-99"); 
   
  
   jQuery('.send-form').click( function() {
	   var form = jQuery(this).closest('form');
	   


		   jQuery.ajax({
			   url: 'sender.php',
			   type: 'post',
			   dataType: 'html',
			   data: form.serialize(),
			   success: function(data) {
					$('.modal__window').removeClass('active'); 
					$('.succes__alert').addClass('active');
			   },
			   error:	 function() {
					form.find('.status').html('серверная ошибка');
			   }
		   });
   });
});