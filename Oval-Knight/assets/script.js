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
        var kills = object['e'];
        var lvl = object['lvl'];

        inner += `<div class="panel-content" id="item10">
        <div class="item-card d-flex">
          <div class="cross">
            <h1>${i + 1}</h1>
          </div>
            <p style="padding-right: 0; width: 60%;">${name}</p>
            <div role="progressbars" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="--value:0; --level: ${lvl};"></div>
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

        inner += `<div class="panel-content" id="item10">
        <div class="item-card d-flex">
          <div class="cross">
            <h1>${i + 1}</h1>
          </div>
            <p style="padding-right: 0; width: 60%;">${name}</p>
            <div class="kills" role="progressbars" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="--value:0; --level: ${kills};"></div>
        </div>
      </div>`
      }

      document.getElementById("enemy-kills").innerHTML = inner;
    }
  }
}