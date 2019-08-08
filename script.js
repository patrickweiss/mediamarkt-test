function openTab(e, tabName) {
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
  } 

function fillTables() {
    Object.keys(json).map(tab => {

      //Create Table
      let container = document.getElementById(tab);
      let table = document.createElement("table");
      table.classList = "table table-stripped";
      
      //Load thead
      let thead = document.createElement("thead");
      thead.classList = "thead-inverse";
      let tr = document.createElement('tr');
      Object.keys(json[tab][0]).forEach(row => {
        let td = document.createElement('td');
        td.innerText = row;
        tr.appendChild(td);
      });
      thead.appendChild(tr);

      //Load tbody
      let tbody = document.createElement("tbody");
      Object.values(json[tab]).forEach(rows => {
        let tr = document.createElement('tr');
        Object.values(rows).forEach(row => {
          let td = document.createElement('td');
          td.innerText = row;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });

      //Append elements to document
      table.appendChild(thead);
      table.appendChild(tbody);
      container.appendChild(table);
    })

}

fillTables();