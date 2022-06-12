function LoadData() {
  const http = new XMLHttpRequest();
  const url = 'https://236f935f-8f97-4113-a394-ae28e91900a2.id.repl.co/TopTen';

  http.open("GET", url);
  http.send();

  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const rawJson = JSON.parse(http.responseText);

      let inner = "";


      for (var i = 0; i < rawJson['L'].length; i++) {
        var object = rawJson['L'][i];

        var name = object['name'];
        var lvl = object['lvl'];

        inner += `<div class="panel-content">
              <div class="item-card d-flex">
              <div class="cross">
                <h1>${i+1}</h1>
              </div>
              <div class="spacer"></div>
              <p>${name}</p>
              <div class="end">
                <h1>${lvl}</h1>
              </div>
            </div>
          </div>`
      }

      document.getElementById("top-10").innerHTML = inner;
    }
  }
}

function LoadEKills() {
  const http = new XMLHttpRequest();
  const url = 'https://236f935f-8f97-4113-a394-ae28e91900a2.id.repl.co/TopE';

  http.open("GET", url);
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var rawJson = JSON.parse(http.responseText);
      var inner = "";

      for (var i = 0; i < rawJson['L'].length; i++) {
        var object = rawJson['L'][i];

        var name = object['name'];
        var kills = object['e'];

        inner += `<div class="panel-content">
        <div class="item-card d-flex">
        <div class="cross">
          <h1>${i+1}</h1>
        </div>
        <div class="spacer"></div>
        <p>${name}</p>
        <div class="end kills">
          <h1>${kills}</h1>
        </div>
      </div>
    </div>`
      }

      document.getElementById("enemy-kills").innerHTML = inner;
    }
  }
}