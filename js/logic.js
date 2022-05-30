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

const addToEnd = (target, val) => {
  target.insertAdjacentHTML("beforeend", val);
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
  constructor(creator, site, imgUrl, pageUrl, imgSiteUrl, brightness) {
    this.creator = creator;
    this.site = site;
    this.imgUrl = imgUrl;
    this.pageUrl = pageUrl;
    this.imgSiteUrl = imgSiteUrl;
    this.brightness = brightness;
  }
}

const arrRandomElement = (arr) => {
  index = Math.round((Math.random() * (arr.length - 1)));
  return arr[index]
}

const bgHandler = {
  data: [
    new Background("@vorosbenisop", "Unsplash", "assets/bgs/1.jpg", "https://unsplash.com/@vorosbenisop", "https://unsplash.com/photos/phIFdC6lA4E", "dark"),
    new Background("@mroz", "Unsplash", "assets/bgs/2.jpg", "https://unsplash.com/@mroz", "https://unsplash.com/photos/VH7NuUbj104", "dark"),
    new Background("@filipz", "Unsplash", "assets/bgs/3.jpg", "https://unsplash.com/@filipz", "https://unsplash.com/photos/dqsWG0kjPQRY", "bright"),
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
    bgg.style.backgroundImage = `url(${bg.imgUrl})`;
    //Set font-color based on bg brightness
    let outputClassesObj = dqs("#output").classList;
    if (bg.brightness == "dark" && !outputClassesObj.value.includes("text-light")) {
      outputClassesObj.add('text-light');
    } else if (bg.brightness == "light" && outputClassesObj.value.includes("text-light")) {
      outputClassesObj.remove('text-light');
    };
  }
}



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

const cycleValModes = (e) => {
  console.log(e)
  const el = e.target;
  if (!el.classList.value.includes("hide")) {
    el.classList.add('hide')
  } else {
    el.classList.remove('hide');
  }

  //Original 3-part cycle, do NOT do this 'cause the single select is too powerful lol
  // if (!el.classList.value.includes("val")) {
  //   return;
  // } else {
  //   let currentMode = el.classList.value;
  //   if (currentMode.includes("select")) {
  //     toggle_class(el, "select");
  //     toggle_class(el, "hide");
  //   } else if (currentMode.includes("hide")) {
  //     toggle_class(el, "hide");
  //   } else {
  //     toggle_class(el, "select");
  //   }
  // }
}


addClickEvent('#ui', cycleValModes);

// addClickEventAll('.data div', cycleModes);

const singleOut = {};

const getSingle = (arr) => {
  let len = arr.length - 1;
  return arr[Math.round(Math.random() * len)];
}

singleOut.subCat = (subcat) => {
  let selection = dqsa(`[data-category="${subcat}"] .data div`);
  console.log(selection);
  let selected = getSingle(selection).innerText
  console.log(selected);
  return selected;
}

const cascadeRun = (fx, arr = []) => {
  for (let x in arr) {
    fx(x);
  };
};

class Category {
  constructor(name) {
    this.name = name;
    this.showSubCats = function () {
      console.log(this.subCats)
    };
    this.getRandom = function () {
      const output = [];
      for (let cat of subCats) {
        output.push(getSingle(cat));
      };
      console.log(output);
      return output;
    }
  }
}

let Hair = new Category("Hair");
Hair.subCats = [
  { name: "Color", data: ["Black", "Brown", "Green", "Blue", "Red", "Pink", "Blonde", "Silver", "White", "Pink"] },
  { name: "Length", data: ["Short", "Medium", "Long", "None"] },
  { name: "Straightness", data: ["Straight", "Wavy", "Curly"] }
];

let Pizza = new Category("Pizza");
Pizza.subCats = [
  { name: "Size", data: ["Small", "Medium", "Large", "XL", "XXL", "XXXL", "Personal"] },
  { name: "Crust", data: ["Thin", "Thick", "Cheesy Garlic"] },
  { name: "Sauce", data: ["Red", "White"]},
  { name: "Topping-1", data: ["Pepperoni", "Sausage", "Bacon", "Chicken", "Pineapple", "Artichoke", "Extra Cheese", "Veggie Medley"]},
  { name: "Topping-2", data: ["Pepperoni", "Sausage", "Bacon", "Chicken", "Pineapple", "Artichoke", "Extra Cheese", "Veggie Medley"]},
];


const CatHandler = {};

CatHandler.addMainCat = function (CatObject) {
  const catContainer = dqs("#ui")
  const id = catContainer.children.length;
  const catName = CatObject.name;
  const newMainCat =
    `
  <div class="category ${catName}" data-name=${catName}>
  <div class="horizontal">
    <div class="arrow_container" data-category="${catName}" data-level="all_cat" data-id="${id}">
      <img class="arrow down" src="assets/ui/arrow.png">
    </div>
    <h2 class="top">${catName}</h2>
    <div class="cat-tabs">
    </div>
  </div>
  <hr style="background:white; height: 2px; width: 100%; outline: none; border: none; border-radius: 4px;">
  <div class="container">
    <div class="all_cat">
    </div>
  </div>
</div>
`
  addToEnd(catContainer, newMainCat);
}

CatHandler.addSubCat = function (mainCat, subCat) {
  const cat = dqs(`.${mainCat.name} .all_cat`);

  //Get current number of existing sub cats in DOM, add 1
  let id = cat.children.length + 1;

  //Append main cat element to DOM
  cat.insertAdjacentHTML("beforeend",
    `<div class="horizontal sub_cat" data-category="${mainCat.name}" data-subcat="${subCat.name}"  data-level="sub_cat" data-id=${id}>
      <div class="label title">
        <h4>${subCat.name}</h4>
        <div class="pop-up">
        </div>
      </div>
      <div class="data">
      </div>
    </div>`)
}

CatHandler.addSubCatVal = function (subCatObject, val) {
  const dataContainer = dqs(`[data-subcat=${subCatObject.name}] .data`);
  const newVal = `<div class="val">${val}</div>`;
  addToEnd(dataContainer, newVal);
}

CatHandler.populateSubCat = function (subCatObject, valArr) {
  for (let val of valArr) {
    this.addSubCatVal(subCatObject, val);
  };
}

CatHandler.getActiveMainCats = () => {
  let activeMainCats = dqsa('.category:not(.inactive)');
  return [...activeMainCats];
}


CatHandler.getSubCatVals = function (mainCat, subCat) {
  //Select values of specified subCat within mainCat, 
  const getValidVals = dqsa(`.${mainCat.name} [data-subCat=${subCat.name}] .data div:not(.hide)`);
  const validVals = [...getValidVals];
  return validVals;
}

CatHandler.selectSubCatVal = (mainCat, subCat) => {
  const vals = CatHandler.getSubCatVals(maincAt, subCat);
  console.log(vals);
  return getSingle([...vals]);
}

const getSubCatVals = function (mainCat, subCat) {
  //Select values of specified subCat within mainCat, 
  const getValidVals = dqsa(`.${mainCat.name} [data-subCat=${subCat.name}] .data div:not(.hide)`);
  const validVals = [...getValidVals];
  return validVals;
}

const selectSubCatVal = (mainCat, subCat) => {
  let vals = getSubCatVals(mainCat, subCat);
  let selected = getSingle(vals);
  console.log(selected);
  return selected;
}

dqs('#ui').addEventListener('click', (e) => {
  if (!e.target.classList.value.includes('arrow_container')) {
    return
  } else {
    const el = e.target;
    const data = el.dataset;
    toggleUpDown(e.target.children[0]);
    dropdownHandler(el);
  }
});

// dqs('.arrow_container').addEventListener('click', (e) => {
//   const el = e.target;
//   const data = el.dataset;
//   toggleUpDown(e.target.children[0]);
//   dropdownHandler(el);
// });



// CatHandler.addMainCat(Hair);
// CatHandler.addSubCat(Hair, Hair.subCats[0])
// CatHandler.populateSubCat(Hair.subCats[0], Hair.subCats[0].data)
// CatHandler.addSubCat(Hair, Hair.subCats[1])
// CatHandler.populateSubCat(Hair.subCats[1], Hair.subCats[1].data)

CatHandler.addMainCat(Pizza);
CatHandler.addSubCat(Pizza, Pizza.subCats[0]);
CatHandler.addSubCat(Pizza, Pizza.subCats[1]);
CatHandler.addSubCat(Pizza, Pizza.subCats[2]);
CatHandler.addSubCat(Pizza, Pizza.subCats[3]);
CatHandler.addSubCat(Pizza, Pizza.subCats[4]);
CatHandler.populateSubCat(Pizza.subCats[0], Pizza.subCats[0].data);
CatHandler.populateSubCat(Pizza.subCats[1], Pizza.subCats[1].data);
CatHandler.populateSubCat(Pizza.subCats[2], Pizza.subCats[2].data);
CatHandler.populateSubCat(Pizza.subCats[3], Pizza.subCats[3].data);
CatHandler.populateSubCat(Pizza.subCats[4], Pizza.subCats[4].data);

// dqsa('div')forEach().addEventListener('click', (e) => {
//   console.log(e);
// })

document.addEventListener('onclick', (e) => {
  console.log(e);
})

const renderSelectedValue = (Maincat, Subcat, val) => {
  const output = `
  <div class="value-output" data-maincat="${Maincat.name}" data-subcat="${Subcat.name}">
  <span>
    ${Maincat.name} ${Subcat.name}:
  </span>
  <span>
    ${val}
  </span>
</div>
  `
  addToEnd(dqs("#inner-output"), output)
}

//Template to
//Get main cat names
const main_categories = CatHandler.getActiveMainCats();
//Get subcats in DOM
const sub_categories = main_categories.forEach((e) => {
  const mainCatName = e.dataset.name;
  const DOMsubCatsData = dqsa(`.${mainCatName} .data`);
  return DOMsubCatsData;
  // const getValidVals = dqsa(`.${e.dataset.name} [data-subCat] .data div:not(.hide)`);
  // const validVals = [...getValidVals];
  // return validVals;

//Get subcat names based on main cat
})


