// create Scroll 

let scrolling;
document.onscroll = () => {
  header.style.display = "block"
  clearTimeout(scrolling)
  scrolling = setTimeout(() => {
    header.style.display = "none";
  }, 3000);

  window.scrollY > 800
    ? (toTop.style.display = "block")
    : (toTop.style.display = "none");
};

// Create Button Scroll
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){
        //add event
    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");

    }   // Remove Event
    else{
          active.classList.remove("your-active-class");
          activeLink.classList.remove("active-link");
    }
	});
}
// creating sections

let count = 0;
const sections = () => {
  count++ ;
  const counter = `<section id="section${count}" data-nav="Section ${count}">
    <div class="container">
    <h2>Section ${count}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", counter);
};
//==================================================================
const navBar = document.getElementById("list-menu");
const createSection = () => {
  navBar.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="links">${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};

//======================================================
// Add Event of Click
navBar.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.dataset.nav) {
      document
        .getElementById(`${event.target.dataset.nav}`)
        .scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        location.hash = `${event.target.dataset.nav}`;
      }, 150);
    }
  });
  
// create sections by click on the button
for (let x = 1; x < 5; x++) 
sections();
createSection ();

document.getElementById("btn").addEventListener("click", () => {
  sections ();
  createSection ();
});
const toTop = document.getElementById("to-top");
const header = document.querySelector(".header");

toTop.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
});






