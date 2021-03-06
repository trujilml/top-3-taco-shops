// for local storage
$(document).ready(function () {
  $('#selectBox').change(function () {
    localStorage.setItem('myFavoriteTaco', $(this).val());

    var select = document.querySelector("#select")
    select.setAttribute("selected", "true")
    if (localStorage.getItem('myFavoriteTaco') === null) {
      localStorage.setItem('myFavoriteTaco', "No taco selected");
    }
    else {
      var currentTaco = localStorage.getItem('myFavoriteTaco')
      var currentTacoId = ""
      // switch statement for favorite tacos https://www.w3schools.com/js/js_switch.asp
      switch (currentTaco) {
        case "Crossroads":
          currentTacoId = "#Crossroads";
          break;
        case "Baja Shrimp":
          currentTacoId = "#bajashrimp";
          break;
        case "Green Chile":
          currentTacoId = "#greenchile";
          break;
        case "Trailer Park":
          currentTacoId = "#trailerpark";
          break;
        case "Fried Avocado":
          currentTacoId = "#fried";
          break;
        case "Cowboy":
          currentTacoId = "#cowboy";
          break;
        case "Shrimposito":
          currentTacoId = "#shrimposito";
          break;
        case "Puerco Verde":
          currentTacoId = "#puercoverde";
          break;
        case "Pollo Fantastico":
          currentTacoId = "#pollo";
          break;
        case "Freakin' Vegan":
          currentTacoId = "#vegan";
          break;
        case "Steak":
          currentTacoId = "#steak";
          break;
        case "Fish Taco":
          currentTacoId = "#fish";
          break;
        case "Al Pastor":
          currentTacoId = "#alpastor";
          break;
        case "Chicken":
          currentTacoId = "#chicken";
          break;
        case "Migas":
          currentTacoId = "#migas";
          break;
      }

      var currentTacoEl = document.querySelector(currentTacoId)
      currentTacoEl.setAttribute("selected", "true")

      // once user selects a taco, text content displays current selected taco
      const result = document.querySelector('#result');
      result.textContent = `You like ${currentTaco}! Feel free to choose another taco to enjoy!`;
    }
  });
});