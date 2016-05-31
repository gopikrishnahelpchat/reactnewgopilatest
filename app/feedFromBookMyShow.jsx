var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');
var UTILS = require('./utils.jsx');
var X2JS= require('x2js');
var SingleMovieEvent= require('./SingleMovieEvent');

require('style!css!bootstrap/dist/css/bootstrap.min.css');


var xml = '<BookMyShow version="1.0"><Regions><Region Region_strCode="AHM" Region_strName="Ahemadabad" Region_intSequence="1"/><Region Region_strCode="JODH" Region_strName="Jodhpur" Region_intSequence="1"/><Region Region_strCode="MUMBAI" Region_strName="Mumbai" Region_intSequence="1"/><Region Region_strCode="BANG" Region_strName="Bangalore" Region_intSequence="3"/><Region Region_strCode="NCR" Region_strName="National Capital Region" Region_intSequence="4"/><Region Region_strCode="CHEN" Region_strName="Chennai" Region_intSequence="7"/><Region Region_strCode="INDO" Region_strName="Indonesia" Region_intSequence="55"/></Regions><Venues></Venues><Events><Event Event_strCode="ET00009711" Event_strType="MT" Event_bytSequence="50" Event_strLanguage="Haryanvi" Event_strTitle="Chandrawal 2 (U/A)" Event_strURLTitle="chandrawal-2" Event_strShortName="Chandrawal 2" Event_strShortCode="C" Event_strCensor="UA" Event_strSynopsis="Chandrawal is the  head ofGadia Lohartribe, Jodha Sardar`s grand daughter. Their gypsy tribe is proud of their heritage and prohibit girls to marry outside their caste. During one of their journeys, Jodha Sardar was camping near the Ram Garh village when Suraj, Ranjit Chaudhari`s, son met Chandrawal. It was love at first sight and every one found out about their affair.  Jodha Sardar then decides to leave the village as he does not want Chandrawal and Suraj to meet. But later the duo see each other after long and try to meet. But before they could meet, Suraj gets killed by Jodha Sardar in an attempt to rescue Chandrawal from an honour killing, Chandrawal then immediately kills herself. Chandrawal 2 takes off from this incident." Event_dtmReleaseDate="2012-05-04 00:00:00" Event_intDuration="0" Event_strStarring="" Event_strDirector="Jayant Prabhakar" Event_strMusic="" Event_strWriter="" Event_strCensorComment="" Event_intLanguage="" Event_strGenre="Drama" Event_strTrailerURL="http://www.youtube.com/watch?v=Sp0r8ZwtgVI" Event_strStatus=""/><Event Event_strCode="ET00009712" Event_strType="MT" Event_bytSequence="50" Event_strLanguage="Hindi" Event_strTitle="Chotta Bheem " Event_strURLTitle="chotta-bheem" Event_strShortName="Chotta Bheem" Event_strShortCode="C B" Event_strCensor="-" Event_strSynopsis="Centuries ago, Damyaan, a Sorcerer was granted a wish to be immortal by the ``Book of Magi`` with a rider/curse that he would be confined to the City of Sonapur.To escape from this confinement and to unleash his dark arts over the world, Damyaan lures Raja Indravarma with a map with the directions to the City of Gold. Despite warning from gypsies, the Raja sets out to seek the treasures along with Chhota Bheem and his friends. Once he gets there, he unknowingly sets Damyaan free who captures Chhota Bheem and his friends and imprisons them. In the prison, Bheem meets Santrik who tells him that the only way Damyaan can be defeated is to destroy him with the ``Book of Magi``." Event_dtmReleaseDate="2012-05-18 00:00:00" Event_intDuration="0" Event_strStarring="" Event_strDirector="" Event_strMusic="" Event_strWriter="" Event_strCensorComment="" Event_intLanguage="" Event_strGenre="Animation|MYTHO" Event_strTrailerURL="" Event_strStatus=""/><Event Event_strCode="ET00009713" Event_strType="MT" Event_bytSequence="50" Event_strLanguage="Marathi" Event_strTitle="Ha Bharat Maza (U)" Event_strURLTitle="ha-bharat-maza" Event_strShortName="Ha Bharat Maza" Event_strShortCode="H B M" Event_strCensor="U" Event_strSynopsis="The film depicts a family - Anna Sukhatme, his wife, a married daughter Varsha and two sons Raghav and Indra. Indra is aspiring to become a computer engineer and is falling short of just one percent in the entrance exam. Getting admission in a renowned college is only possible by offering an exorbitant donation. The family is in a dilemma and raising a huge donation challenges their values.Meanwhile, the country is charged with Anna Hazare`s India against Corruption movement. Everyone in India irrespective of their political affiliations, age, gender are all affected by the movement and the Sukhatme family is no exception." Event_dtmReleaseDate="2012-05-04 00:00:00" Event_intDuration="116" Event_strStarring="Vikram Gokhale, Uttara Baokar, Renuka Daftardar, Aalok Rajwade, Jitendra Joshi, Devika Daftardar, Omkar Govardhan, Kishor Kadam" Event_strDirector="Sumitra Bhave, Sunil Sukthankar" Event_strMusic="" Event_strWriter="" Event_strCensorComment="" Event_intLanguage="" Event_strGenre="Drama" Event_strTrailerURL="https://www.youtube.com/watch?v=uT6kcaVFnJk" Event_strStatus=""/><Event Event_strCode="ET00009714" Event_strType="MT" Event_bytSequence="50" Event_strLanguage="Marathi" Event_strTitle="Nach Tuzach Lagin Haai " Event_strURLTitle="nach-tuzach-lagin-haai" Event_strShortName="Nach Tuzach Lagin Ha" Event_strShortCode="N T L H" Event_strCensor="-" Event_strSynopsis="Marathi film `Naach Tuzach Lagin Haay` seems to have been inspired by Darwin or Sigmund Freud`s theories. The film will now be released in May 2012. Produced by Mr. Sanjay Khamkar under his banner Eric Fusions, the film is directed by well known actor, Milind Shinde who has also written the script and the lyrics of this film. According to Milind Shinde, this subject is new for a Marathi film and it is likely to receive recognition at the national and international level. He has thanked the producer, for courageously producing the film on this subject. The film`s star cast comprises of Milind Shinde, Chaaya Kadam, Dr. Suresh Shinde, Vaishali Salvi, Namrata Aawate, Sourabh Bahadure Tanvi Fiske. Some of the credits include the camera work which has been done by Pratapan Nayar, the music by Mangesh Dhakade and Sound by Kamod Kharade ." Event_dtmReleaseDate="2012-05-04 00:00:00" Event_intDuration="0" Event_strStarring="Milind Shinde, Chaaya Kadam, Vaishali Salvi, Sourabh Bahadure, Namrata Awate" Event_strDirector="Milind Shinde" Event_strMusic="" Event_strWriter="Milind Shinde" Event_strCensorComment="" Event_intLanguage="" Event_strGenre="Drama" Event_strTrailerURL="" Event_strStatus=""/><Event Event_strCode="ET00009715" Event_strType="MT" Event_bytSequence="50" Event_strLanguage="Tulu " Event_strTitle="Aamait Asal Eemait Kusal (U/A)" Event_strURLTitle="aamait-asal-eemait-kusal" Event_strShortName="Aamait Asal Eemait K" Event_strShortCode="A A E K" Event_strCensor="UA" Event_strSynopsis="Aamait Asal Eemait Kusal is a comedy based on the play by William Shakespeare called ``A Comedy of Errors``. The story revolves around two sets of identical twins with the same name; two servants and their two masters, separated at birth. Hilarity ensues when the two separated pairs bump into each other after many years and each one is confused for the other." Event_dtmReleaseDate="2012-05-04 00:00:00" Event_intDuration="0" Event_strStarring="Naveen D. Padil, Jyotish Shetty, Saikrishna Kudla, Bhojaraj Vamanjur, Sarita Shetty, Akshata Marla, Sukanya Rai, Shilpa Kotian" Event_strDirector="Ranjan Raghu Shetty" Event_strMusic="" Event_strWriter="" Event_strCensorComment="" Event_intLanguage="" Event_strGenre="Comedy" Event_strTrailerURL="http://www.youtube.com/watch?v=W9ulwooz89g" Event_strStatus=""/><Event Event_strCode="ET00009716" Event_strType="MT" Event_bytSequence="50" Event_strLanguage="English" Event_strTitle="Hugo (U/A)" Event_strURLTitle="hugo" Event_strShortName="Hugo" Event_strShortCode="H" Event_strCensor="UA" Event_strSynopsis="Based on Brian Selznick`s captivating and imaginative New York Times best-seller ``The Invention of Hugo Cabret`` this is Scorsese`s first film shot in 3D. It tells the tale of an orphan boy Hugo (Asa Butterfield) living a secret life in the walls of a Paris train station.   When Hugo encounters a broken machine, an eccentric girl, and the cold, reserved man who runs the toy shop, he is caught up in a magical, mysterious adventure that could put all of his secrets in jeopardy." Event_dtmReleaseDate="2012-05-04 00:00:00" Event_intDuration="126" Event_strStarring="Chlo  Grace Moretz, Emily Mortimer, Jude Law, Helen McCrory, Christopher Lee, Asa Butterfield, Ray Winstone" Event_strDirector="Martin Scorsese" Event_strMusic="" Event_strWriter="" Event_strCensorComment="" Event_intLanguage="" Event_strGenre="Family|Mystery" Event_strTrailerURL="" Event_strStatus=""/><Event Event_strCode="ET00000113" Event_strType="MT" Event_bytSequence="50" Event_strLanguage="Hindi" Event_strTitle="Welcome (U/A)" Event_strURLTitle="welcome" Event_strShortName="Welcome" Event_strShortCode="W" Event_strCensor="UA" Event_strSynopsis="Uday Shetty (Nana Patekar), Majnu (Anil Kapoor) and their boss, Sikander (Feroz Khan), three Hong Kong-based serio-comic Dons, are keen to get their sister Sanjana (Katrina Kaif) married into a respectable family. Uday, upon a chance meeting with a handsome bachelor, Rajiv (Akshay Kumar), is convinced that the latter would be an appropriate match for Sanjana. The same series is followed by the rest of the brothers who like the same guy. Meanwhile, Sanjana, unaware of her brothers` contrivances, meets Rajiv on a cruise and the two falls in love. She has the acceptance of Dr. Ghunghroo (Paresh Rawal) who is Rajiv`s uncle doesn`t realize that she is the sister of the Mafia.This fall-down funny comedy takes another turn when a stunning bomb (Mallika Sherawat) who claims to be Rajiv`s fiancee shows up on the scene and adds to the commotion and mayhem adding up to the laughing out your guts factor." Event_dtmReleaseDate="2007-12-21 00:00:00" Event_intDuration="159" Event_strStarring="Akshay Kumar, Katrina Kaif, Anil Kapoor, Nana Patekar, Mallika Sherawat, Paresh Rawal, Vijay Raaz, Mushtaq Khan, Feroz Khan" Event_strDirector="Anees Bazmee" Event_strMusic="Himesh Reshammiya" Event_strWriter="" Event_strCensorComment="" Event_intLanguage="" Event_strGenre="Comedy|ROMANCE CO" Event_strTrailerURL="" Event_strStatus=""/><Event Event_strCode="ET00001159" Event_strType="MT" Event_bytSequence="50" Event_strLanguage="English" Event_strTitle="Rear Window (1954) (A)" Event_strURLTitle="rear-window-1954" Event_strShortName="Rear Window" Event_strShortCode="R W" Event_strCensor="A" Event_strSynopsis="A newspaper photographer, who is recuperating from a broken leg at home, kills time looking outside his window. During one of his observations, he comes across what he believes to be a murder. He now takes it upon himself to solve this murder with the help of his wife and nurse." Event_dtmReleaseDate="1954-04-02 00:00:00" Event_intDuration="112" Event_strStarring="James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter, Raymond Burr, Judith Evelyn, Ross Bagdasarian" Event_strDirector="Alfred Hitchcock" Event_strMusic="Franz Waxman" Event_strWriter="John Michael Hayes" Event_strCensorComment="" Event_intLanguage="" Event_strGenre="Action1" Event_strTrailerURL="https://www.youtube.com/watch?v=m01YktiEZCw" Event_strStatus="CS"/><Event Event_strCode="ET00000005" Event_strType="MT" Event_bytSequence="50" Event_strLanguage="Hindi" Event_strTitle="Bluffmaster (U/A)" Event_strURLTitle="bluffmaster" Event_strShortName="Bluffmaster" Event_strShortCode="B" Event_strCensor="UA" Event_strSynopsis="Roy (Abhishek Bachchan) is a professional conman, who has raised his work to the level of an art. The only true thing he has is his love for Simmi (Priyanka Chopra) - someone who is so rooted, honest and sincere, that he can`t bring himself to tell her the reality of who he is. But when his past catches up with him, she cannot forgive him for the deceit their relationship is built on. He loses her forever. That`s when Aditya Srivastav (Riteish Deshmukh) enters the picture. He is the counterpoint to everything that Roy is - as frantic as Roy is calm, as dumb as Roy is smart, as messy and untidy as Roy is smooth. They have only one thing in common - Aditya is a conman too. At least he thinks of himself as one. In Roy`s book, he`s an embarrassment. But one that won`t go away! Despite himself, or maybe to take his mind off Simmi, he agrees to teach Dittu the rules of the game. In that process, he melts and warms up to the boyish charm of his `student`. That`s when his world is spun upside down - he is forced to face facts that are a slap in the face. Suddenly Roy, who prides himself on being able to cheat anyone and anything, is pushed into a corner from where there is no exit. For the man who wears so many masks, he is now left with no alternative but to take them all off and finally reveal himself - if he is still there. With an outstanding and innovative musical score featuring a dazzling array of international and local talent, Bluffmaster! Promises an exhilarating roller coaster ride full of laughs, excitement and emotions that are quite unprecedented." Event_dtmReleaseDate="2006-12-16 00:00:00" Event_intDuration="137" Event_strStarring="Abhishek Bachchan, Til Schweiger, Riteish Deshmukh, Nana Patekar, Boman Irani, Tinnu Anand" Event_strDirector="Uwe Boll" Event_strMusic="Vishal - Shekhar" Event_strWriter="" Event_strCensorComment="" Event_intLanguage="" Event_strGenre="Comedy|Drama" Event_strTrailerURL="" Event_strStatus=""/><Event Event_strCode="ET00000033" Event_strType="MT" Event_bytSequence="50" Event_strLanguage="English" Event_strTitle="Harry Potter And The Order Of The Phoenix (U/A)" Event_strURLTitle="harry-potter-and-the-order-of-the-phoenix" Event_strShortName="Harry Potter 5 (E)" Event_strShortCode="H P A T O" Event_strCensor="UA" Event_strSynopsis="When Harry Potter (Daniel Radcliffe) returns to Hogwarts for his fifth year of study, he discovers that much of the wizarding community is in denial of the teenagers recent encounter with the evil Lord Voldemort. They prefer to turn a blind eye to the news that Voldemort has returned.The Minister for Magic, Cornelius Fudge, appoints a new Defense against the Dark Arts teacher to keep watch over Dumbledore and the Hogwarts students. He fears that the Headmaster of Hogwarts, Albus Dumbledore is lying about Voldemorts return in order to undermine his power and take his job.The young wizards are unprepared to defend themselves against the Dark forces threatening them and the entire wizarding community, so with encouragement from his friends Hermione and Ron, Harry takes matters into his own hands.Harry meets secretly with a group of students, who name themselves Dumbledores Army and teaches the young and courageous wizards how to defend themselves from the extraordinary battle that awaits them." Event_dtmReleaseDate="2007-07-13 00:00:00" Event_intDuration="138" Event_strStarring="Daniel Radcliffe, Ralph Fiennes, Emma Watson, Rupert Grint, Harry Melling, Jason Boyd, Robert Pattinson, Brendan Gleeson, David Thewlis, Maggie Smith, Julie Walters, Alan Rickman" Event_strDirector="David Yates" Event_strMusic="" Event_strWriter="Michael Goldenberg , J.K. Rowling" Event_strCensorComment="" Event_intLanguage="" Event_strGenre="Adventure|Drama|Fantasy" Event_strTrailerURL="" Event_strStatus=""/></Events><Sessions></Sessions></BookMyShow>';


var attributeArray = ['Event_strCode', 'Event_strTitle','Event_strDirector','Event_strStarring','Event_strLanguage','Event_strTrailerURL'];
var genrePossibleArray = ['Action', 'Drama', 'Romance', 'Comedy', 'Thriller', 'Horror'];

var XmlParent = React.createClass({

    getInitialState:function () {
        return {eventsStateJson: []};
        // return {};
    },
    getValue:function (eventObj,attribute) {
        return eventObj["_"+attribute];
    },
    isNullOrEmpty: function(value) {
        return !(typeof value === "string" && value.length > 0);
    },
    getValueFromAny:function (eventObj, atribute1, attribute2) {
        var value1 = this.getValue(eventObj, atribute1);
        var value2 = this.getValue(eventObj, attribute2);
        if(!this.isNullOrEmpty(value1)){
            return value1;
        }
        return value2;
    },
    isCurrentRunningMovie:function (currentEvent) {
        var type = this.getValue(currentEvent, "Event_strType");
        var status = this.getValue(currentEvent, "Event_strStatus");
        // alert("type " + type + " status " + status);
        if(type == "MT" ) {
            return true;
        }
        return false;
    },
    getEventGenre:function (currentEvent) {
        var genre = this.getValue(currentEvent, "Event_strGenre");
        if(this.isNullOrEmpty(genre)){
            return genrePossibleArray[0];
        }
        var i =0;
        for(i=0;i<genrePossibleArray.length;i++) {
            if(genre.toUpperCase() == genrePossibleArray[i].toUpperCase()){
                return genre;
            }
        }
        return genrePossibleArray[0];
    },
    componentDidMount:function () {
        var x2js = new X2JS();
        var document = x2js.xml2js(xml);
        var i=0,j=0;
        var events = document.BookMyShow.Events.Event;
        var eventsJson= [];

        for(i=0;i<events.length;i++){
            var eventElement = {};
            var currentEvent = events[i];
            if(!this.isCurrentRunningMovie(currentEvent)){
                continue;
            }

            //Common attributes fill without condition
            for(j=0;j<attributeArray.length;j++) {
                eventElement[attributeArray[j]]= (currentEvent["_"+attributeArray[j]]);
            }
            //Fill attributes with logic
            var eventCode = this.getValue(currentEvent, "Event_strCode");
            var eventUrlTitle = this.getValue(currentEvent, "Event_strURLTitle");
            var eventGenre = this.getEventGenre(currentEvent);

            eventElement["Event_strReleaseDate"]= this.getValueFromAny(currentEvent, "Event_strReleaseDate","Event_dtmReleaseDate");
            eventElement["img_loc1"] =  "https://in.bmscdn.com/events/Large/" +eventCode + ".jpg";
            eventElement["url"] = "https://in.bookmyshow.com/movies/"+eventUrlTitle+"/"+eventCode;
            eventElement["genre"] = eventGenre;
            eventElement["rating"] = 3;
            eventElement["position"] = i;
            eventElement["order"] = 0;
            eventsJson.push(eventElement);
        }
        this.setState({
            eventsStateJson: eventsJson
        });

        console.log(eventsJson);
    },
    onOrderChanged:function (position,e) {
        var eventsJson = this.state.eventsStateJson;
        eventsJson[position].order = e.target.value;
        console.log("order changed " + " e val "+e.target.value);
        console.log(eventsJson);
        this.setState({eventsStateJson: eventsJson});
    },
    onRatingChanged:function (position,e) {
        var eventsJson = this.state.eventsStateJson;
        eventsJson[position].rating = e.target.value;
        console.log("rating changed " + " e val "+e.target.value);
        console.log(eventsJson);
        this.setState({eventsStateJson: eventsJson});
    },
    onSubmitClick:function () {
        var i =0;
        var events = this.state.eventsStateJson;
        for(i=0;i<events.length;i++) {
            var rating = events[i].rating;
            var order = events[i].order;
            if(rating < 0 || rating > 5) {
                alert("Error :: Cannot Submit because rating is not between 0 to 5 for title " + events[i].Event_strTitle);
                return;
            }
            if(order <= 0 ) {
                alert("Error :: Cannot Submit because Order value is less than or equal to 0 for title " + events[i].Event_strTitle);
                return;
            }
        }
        alert("Success submitting to server ");

        axios.get("http://localhost:3000/submitMovieJson?movieJson=" + this.state.eventsStateJson , {
                headers: {
                    'X-AKOSHA-AUTH': 'eyJ1c2VyX25hbWUiOm51bGwsImlkIjo0NzU2MjcsIm1vYmlsZSI6Ijk5NzIzNjA2MDYiLCJleHBpcmVzIjoxNzc5MDIwOTg1MDcxfQ==.hheyv5gZTc/sxAoGLiZp/MiDxq8ebwRme0wR4y1bKso=',
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(function (response) {
                console.log(response.data);
                alert(response.data);
            })
            .catch(function (response) {
                console.log(response);
                alert("error " + response);
            });
    },
    dynamicSort: function(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
     }
    },

    onSortOrderClick:function () {
        var i = 0;
        var events = this.state.eventsStateJson;
        // var sortedArray = events.sort(this.dynamicSort("order"));
        var temp = [];

        for(i=0;i<events.length;i++) {
            temp.push(events[i]);
        }
        temp.sort(function (a, b) {
            return a["order"] < b["order"];
        });
        for(i=0;i<temp.length;i++) {
            console.log("order " + temp[i].order + " title " + temp[i].Event_strTitle);
        }
        // console.log(sortedArray);
       /* Array.prototype.sortBy = function(p) {
            return this.slice(0).sort(function(a,b) {
                return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
            });
        };
        var sortedArray = events.sortBy('order'); */

        console.log(temp);
        this.setState({eventsStateJson : temp});
        this.forceUpdate();

    },
    render: function()
    {
        var that =this;
        return(
            <div>
                <div style={{"paddingBottom":"20px","paddingTop":"30px","text-align":"center"}}>
                    <input type="button" onClick={this.onSubmitClick} value="Submit To Server"></input>
                    <input type="button" onClick={this.onSortOrderClick} value="Sort By Order"></input>
                </div>
                {this.state.eventsStateJson.map(function(object, i){
                    return <SingleMovieEvent item={object} key={i} onRatingChanged={that.onRatingChanged}
                                             onOrderChanged={that.onOrderChanged} />;
                })}
            </div>

        );
        /*<SingleEvent object={} />*/
    }

});


ReactDOM.render(<XmlParent/>, document.getElementById('main2'));
