/* functions in this file, make some components responsive */

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
});