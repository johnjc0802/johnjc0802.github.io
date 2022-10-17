var instSeqNbr = 1;
var ingrSeqNbr = 20;
var ingrCount = 0;
var txtLength = 0;
/******** For testing localStorage *********************
/*const recipeStorage = [
    {'name':'juice','img':'https://www.gs1india.org/media/Juice_pack.jpg','description':'Orange and Apple juice fresh and delicious'},
    {'name':'Tayto','img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg','description':'Cheese & Onion Chips'}
];

localStorage.setItem("recipeStorage", JSON.stringify(cookBook.recipes));
*/
showNavbarHeader();
showFooter();
//initInput();
//initTextarea();

function initInput(){
  for (i=1; i < document.getElementsByTagName("input").length; i++){
  document.getElementsByTagName("input")[i].style.background = "transparent";
  }
}

function initTextarea(){
  for (i=0; i < document.getElementsByTagName("textarea").length; i++){
  document.getElementsByTagName("textarea")[i].style.background = "transparent";
  }
}

class RecipeController {
     constructor(currentId=0) {
         this.recipes = []; 
         this.currentId = currentId;
     };

     addRecipe(title, description, imgURL, createdAt){ 
         const recipe = {   //recipe is an object
             id: this.currentId++,
             title: title,
             description: description,
             imgURL: imgURL,
             createdAt: createdAt
         };

         this.recipes.push(recipe); 
     };

     /******** For testing localStorage *********************
     loadRecipesFromLocalStorage() {
        const storageItems = localStorage.getItem("recipes")
        if (storageItems) {
            const recipes = JSON.parse(storageItems)
            //TODO load the items into the local items structure (this.items)           
        }
    }*******************************************************/
};

cookBook = new RecipeController();
cookBook.addRecipe("Napolitan Tomato Sauce","My wife's Family Recipe for Napolitan Style Tomato Sauce!","./images/NapolitanSauce.jpg","09/23/2022");
cookBook.addRecipe("Roman Tomato Sauce","My wife's Family Recipe for Roman Style Tomato Sauce!","./images/RomanSauce.jpg","09/23/2022");
cookBook.addRecipe("Turino Tomato Sauce","My wife's Family Recipe for Turino Style Tomato Sauce!","./images/san-marzano-tomato-sauce-2.jpg","09/23/2022");
cookBook.addRecipe("Borscht","Everyone knows what it is and many people around the world have fallen in love with this iconic beet soup.","./images/Borscht.jpg","09/23/2022");
cookBook.addRecipe("Grilled Cheese","Old Fashioned Grilled Cheese Sandwich - like mom made","./images/grilled-cheese-sandwich.jpg","09/24/2022");
cookBook.addRecipe("Chunky Blue Cheese Burger - Perfect For Football","A hamburger for the millenium - juicy ground beef and chunks of bleu cheese!","./images/Chunky Blue Cheese Burger.jpg","09/23/2022");
cookBook.addRecipe("Beef Stroganoff","Golden seared juicy beef strips smothered in a sour cream mushroom gravy","./images/Classic Beef Stroganoff.jpg","09/23/2022");
cookBook.addRecipe("Ultimate Oven Barbecued Ribs","These easy oven baked ribs with brown sugar are fall-off-the bone delicious.","./images/Grilled-BBQ-Ribs-8.jpg","09/23/2022");
//console.log(cookBook.addRecipe[2]);

for (i=0; i < cookBook.recipes.length; i++){
    addRecipeCard(cookBook.recipes[i]);
};


function addRecipeCard(recipe) {
    const cardHTML = '<div class="card border border-dark m-1" style="width: 19rem;">\n' +
      '    <div class="card-body">\n' +
        '    <p>Cuisine(coming soon)</p><img class="card-img-top" src="' + recipe.imgURL + '" width="400" height="250"  alt="Recipe Image">\n' +
        '        <h5 class="card-title">' + recipe.title + '</h5>\n' +
        '        <p class="card-text">' + recipe.description + '</p>\n' + 
        '        <div class="btn-group-sm">\n' +
        '          <a href="recipe.html" class="btn btn-primary btn-sm m-1">View</a>\n' +
        '        </div>\n' +
        '  </div>\n' +
        '</div>\n' +
        '<br/>';
 
    const cardsContainer = document.getElementById("list-items");
    cardsContainer.innerHTML += cardHTML;
};

function showNavbarHeader () {
    document.getElementById("navbar-header").innerHTML = 
    '  <!--navbar component-->' +
    '  <nav class="navbar navbar-expand-lg navbar-light bg-light">' +  
    '    <a class="navbar-brand" href="https://olenarub.github.io/tastebuds/">' +  
    '      <img src="images/tastebuds.jpg" alt="Tastebuds Logo" height="70"/>' +  
    '    </a>' +  
    '    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +  
    '      <span class="navbar-toggler-icon"></span>' +
    '    </button>' +  
    '  <div class="collapse navbar-collapse" id="navbarSupportedContent">' +  
    '    <ul class="navbar-nav">' +  
    '      <li class="nav-item active" id="home">' +  
    '        <a class="nav-link" href="./index.html">Home</a>' +  
    '      </li>' +  
    '      <li class="nav-item">' +  
    '        <a class="nav-link" href="about.html">About Us</a>' +  
    '      </li>' +  
    '      <li class="nav-item">' +  
    '        <a class="nav-link" href="list.html">Search Recipes</a>' +  
    '      </li>' +  
    '      <li class="nav-item">' +  
    '        <a class="nav-link" href="form.html">Add A Recipe</a>' +  
    '      </li>' +  
    '    </ul>' +  
    '  </div>' +  
    
    '  </nav>'
    '  <!-- end navbar -->';
};

function showFooter () {
  document.getElementById("page-footer").innerHTML = 
    '  <!-- Footer -->' + 
    '  <footer class="footer">' + 
    '    <div class="container">' + 
    '      <div class="row">' + 
    '        <div class="footer-col">' + 
    '          <h4>company</h4>' + 
    '          <ul>' + 
    '            <li><a href="about.html">about us</a></li>' + 
    '            <li><a href="#">our services</a></li>' + 
    '            <li><a href="#">privaciy policy</a></li>' + 
    '          </ul>' + 
    '        </div>' + 
    '        <div class="footer-col">' + 
    '          <h4>Get Help</h4>' + 
    '          <ul>' + 
    '            <li><a href="#">FAQ</a></li>' + 
    '          </ul>' + 
    '        </div>' + 
    '        <div class="footer-col">' + 
    '          <h4>online order</h4>' + 
    '          <ul>' + 
    '            <li><a href="#">payment option</a></li>' + 
    '            <li><a href="#">order status</a></li>' + 
    '          </ul>' + 
    '        </div>' + 
    '        <div class="footer-col">' + 
    '          <h4>Follow Us</h4>' + 
    '          <ul>' + 
    '          <!--<div class="social-links">-->' + 
    '            <li><a href="#"><i class="fab fa-facebook-f">Facebook</i></a></li>' + 
    '            <li><a href="#"><i class="fab fa-twitter"></i>Twitter</a></li>' + 
    '            <li><a href="#"><i class="fab fa-instagram"></i>Instagram</a></li>' + 
    '            <li><a href="#"><i class="fab fa-linkedin-in"></i>LinkedIn</a></li>' + 
    '          <!--</div>-->' + 
    '          </ul>' + 
    '        </div>' + 
    '      </div>' + 
    '    </div>' + 
    '  </footer>' +
    '<!-- End Footer -->';   

};

function addInstruction() {
  //alert("start");
  instList = document.getElementById("instructList");
  instSeqNbr  = instSeqNbr + 1;
  /*for (i=0; i < 5; i++){
    instSeqNbr = instSeqNbr + 1;
    nextInstHTML = '<li><textarea rows=1 type="text" placeholder="instruction ' + (instSeqNbr) + 
     '" class="form-control" id="instruction_' + (instSeqNbr) + '"  onchange="nextInst(this)"></textarea></li>';
    instList.innerHTML = instList.innerHTML + nextInstHTML;
  }*/
  //document.getElementById("instruction_" + instSeqNbr).type = "text";
  document.getElementById("instruction_" + instSeqNbr).hidden = false;
  document.getElementById("instruction_" + instSeqNbr ).focus();
  document.getElementById("instruction_" + instSeqNbr ).value = instSeqNbr + ". ";
};

function addIngredient () {
  ingrSeqNbr = ingrSeqNbr + 1;
  ingrList2 = document.getElementById("ingredList2");
  ingrList2.innerHTML = ingrList2.innerHTML + 
      '<li><input type="text" placeholder="ingedient_' + ingrSeqNbr + '" class="form-control" id="ingredient_' + ingrSeqNbr + '"></li>';
};

function hideBG(elemId){
  //alert(document.getElementById(elemId).id);
  document.getElementById(elemId).style.background = "transparent";
}

function showBG(elemId){
  document.getElementById(elemId).style.background = "";
}

function showImage () {
  imgElement = document.getElementById("recipe-image");
  if (document.getElementById("recipeImageUrl").value === "") {
    imgElement.innerHTML = '<img class="recipe-image" src="images/DefaultImage.jpg" alt="" />'
  }
  else {
    imgElement.innerHTML = 
      '<img class="card-img-top" src="' + document.getElementById("recipeImageUrl").value + '" width="400" height="250"  alt="Recipe Image">';
  } 
};

function nextIngr(ingrElem){
    ingrElem.style.background = "transparent";
    //ingrElem.style.border = "none";

    //alert(transElem.id);
    //transElem.disabled = true;
    //ingr.placeholder = "Enter Ingredient " + (ingrCount + 1) + " (Maximum 20)";
    //ingr.value = "";
    //ingr.focus() = true;
}

function nextInst(instElem){
  instElem.style.background = "transparent";
  //instElem.style.border = "none";

  //addInstructions();
}

function chkAddRow(inElem, event){
  txtLength++;
  var eKey = event.key;
  //alert(eKey + " " + txtLength);
  if (eKey == "Enter" || txtLength > 95) {
    inElem.rows = inElem.rows + 1;
    txtLength = 0;
  }
}
function redBg(elem){
  //alert("color");
  elem.style.background = "red";
}
function saveForm(){
  const inputElements = document.getElementsByTagName("input");
  document.getElementById("recipeTitle").style.textDecoration = "underline";
  document.getElementById("recipeTitle").style.fontWeight = "600";
  //alert(inputElements.length);
  for (i=0; i < inputElements.length; i++){
    inputElements[i].style.background = "transparent";
    inputElements[i].style.border = "none";
    if (inputElements[i].value == ""){
      inputElements[i].placeholder = "";
    }
  }
  const textareaElements = document.getElementsByTagName("textarea");
  for (i=0; i < textareaElements.length; i++){
    textareaElements[i].style.background = "transparent";
    textareaElements[i].style.border = "none";
    if (textareaElements[i].value == ""){
      textareaElements[i].placeholder = "";
    }
  }
}

/*function swapTxt(){
  ingrCount = ingrCount + 1;
  ingr = document.getElementById("ingredient");
  //alert("count " + ingrCount + " " + ingr.value) ;

  if (ingrCount < 20) {
    elemId2 = "ingredient_"  + ingrCount.toString();
    ingrElem = document.getElementById(elemId2);
    ingrElem.value = ingr.value;
    nextIngr(ingrElem);
  }
  else if (ingrCount >= 20){
    //alert("count " + ingrCount + " " + ingr.value) ;
    ingr20 = document.getElementById("ingredient_20");
    ingr20.value = ingr.value;
    ingr20.style.background = "transparent";
    ingr20.style.border = "none";
    //ingr.disabled = true;
    ingr.placeholder = "";
    ingr.value = "";
    document.getElementById("instruction_1").focus();
  }
  else {alert("Error - Contact Technical Support");}
}*/

