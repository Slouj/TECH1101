ScrollOut({
    cssProps: true,
    threshold: 0.2
  });
  
  function openWindow(evt, windowName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    document.getElementById(windowName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  
  function closeWindow(windowName) {
    document.getElementById(windowName).style.display = "none";
    // Optionally, remove the "active" class from the corresponding tab button
    var tabButton = document.querySelector('.tablinks[data-window="' + windowName + '"]');
    if (tabButton) {
      tabButton.classList.remove("active");
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    var tablinks = document.getElementsByClassName('tablinks');
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].addEventListener('click', function () {
        // Toggle the collapsed class for each grid cell
        var gridCells = document.querySelectorAll('.layout > div');
        gridCells.forEach(function (cell) {
          cell.classList.toggle('collapsed');
        });
      });
    }
  });
 

  