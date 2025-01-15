//let nameValue = namex.value;
let form = document.querySelector("#formx");
let result = document.querySelector("#result");
let start = document.querySelector("#start");
let regex = /^[a-zA-Z][a-zA-Z_]{2,19}$/;
start.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.createElement("input");
  name.id = "name";
  name.setAttribute("placeholder", "your name");

  start.style.display = "none";
  let nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.innerText = "What is your name: ";
  let nameSubmit = document.createElement("button");
  nameSubmit.innerText = "Submit";

  nameLabel.appendChild(name);
  nameLabel.appendChild(nameSubmit);
  form.appendChild(nameLabel);

  nameSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let nval = name.value;
    let nameValue = regex.test(nval) ? nval : "Guest";
    nameLabel.style.display = "none";
    result.innerHTML = `Welcome <span>${nameValue}</span> to my page!`;
    let country = document.createElement("input");
    country.id = "country";
    country.setAttribute("placeholder", "from Which country? : ");

    // start.style.display = 'none'
    let countryLabel = document.createElement("label");
    countryLabel.setAttribute("for", "country");
    countryLabel.innerHTML = ` <span>${nameValue}</span>! Where are you from?`;
    let countrySubmit = document.createElement("button");
    countrySubmit.innerText = "Submit";
    countryLabel.appendChild(country);
    countryLabel.appendChild(countrySubmit);
    form.appendChild(countryLabel);

    countrySubmit.addEventListener("click", (e) => {
      e.preventDefault();
      let cval = country.value;
      CountryValue = regex.test(cval) ? cval : "Unknown country";
      result.innerHTML += `and you come from <span>${CountryValue}</span> , do you live now in ${CountryValue} or you are abroad?`;
      countryLabel.style.display = "none";
      let question = document.createElement("p");
      question.innerHTML = ` <span>${nameValue}</span>! Are you living no in <span>${CountryValue}</span> right now or abroad?`;
      let areYouHome = document.createElement("select");
      let yes = document.createElement("option");
      yes.id = "yes";
      yes.value = "Yes";
      yes.innerText = "Yes";
      let no = document.createElement("option");
      no.id = "no";
      no.value = "No";
      no.innerText = "No";
      areYouHome.appendChild(yes);
      areYouHome.appendChild(no);

      let answerSubmit = document.createElement("button");
      answerSubmit.innerText = "Submit";
      //  countryLabel.appendChild(country);
      //  countryLabel.appendChild(countrySubmit);
      let qContainer = document.createElement("div");
      qContainer.appendChild(question);
      qContainer.appendChild(areYouHome);
      qContainer.appendChild(answerSubmit);
      form.appendChild(qContainer);
      answerSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        qContainer.style.display = "none";

        let answeVal = areYouHome.value;
        //console.log(answeVal);
        if (answeVal === "Yes") {
          result.innerHTML +=
            "<br />" +
            ` Wow <span>${nameValue}</span>! , to be home in <span>${CountryValue}</span> is a great blessing!`;
          //countryLabel.style.display = "none";
        }
        if (answeVal === "No") {
          result.innerHTML +=
            "<br />" +
            ` Oh dear <span>${nameValue}</span>! , to be away from your country <span>${CountryValue}</span> is not always a joy, i wish you best lock and to visit your country soon`;
          //countryLabel.style.display = "none";
        }
        //-----------------
        let tquestion = document.createElement("p");
        tquestion.innerHTML = `Hey <span>${nameValue}</span>! I am <span>Ali</span> Your classmate in th <span>DCI course</span>. What do you think about my page?`;
        let tellYourOpinion = document.createElement("select");
        let good = document.createElement("option");
        good.id = "good";
        good.value = "Good";
        good.innerText = "Good";
        let okay = document.createElement("option");
        okay.id = "okay";
        okay.value = "Okay";
        okay.innerText = "Okay";
        let notSo = document.createElement("option");
        notSo.id = "notbad";
        notSo.value = "Not so bad";
        notSo.innerText = "Not so bad!";
        tellYourOpinion.appendChild(good);
        tellYourOpinion.appendChild(okay);
        tellYourOpinion.appendChild(notSo);

        let tanswerSubmit = document.createElement("button");
        tanswerSubmit.innerText = "Submit";
        //  countryLabel.appendChild(country);
        //  countryLabel.appendChild(countrySubmit);
        let tContainer = document.createElement("div");
        tContainer.appendChild(tquestion);
        tContainer.appendChild(tellYourOpinion);
        tContainer.appendChild(tanswerSubmit);
        form.appendChild(tContainer);

        tanswerSubmit.addEventListener("click", (e) => {
          e.preventDefault();
          tContainer.style.display = "none";
          let tVal = tellYourOpinion.value;

          if (tVal === "Good") {
            result.innerHTML +=
              "<br />" +
              ` Amaising! <span>${nameValue}</span>! , I am so glad that you like my page, Thanks a lot!`;
            tContainer.style.display = "none";
          }
          if (tVal === "Okay") {
            result.innerHTML +=
              "<br />" +
              ` dear <span>${nameValue}</span>! , The next time i will work on it to make it better, I appreciate your feedback, thank you`;
            tContainer.style.display = "none";
          }
          if (tVal === "Not so bad") {
            result.innerHTML +=
              "<br />" +
              ` Oh <span>${nameValue}</span>! , I am so sorry that i could not make it better than that, i promise you that i will do my best to build a new better one, I am glad that you oppened my eyes to try to correct my mistakes, All love and best wishes!`;
            tContainer.style.display = "none";
          }
          let reset = document.createElement("button");
          reset.innerText = "Reset";
          form.appendChild(reset);
        });
      });
    });
  });
});
