// Zoom my photo start
const my_photo_header = document.querySelector('.my-photo-header');
const modal = document.querySelector('.modal');
my_photo_header.addEventListener('click', () =>{
    document.querySelector('.modal').classList.toggle('active');
});
modal.addEventListener('click', () => {
    modal.classList.remove('active');
})
// Zoom my photo end

// Animations start
let animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params){
        for(let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((scrollY > animItemOffset - animItemPoint) && (scrollY < (animItemOffset + animItemHeight))){
                animItem.classList.add('active');
            }
        }
    }
    function offset(element){
        const rect = element.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {top : rect.top + scrollTop, left : rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 500);
}
// Animation end

// Current page start
    let links = document.querySelectorAll('.header-link');
    let pages = document.querySelectorAll('.main-section');

    if(links.length > 0 && links.length == pages.length){
        window.addEventListener('scroll', currentPage);
        function currentPage(params){
            for(let index = 0; index < links.length; index++){
                const currPage = pages[index];
                const currLink = links[index];
                const currPageHeight = currPage.offsetHeight;
                const currPageOffset = offset(currPage).top;
                const startNewPage = 3;

                let currPagePoint = window.innerHeight - currPageHeight / startNewPage;

                if(currPageHeight > window.innerHeight){
                    currPagePoint = window.innerHeight - window.innerHeight / startNewPage;
                }

                if((scrollY > currPageOffset - currPagePoint) && (scrollY < (currPageOffset + currPageHeight))){
                    for(let j = 0; j < links.length; j++){
                        if(links[j].classList.contains('current')){
                            links[j].classList.remove('current');
                            links[j].classList.add('noncurrent');
                        }
                    }
                    currLink.classList.remove('noncurrent');
                    currLink.classList.add('current');
                }
            }
            function offset(element){
                const rect = element.getBoundingClientRect(),
                scrollLeft = window.scrollX || document.documentElement.scrollLeft,
                scrollTop = window.scrollY || document.documentElement.scrollTop;
                return {top : rect.top + scrollTop, left : rect.left + scrollLeft}
            }
        }
    }
// Current page end

// Change theme start

const btn = document.querySelector('.btn-change-theme'),
      link = document.getElementById("theme-link");

const moon = document.getElementById('moon'),
      sun = document.getElementById('sun');
      
      link.setAttribute("href", "styles/main.css");
      
      btn.addEventListener("click", function ChangeTheme(){
        let lightTheme = "styles/light-theme.css";
        let darkTheme = "styles/main.css";
          
          
        let currTheme = link.getAttribute("href");
        let theme = "";
        
        if(currTheme == lightTheme) {
            currTheme = darkTheme;
            theme = "dark";
        
        moon.classList.add('fa-moon');
        sun.classList.remove('fa-sun');
        } else {    
            currTheme = lightTheme;
            theme = "light";

            moon.classList.remove('fa-moon');
            sun.classList.add('fa-sun');
        }

        link.setAttribute("href", currTheme);
    });
// Change theme end

// Hamburger start

const btnHamburger = document.querySelector('.btn-hamburger'),
      header = document.querySelector('.header'),
      firstRow = document.querySelector('.first-row');

btnHamburger.addEventListener('click', function () {
    btnHamburger.classList.toggle('active-btn-hamburger');
    header.classList.toggle('active-header');
    firstRow.classList.toggle('active-first-row');
});

// Hamburger end

// Snow start

// function SnowFalls(ob){
//     this.param={count:75, color:['blue'], minSize: 10, maxSize:30, letter:'*', speed:1};
//     for(a in ob)
//         if(a in this.param)this.param[a]=ob[a];
//     this.param.color=[...this.param.color];
//     this.param.letter=[...this.param.letter];
//     this.width=Math.max(document.body.clientWidth, innerWidth);
//     this.height=Math.max(document.body.clientHeight, innerHeight);
//     this.el=[];
//     for(var i=0;i<this.param.count;i++){
//       this.el[i]=document.createElement('div');
//       this.el[i].innerHTML=this.param.letter[parseInt(Math.random()*this.param.letter.length)];
//       this.el[i].style.position='fixed';
//       this.el[i].style.top='-50px';
//       this.el[i].style.left=0
//       this.el[i].top=0-(Math.random()*this.height);
//       this.el[i].crds=0;
//       this.el[i].left_radius=Math.random()*(15-5)+5;
//       this.el[i].left_sped=0.00001+(Math.random()/55);
//       this.el[i].left_x=parseInt(Math.random()*this.width);
//       this.el[i].left=0;
//       this.el[i].style.color=this.param.color[parseInt(this.param.color.length*Math.random())];
//       this.el[i].style.fontSize=parseInt(Math.random()*(this.param.maxSize-this.param.minSize)+this.param.minSize)+'px';
//       this.el[i].style.opacity=Math.random();
//       this.el[i].style.zIndex=1000;
//       document.body.appendChild(this.el[i]);
//     }
//     this.animation=function(){
//       for(var i=0, l=this.el.length; i<l;i++){
//       this.el[i].crds+=this.el[i].left_sped;
//       this.el[i].left=this.el[i].left_x+this.el[i].left_radius*Math.sin(this.el[i].crds);
//       this.el[i].top+=this.param.speed;
//       if(this.el[i].top>this.height){this.el[i].top=-50;
//       this.el[i].left=parseInt(Math.random()*this.width);
//       }
//       this.el[i].style.top=this.el[i].top+'px';
//       this.el[i].style.left=this.el[i].left+'px';
//       this.el[i].left=Math.random()*this.width;
//       }
//       requestAnimationFrame(this.animation.bind(this));
      
//   }
//     this.animation();
//   }
  
//   new SnowFalls({color:['#9CC7D5']});

// Snow end