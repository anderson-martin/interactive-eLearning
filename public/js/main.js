$(document).ready(function () {
    $(myWindowSize = function () {
        var myModal = document.getElementById("myModal");
        var questionArea = document.getElementById("questionArea");
        var answerArea = document.getElementById("answerArea");
        var upperPart = document.getElementById("upperPart");
        var btnArea = document.getElementById("btnArea");
        var widthWindow = window.innerWidth;
        var heightWindow = window.innerHeight;
        var modalSize, freeHeight , questionAreaHeight;
        resizeModal();
        window.addEventListener("resize", getNewSize);

        function getNewSize() {
            widthWindow = window.innerWidth;
            heightWindow = window.innerHeight;
            resizeModal();
        }

        function resizeModal() {
            if (widthWindow >= 768) {
                modalSize = heightWindow * 0.75;
            }
            else {
                modalSize = heightWindow;
                /*
                myModal.style.height = heightWindow + "px";
                myModal.style.top = "0px";
                myModal.style.left = "0px";
                questionArea.style.height = heightWindow / 2 + "px";
                answerArea.style.height = heightWindow / 2 + "px";
                */
            }
            freeHeight = (heightWindow - modalSize) / 2;
            myModal.style.height = modalSize + "px";
            myModal.style.top = freeHeight + "px";
            myModal.style.left = "0px";
            questionAreaHeight = modalSize / 2;
            questionArea.style.height = questionAreaHeight + "px";
            answerArea.style.height = modalSize / 2 -40 +  "px";
            upperPart.style.height = questionAreaHeight - 80 + "px";
            btnArea.style.height = "40px"
        }
    });
    var fillPage = function () {
        var choices = getContent().choices;
        var descriptions = getContent().descriptions;
        var funcs4SectionFourth = getFuncs().funcs4SectionFourth;
        var headerP2 = getContent().headerP2;
        var headerP1 = getContent().headerP1;
        /* due to hoisting, variables are being declared at the beginning but they dont instantiate. so, how comes that we can use function expression like following:
                
                func();
                function(){};
                
                it shouldnt be possible! */
        /*fillFuncs4SectionFourth();*/
        fillDescriptions();
        fillAnswers();
        fillHeaderP2();
        fillHeaderP1();

        function fillAnswers() {
            $(".answer0").text(choices[0]);
            $(".answer1").text(choices[1]);
            $(".answer2").text(choices[2]);
            $(".answer3").text(choices[3]);
        };

        function fillDescriptions() {
            $(".desc0").prepend(descriptions[0]);
            $(".desc1").prepend(descriptions[1]);
            $(".desc2").prepend(descriptions[2]);
            $(".desc3").prepend(descriptions[3]);
        };

        function fillHeaderP2() {
            $(".header0p2").text(headerP2[0]);
            $(".header1p2").text(headerP2[1]);
            $(".header2p2").text(headerP2[2]);
            $(".header3p2").text(headerP2[3]);
        }

        function fillHeaderP1() {
            $(".header0p1").text(headerP2[0]);
            $(".header1p1").text(headerP2[1]);
            $(".header2p1").text(headerP2[2]);
        }

        function fillFuncs4SectionFourth() {
            $("#fourth").append(funcs4SectionFourth[0]);
            $("#fourth").append(funcs4SectionFourth[1]);
            $("#fourth").append(funcs4SectionFourth[2]);
            $("#fourth").append(funcs4SectionFourth[3]);
        }
    };
    var DragDropping = function () {
        $(".draggable").draggable({
            revert: "invalid"
        });
        $("#component0").droppable({
            accept: '#answer0'
            , drop: function () {
                myVars.index = 0;
                dialogsLogic().starter();
            }
        });
        $("#component1").droppable({
            accept: '#answer1'
            , drop: function () {
                myVars.index = 1;
                dialogsLogic().starter();
            }
        });
        $("#component2").droppable({
            accept: '#answer2'
            , drop: function () {
                myVars.index = 2;
                dialogsLogic().starter();
            }
        });
        $("#component3").droppable({
            accept: '#answer3'
            , drop: function () {
                myVars.index = 3;
                dialogsLogic().starter();
            }
        });
    };
    $(start = function () {
        var component0 = $("<div></div>", {
            "class": "col-md-3 col-sm-12 col-xs-12 component droppable left"
            , id: "component5"
        });
        /* ?? question: why following jquery doesnt instantiate? 
                $("#fourth").append(component0);
                                $("#component").append(component0);
                console.log('this is component5' + component0);
*/
        /*if i put content of the start functions directly in  $(document).ready(function (), it doesnt work, why? They should all be loaded!*/
        fillPage();
        DragDropping();
    });
    //?? why the current structure works fine? It shouldn't! Following functions are defined within scope of the anon function (initialized after document ready). And these functions don#t have global scope (havent attached them with window object). so how comes that i can call them easily and eveything works fine?
    $(myVars = {
        i: 0
        , index: NaN
        , answered: 0
    });
    $(dialogsLogic = function () {
        var BtnIsOff = true;
        var dialogs = getContent().dialogs;
        var starter = function () {
            document.getElementById("answer" + myVars.index).style.display = "none";
            dialogsLogic().runModal();
            myVars.i = 0;
            dialogsLogic().showQuestion();
        };
        var runModal = function () {
            // Get the modal
            var modal = document.getElementById('myModal');
            // Get the button that opens the modal
            var btn = document.getElementById("myBtn");
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            // When the user clicks the button, open the modal 
            modal.style.display = "block";
        };
        var showTrue = function () {
            document.getElementById("trueAnswer").style.display = "block";
            document.getElementById("nextBtn-dialog").style.display = "block";
            document.getElementById("trueAnswer").innerHTML = dialogs[myVars.index].trueAnswers[myVars.i];
            turnOffBtns();
        };
        var showFalse = function () {
            document.getElementById("wrongAnswer").style.display = "block";
            document.getElementById("nextBtn-dialog").style.display = "block";
            document.getElementById("wrongAnswer").innerHTML = dialogs[myVars.index].wrongAnswers[myVars.i];
            turnOffBtns();
        };
        var turnOnBtns = function () {
            document.getElementById("falseBtn").style.display = "block";
            document.getElementById("trueBtn").style.display = "block";
            document.getElementById("textInBetween").style.display = "block";
        };
        var turnOffBtns = function () {
            document.getElementById("falseBtn").style.display = "none";
            document.getElementById("trueBtn").style.display = "none";
            document.getElementById("textInBetween").style.display = "none";
        };
        var showQuestion = function () {
            document.getElementById("question").innerHTML = dialogs[myVars.index].questions[myVars.i];
        };
        var nextPage = function () {
            myVars.i++;
            showQuestion();
            turnOnBtns();
            document.getElementById("nextBtn-dialog").style.display = "none";
            document.getElementById("trueAnswer").innerHTML = "";
            document.getElementById("wrongAnswer").innerHTML = "";
            if (myVars.i === 3) {
                myVars.answered++;
                document.getElementById('myModal').style.display = "none";
                document.getElementById("placeholder" + myVars.index).style.display = "none";
                document.getElementById("retunedAnswer" + myVars.index).style.display = "";
                if (myVars.answered === 4) {
                    document.getElementById("nextBtnP2").style.display = "block";
                    console.log("button should appear");
                    myVars.answered = 0;
                }
            }
        };
        return {
            showTrue: showTrue
            , showFalse: showFalse
            , showQuestion: showQuestion
            , nextPage: nextPage
            , runModal: runModal
            , starter: starter
        };
    });
});