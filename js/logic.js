const masterArray = []

hair = {
  color: ["brown", "black", "blonde", "white"],
  style: ["up", "down"],
  length: ["short", "medium", "long"]
};

body = {
  height: ["short", "average", "tall"],
  musculature: ["thin", "average", "totally shredded"],
  features: ["feminine", "masculine", "mixed"]
};

personality = {
  likes: ["nature", "animals", "reading", "hiking", "sports", "collecting", "video games", "cooking"],
  dislikes: this.likes,
  vibe: ["moody", "mute", "high strung", "plain toast", "chill"]
}

const dqs = (selector) => {
  return document.querySelector(selector);
}

const dqsa = (selector) => {
  return document.querySelectorAll(selector);
}

const toggle_class = (el, inputClass) => {
  if (el.classList.value.includes(inputClass)) {
    el.classList.remove(inputClass);
  } else if (!el.classList.value.includes(inputClass)) {
    el.classList.add(inputClass);
  };
}

const toggleUpDown = (el) => {
  if (!el.classList.value.includes('down')) {
    el.classList.add('down')
    return 'down'
  } else if (el.classList.value.includes('down')) {
    el.classList.remove('down');
    return 'up';
  } else {
    window.alert('toggleUpDown')
  }
}

const dropdownHandler = (arrowEl, direction) => {
  const el = arrowEl;
  const data = el.dataset;
  const target = `.${data.category} .${data.level}`
  toggle_class(dqs(target), 'hidden');
}



class Background {
  constructor(creator, site, imgUrl, pageUrl, imgSiteUrl) {
    this.creator = creator;
    this.site = site;
    this.imgUrl = imgUrl;
    this.pageUrl = pageUrl;
    this.imgSiteUrl = imgSiteUrl;
  }
}

const arrRandomElement = (arr) => {
  index = Math.round((Math.random() * (arr.length - 1)));
  return arr[index]
}

const bgHandler = {
  data: [
    new Background("@vorosbenisop", "Unsplash", "assets/bgs/1.jpg", "https://unsplash.com/@vorosbenisop", "https://unsplash.com/photos/phIFdC6lA4E"),
    new Background("@mroz", "Unsplash", "assets/bgs/2.jpg", "https://unsplash.com/@mroz", "https://unsplash.com/photos/VH7NuUbj104"),
    new Background("@filipz", "Unsplash", "assets/bgs/3.jpg", "https://unsplash.com/@filipz", "https://unsplash.com/photos/dqsWG0kjPQRY"),
  ],
  getRandomBG: function () {
    const bg = arrRandomElement(this.data);
    return bg;
  },
  setBG: function () {
    bg = this.getRandomBG();
    dqs('.bg_url').href = bg.imgSiteUrl;
    dqs('.bg_creator').innerText = bg.creator;
    dqs('.bg_creator').href = bg.pageUrl;
    dqs('.bg_site').innerText = bg.site;
    let bgg = dqs('.bg');
    bgg.style.backgroundImage = `url(${bg.imgUrl})`
  }
}

dqs('.arrow_container').addEventListener('click', (e) => {
  const el = e.target;
  const data = el.dataset;
  toggleUpDown(e.target.children[0]);
  dropdownHandler(el);
})

// dqs('.all_cat_data').addEventListener('click', (e) => {
//   clickyClass(e.target, 'hidden');
// })

const clickyClass = (el, testingClass) => {
  if (el.classList.value.includes(testingClass)) {
    el.classList.remove(testingClass);
  } else if (!el.classList.value.includes(testingClass)) {
    el.classList.add(testingClass);
  };
}

const poorThing = dqs('.label.title .pop-up');

const cascadeRender = (target, elementArray, classList, seconds) => {
  if (seconds > 3) { throw "Error! Too many seconds!" };
  const elArray = [...elementArray];
  const interval = setInterval(function () {
    if (elArray.length < 1) { clearInterval(interval); return; }
    target.insertAdjacentHTML("beforeend", `${elArray.shift()}`);
  }, seconds * 1000);
}

let testArr = ['<span class="bubble-in bubble">😎</span>', '<span class="bubble-in bubble">🔒</span>', '<span class="bubble-in bubble">📰</span>']

bgHandler.setBG();

// cascadeRender(poorThing, testArr, 1, 0.1)


const addClickEvent = (selector, fx, fxargs = null, e) => {
  if (fxargs === null) {
    // If no arguments passed, only pass e to function
    dqs(selector).addEventListener('click', (e) => {
      fx(e);
    })
  } else {
    dqs(selector).addEventListener('click', (e) => {
      fx(fxargs, e);
    })
  }
}

const addClickEventAll = (selector, fx) => {
  dqsa(selector).forEach((e) => {
    e.addEventListener('click', (e) => {
      fx(e);
    })
  })
}

//Onclick of subcategory, bring up popup menu

// dqs('.horizontal.sub_cat').addEventListener('click', (e)=> {

// })

const printTarget = (e) => {
  console.log(e.target);

};

// addClickEventAll('.horizontal.sub_cat', cascadeRender,);

const addAB = (a, b) => {
  console.log(a + b.target.children[0])
}

const addBubble = (e) => {
  console.log(e.target);
  cascadeRender(e.target.children[1], testArr, 1, 0.1);
}

// addClickEvent('.label.title', addAB, [2,2])
// addClickEvent('.label.title', console.log, undefined)
addClickEventAll('.label.title', addBubble);

const cycleModes = (e) => {
  let el = e.target;
  let currentMode = el.classList.value;
  if (currentMode.includes("select")) {
    toggle_class(el, "select");
    toggle_class(el, "hide");
  } else if (currentMode.includes("hide")) {
    toggle_class(el, "hide");
  } else {
    toggle_class(el, "select");
  }
}

addClickEventAll('.data div', cycleModes);