import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
    this.fullback = 2;
    this.centre = 3;
    this.wing = 5;
    this.fiveEigth = 7;
    this.halfback = 11;
    this.secondRow = 13;
    this.frontRow = 17;
    this.hooker = 19;
    this.lock = 23;
    this.selectP1 = -1;
    this.selectP2 = -1;
    this.playerChoicePos = -1;
    this.totalScore = 0;
    this.options = 3;
    this.players = [
      "Kalyn Ponga", this.fullback,91
,"Jamayne Isaako", this.fullback*this.wing,84
,"Edrick Lee", this.wing,79
,"Xavier Coates", this.wing,81
,"Hymel Hunt", this.wing* this.centre,78
,"Corey Oates", this.wing*this.secondRow,85
,"Kurt Mann", this.fiveEigth,83
,"Anthony Milford", this.fiveEigth,84
,"Mitchell Pearce", this.halfback,88
,"Brodie Croft", this.halfback,83
,"David Klemmer", this.frontRow,92
,"Matthew Lodge", this.frontRow,81
,"Andrew McCullough", this.hooker,82
,"Issac Luke", this.hooker,77
,"Jacob Saifiti", this.frontRow,85
,"Payne Haas", this.frontRow,93
,"Lachlan Fitzgibbon", this.secondRow,82
,"Alex Glenn", this.secondRow,79
,"Sione Mata'utia", this.secondRow,81
,"Tevita Pangai", this.secondRow,84
,"Herman Ese'ese", this.lock,83
,"Cory Paix",this.hooker,74
,"Latrell Mitchell", this.fullback*this.centre,89
,"Roger Tuivasa-Sheck", this.fullback,94
,"Dane Gagai", this.wing*this.centre,84
,"Gerard Beale", this.wing,75
,"Campbell Graham", this.centre,80
,"Patrick Herbert", this.centre,79
,"Alex Johnston", this.wing,83
,"David Fusitu'a", this.wing*this.centre,87
,"Cody Walker", this.fiveEigth,86
,"Kodi Nikorima", this.fiveEigth,80
,"Adam Reynolds", this.halfback,87
,"Blake Green", this.halfback,80
,"Tevita Tatola", this.frontRow,79
,"Jamayne Taunoa-Brown", this.frontRow,79
,"Damien Cook", this.hooker,93
,"Wayde Egan", this.hooker,78
,"Thomas Burgess", this.frontRow,80
,"Lachlan Burr", this.frontRow,79
,"Jaydn Su'A", this.secondRow,78
,"Eliesa Katoa", this.secondRow,80
,"Ethan Lowe", this.secondRow,81
,"Tohu Harris", this.secondRow,89
,"Cameron Murray", this.lock,92
,"Adam Blair", this.lock,78
,"Dylan Edwards", this.fullback,82
,"Ryan Papenhuyzen", this.fullback,87
,"Josh Mansour", this.wing,83
,"Suliasi Vunivalu", this.wing,88
,"Dean Whare", this.centre,79
,"Justin Olam", this.centre,79
,"Brian To'o", this.wing,82
,"Marion Seve", this.wing*this.centre,80
,"Jarome Luai", this.fiveEigth,82
,"Cameron Munster", this.fiveEigth,95
,"Nathan Cleary", this.halfback,90
,"Ryley Jacks", this.halfback,79
,"James Tamou", this.frontRow,82
,"Jesse Bromwich", this.frontRow,88
,"Apisai Koroisau", this.hooker,87
,"Cameron Smith", this.hooker,95
,"James Fisher-Harris", this.frontRow*this.lock,87
,"Brandon Smith", this.frontRow*this.hooker,85
,"Viliame Kikau", this.secondRow,87
,"Felise Kaufusi", this.secondRow,85
,"Liam Martin", this.secondRow,80
,"Kenneath Bromwich", this.secondRow,82
,"Isaah Yeo", this.lock,85
,"Dale Finucane", this.lock,85
,"Corey Thompson", this.fullback,79
,"Matthew Dufty", this.fullback,82
,"Anthony Don", this.wing,82
,"Jordan Pereira", this.wing,79
,"Brian Kelly", this.centre,78
,"Euan Aitken", this.centre,80
,"Phillip Sami", this.wing*this.centre,81
,"Mikaele Ravalawa", this.wing,77
,"Ashley Taylor", this.fiveEigth,80
,"Corey Norman", this.fiveEigth,84
,"Jamal Fogarty", this.halfback,78
,"Adam Clune", this.halfback,75
,"Moeaki Fotuaika", this.frontRow,84
,"Josh Kerr", this.frontRow,78
,"Erin Clark", this.hooker,77
,"Cameron McInnes", this.hooker,89
,"Kevin Proctor", this.secondRow,81
,"Tyson Frizell", this.secondRow,86
,"Bryce Cartwright", this.secondRow,78
,"Tyrell Fuimaono", this.secondRow,77
,"Jai Arrow", this.lock,87
,"Trent Merrin", this.lock,79
,"Sam Lisone", this.frontRow,77
,"James Graham", this.frontRow,80
,"Adam Doueihi", this.fullback,80
,"Hamiso Tabuai-Fidow", this.fullback,80
,"David Nofoaluma", this.wing,83
,"Kyle Feldt", this.wing,82
,"Joseph Leilua", this.centre,83
,"Justin O'Neill", this.centre,79
,"Robert Jennings", this.wing,78
,"Connelly Lemuelu", this.wing,75
,"Josh Reynolds", this.fiveEigth,80
,"Scott Drinkwater", this.fiveEigth,82
,"Luke Brooks", this.halfback,84
,"Jake Clifford", this.halfback,80
,"Josh Aloiai", this.frontRow,79
,"Francis Molo", this.frontRow,78
,"Harry Grant", this.hooker,84
,"Reece Robson", this.hooker,80
,"Zane Musgrove", this.frontRow,77
,"Josh McGuire", this.frontRow,83
,"Luke Garner", this.secondRow,78
,"Mitchell Dunn", this.secondRow,77
,"Luciano Leilua", this.secondRow,82
,"Coen Hess", this.secondRow,81
,"Alex Twal", this.lock,84
,"Jason Taumalolo", this.lock,95
,"James Tedesco", this.fullback,95
,"Clinton Gutherson", this.fullback,87
,"Daniel Tupou", this.wing,84
,"Maika Sivo", this.wing,90
,"Josh Morris", this.centre,84
,"Michael Jennings", this.centre,84
,"Brett Morris", this.wing,84
,"Blake Ferguson", this.wing,86
,"Luke Keary", this.fiveEigth,93
,"Dylan Brown", this.fiveEigth,87
,"Kyle Flanagan", this.halfback,83
,"Mitchell Moses", this.halfback,89
,"Jared Waerea-Hargreaves", this.frontRow,85
,"Reagan Campbell-Gillard", this.frontRow,85
,"Jake Friend", this.hooker,85
,"Reed Mahoney", this.hooker,84
,"Siosiua Taukeiaho", this.frontRow,86
,"Junior Paulo", this.frontRow,83
,"Boyd Cordner", this.secondRow,91
,"Shaun Lane", this.secondRow,82
,"Angus Crichton", this.secondRow,83
,"Ryan Matterson", this.secondRow,87
,"Victor Radley", this.lock,84
,"Nathan Brown", this.lock,81
,"Charnze Nicoll-Klokstad", this.fullback,86
,"Tom Trbojevic", this.fullback,94
,"Jordan Rapana", this.wing,84
,"Tevita Funa", this.wing,78
,"Jarrod Croker", this.centre,84
,"Brad Parker", this.centre,79
,"Nick Cotric", this.wing*this.centre,84
,"Reuben Garrick", this.wing,81
,"Jack Wighton", this.fiveEigth,92
,"Dylan Walker", this.fiveEigth,82
,"George Williams", this.halfback,85
,"Daly Cherry-Evans", this.halfback,93
,"Josh Papalii", this.frontRow,92
,"Addin Fonua-Blake", this.frontRow,85
,"Josh Hodgson", this.hooker,89
,"Danny Levi", this.hooker,79
,"Iosia Soliola", this.frontRow,79
,"Sean Keppie", this.frontRow,77
,"Joseph Tapine", this.secondRow,83
,"Joel Thompson", this.secondRow,81
,"Elliott Whitehead", this.secondRow,82
,"Curtis Sironen", this.secondRow,82
,"Corey Horsburgh", this.lock,69
,"Jake Trbojevic", this.lock,92
,"Sione Katoa", this.wing,79
,"Christian Crichton", this.wing,79
,"Josh Dugan", this.centre,80
,"Reimis Smith", this.centre,80
,"Shaun Johnson", this.fiveEigth,90
,"Kieran Foran", this.fiveEigth,80
,"Chad Townsend", this.halfback,83
,"Brandon Wakeham", this.halfback,78
,"Aaron Woods", this.frontRow,81
,"Renouf To'omaga", this.frontRow,78
,"Blayke Brailey", this.hooker,82
,"Jeremy Marshall-King", this.hooker,79
,"Briton Nikora", this.secondRow,83
,"Josh Jackson", this.secondRow,83
,"Wade Graham", this.secondRow,86
,"Raymond Faitala-Mariner", this.secondRow,84
,"Jack Williams", this.lock,80
,"Adam Elliott", this.lock,79
,"Andrew Fifita", this.frontRow,85
,"Kerrod Holland", this.frontRow,78
,"Joseph Manu",this.centre,87
,"Kotoni Staggs",this.centre,85
,"Ken Maumalo",this.centre* this.wing,84

    ];
  }

  componentDidMount() {
    this.begin();
  }

  getNum = (m) => {
    return Math.floor(Math.random() * m);
  }

  begin = () => {
    this.reset();
    let x = document.getElementsByClassName("team")[0].style.display;
    if (x === "block") {
      document.getElementsByClassName("team")[0].style.display="none";  
    } else {
      document.getElementsByClassName("team")[0].style.display="block";  
    }    
  }

  getPlayer(x) {
    let chk; 
    let curr = this.options * this.getNum(this.players.length / this.options) + 1;
    chk = this.players[curr];
    while(chk % x !== 0) {
      curr = this.options * this.getNum(this.players.length / this.options) + 1;
      chk = this.players[curr];
    }
    //let name = this.players[curr - 1];
    let name = this.players[curr - 1] + " (" + this.players[curr + 1] + ")";
    
    for (let i = 0; i < document.getElementsByClassName("teamPlayer").length; i++) {
      if (name === document.getElementsByClassName("teamPlayer")[i].innerHTML) {
        // already got that player, go again
        return this.getPlayer(x);
      }
    }

    for (let i = 0; i < document.getElementsByClassName("choosePlayer").length; i++) {
      if (name === document.getElementsByClassName("choosePlayer")[i].innerHTML) {
        // already got that player, go again
        return this.getPlayer(x);
      }
    }
    //console.log(name);
    return name;
  }

  selectPlayer = (p) => {
    this.playerChoicePos = p;
    let option = document.getElementsByClassName("teamPlayer")[p].innerHTML;
    if (option.substring(0, 6) === "select") {
      for (let i = 0; i < document.getElementsByClassName("teamPlayer").length; i++) {
        document.getElementsByClassName("teamPlayer")[i].style.backgroundColor = "grey";
      }
      
      document.getElementsByClassName("choose")[0].style.visibility = "visible";
      this.changeBtns(true);
      let pos, heading;
      // changes based on team layout
      if (p === 12) {
        heading = "Fullback";
        pos = this.fullback;
      } else if (p === 8 || p === 9) {
        heading = "Winger";
        pos = this.wing;
      } else if (p === 10 || p === 11) {
        heading = "Centre";
        pos = this.centre;
      } else if (p === 7) {
        heading = "Five eighth";
        pos = this.fiveEigth;
      } else if (p === 6) {
        heading = "Halfback";
        pos = this.halfback;
      } else if (p === 3 || p === 4) {
        heading = "Second row";
        pos = this.secondRow;
      } else if (p === 5) {
        heading = "Lock";
        pos = this.lock;
      } else if (p === 1 || p === 2) {
        heading = "Prop";
        pos = this.frontRow;
      } else if (p === 0) {
        heading = "Hooker";
        pos = this.hooker;
      } else if (p === 13 || p === 14 || p === 15 || p === 16) {
        heading = "Bench";
        pos = 1;
      } else {
        alert("error code 69 - contact admin - pos is " + pos);
        pos = this.fullback;
      }      
      for (let i = 0; i < document.getElementsByClassName("choosePlayer").length; i++) {
        let name = this.getPlayer(pos);
        document.getElementsByClassName("choosePlayer")[i].innerHTML = name;
        let playerStr = name;
        name = playerStr.split("(")[0].split(" ");
        let x = name[name.length-2] + ",%20" + name[0];
        let imgUrl = "https://www.nrlsupercoachstats.com/highcharts/PlayerPictures/2020/" + x + ".png";
        document.getElementsByClassName("choosePlayer")[i].style="background-image: url(" + imgUrl + ")";        
      }
      document.getElementById("headingID").innerHTML = "Choose your " + heading;
    } else {
      if (this.selectP1 === -1) {
        this.selectP1 = p;
        document.getElementsByClassName("teamPlayer")[this.selectP1].style.color = "red";
        document.getElementsByClassName("teamPlayer")[this.selectP1].style.backgroundColor = "yellow";
      } else {
        this.selectP2 = p;
      }

      if (this.selectP1 !== -1 && this.selectP2 !== -1) {
        let temp = document.getElementsByClassName("teamPlayer")[this.selectP1].innerHTML;
        document.getElementsByClassName("teamPlayer")[this.selectP1].innerHTML = document.getElementsByClassName("teamPlayer")[this.selectP2].innerHTML;
        document.getElementsByClassName("teamPlayer")[this.selectP2].innerHTML = temp;
        this.selectP1 = -1;
        this.selectP2 = -1;
        this.reset();
      }
    }    
  }

  choosePlayer = (n) => {
    document.getElementsByClassName("teamPlayer")[this.playerChoicePos].innerHTML = document.getElementsByClassName("choosePlayer")[n].innerHTML;
    this.changeBtns(false);    
    for (let i = 0; i < document.getElementsByClassName("teamPlayer").length; i++) {
      document.getElementsByClassName("teamPlayer")[i].style.backgroundColor = "white";
    }
    
    let playerStr = document.getElementsByClassName("teamPlayer")[this.playerChoicePos].innerHTML;
    
    //let playerScore = playerStr.substring(playerStr.length - 3, playerStr.length - 1);
    let playerScore = playerStr.split("(")[1].split(")")[0];
    this.totalScore += parseInt(playerScore);
    document.getElementById("scoreID").innerHTML = "Score : " + this.totalScore;
    console.log(playerStr.split("("));
    let name = playerStr.split("(")[0].split(" ");
    let x = name[name.length-2] + ",%20" + name[0];
    let imgUrl = "https://www.nrlsupercoachstats.com/highcharts/PlayerPictures/2020/" + x + ".png";
    //let imgUrl = "https://www.nrlsupercoachstats.com/highcharts/PlayerPictures/2020/Ikuvalu,%20Matt.png";
    document.getElementsByClassName("teamPlayer")[this.playerChoicePos].style="background-image: url(" + imgUrl + ")";
    this.reset();
  }

  changeBtns = (c) => {
    for (let i = 0; i < document.getElementsByClassName("teamPlayer").length; i++) {
      document.getElementsByClassName("teamPlayer")[i].disabled = c;
    }
  }

  reset = () => {
    document.getElementById("headingID").innerHTML = "";
    document.getElementsByClassName("choose")[0].style.visibility = "hidden";
    for (let i = 0; i < document.getElementsByClassName("choosePlayer").length; i++) {
      document.getElementsByClassName("choosePlayer")[i].style.color = "black";
      document.getElementsByClassName("choosePlayer")[i].style.backgroundColor = "white";
      document.getElementsByClassName("choosePlayer")[i].innerHTML = "choosePlayer";
    }

    for (let i = 0; i < document.getElementsByClassName("teamPlayer").length; i++) {
      document.getElementsByClassName("teamPlayer")[i].style.color = "black";
      document.getElementsByClassName("teamPlayer")[i].style.backgroundColor = "white";


      let playerStr = document.getElementsByClassName("teamPlayer")[i].innerHTML;
      if (playerStr.substring(0, 6) !== "select") {
        let name = playerStr.split("(")[0].split(" ");
        let x = name[name.length-2] + ",%20" + name[0];
        let imgUrl = "https://www.nrlsupercoachstats.com/highcharts/PlayerPictures/2020/" + x + ".png";
        //let imgUrl = "https://www.nrlsupercoachstats.com/highcharts/PlayerPictures/2020/Ikuvalu,%20Matt.png";
        document.getElementsByClassName("teamPlayer")[i].style="background-image: url(" + imgUrl + ")";
      }
    }
    this.selectP1 = -1;
    this.selectP2 = -1;
  }

  render() {
    return (
      <div className="App">
        <div className="team" style={{display: "none"}}>
          <h3 id="scoreID"> </h3>
          <div className="choose" style={{visibility: "hidden"}}>
          <h3 id="headingID"> </h3>
            <table>
              <tbody>
                <tr>
                  <td><button className="choosePlayer" onClick={() => {this.choosePlayer(0)}}>choose player</button></td>
                  <td><button className="choosePlayer" onClick={() => {this.choosePlayer(1)}}>choose player</button></td>
                  <td><button className="choosePlayer" onClick={() => {this.choosePlayer(2)}}>choose player</button></td>
                  <td><button className="choosePlayer" onClick={() => {this.choosePlayer(3)}}>choose player</button></td>
                  <td><button className="choosePlayer" onClick={() => {this.choosePlayer(4)}}>choose player</button></td>
                </tr>
              </tbody>
            </table>
            
          </div>
          <div className="myTeam">
            <table>
              <tbody>
                <tr>
                  <td></td><td></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(0)}} id="hookerID">select hooker</button></td>
                  <td></td><td></td>
                </tr>
                <tr>
                  <td></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(1)}} id="frontRowLeftID">select frontrow</button></td>
                  <td></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(2)}} id="frontRowRightID">select frontrow</button></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(3)}}  id="secondRowLeftID">select secondrow</button></td>
                  <td></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(4)}}  id="secondRowRightID">select secondrow</button></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td><td></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(5)}}  id="lockID">select lock</button></td>
                  <td></td><td></td>
                </tr>
                <tr>
                  <td></td><td></td><td></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(6)}}  id="halfBackID">select halfback</button></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td><td></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(7)}}  id="fiveEigthID">select five eighth</button></td>
                  <td></td><td></td><td></td>
                </tr>
                <tr>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(8)}}  id="wingLeftID">select wing</button></td>
                  <td></td><td></td><td></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(9)}}  id="wingRightID">select wing</button></td>
                </tr>
                <tr>
                  <td></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(10)}}  id="centreLeftID">select centre</button></td>
                  <td></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(11)}}  id="centreRightID">select centre</button></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td><td></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(12)}}  id="fullbackID">select Fullback</button></td>
                  <td></td><td></td>
                </tr>
                <tr><td>------------------------------</td><td>------------------------------</td><td>------------------------------</td><td>------------------------------</td><td>------------------------------</td></tr>
                <tr>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(13)}}  id="bench1ID">select Bench</button></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(14)}}  id="bench2ID">select Bench</button></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(15)}}  id="bench3ID">select Bench</button></td>
                  <td><button className="teamPlayer" onClick={()=>{this.selectPlayer(16)}}  id="bench4ID">select Bench</button></td>
                </tr>
              </tbody>
            </table>
          </div>          
        </div>     
        <p style={{position: "absolute", bottom: "0"}}>NRL DRAFT v4.1</p>   
      </div>
    );
  }  
}

export default App;
