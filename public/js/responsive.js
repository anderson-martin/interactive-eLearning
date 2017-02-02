/* functions in this file, make some components responsive */
$(document).ready(function () {
    $(responsive_modal = function () {
        var myModal = document.getElementById("myModal");
        var questionArea = document.getElementById("questionArea");
        var answerArea = document.getElementById("answerArea");
        var upperPart = document.getElementById("upperPart");
        var btnArea = document.getElementById("btnArea");
        var widthWindow = window.innerWidth;
        var heightWindow = window.innerHeight;
        var modalSize, freeHeight, questionAreaHeight;
        resize_modal();
        window.addEventListener("resize", getNewSize);

        function getNewSize() {
            widthWindow = window.innerWidth;
            heightWindow = window.innerHeight;
            resize_modal();
        }

        function resize_modal() {
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
            answerArea.style.height = modalSize / 2 - 40 + "px";
            upperPart.style.height = questionAreaHeight - 80 + "px";
            btnArea.style.height = "40px"
        }
    });
    $(responsive_bg_descriptions = function () {
        var widthWindow = window.innerWidth;
        var heightWindow = window.innerHeight;
        var bg_descriptions = document.getElementsByClassName("bg-description");
        resize_bg_description();
        window.addEventListener("resize", getNewSize);

        function getNewSize() {
            widthWindow = window.innerWidth;
            heightWindow = window.innerHeight;
            resize_bg_description();
        }

        function resize_bg_description() {
            var bg_descriptionSize;
            if (widthWindow >= 768) {
                /* first loop is to fix resizing bug */
                for (var i = 0; i < bg_descriptions.length; i++) {
                    bg_descriptions[i].style.height = "100%";
                }
                bg_descriptionSize = findTallestColumn();
                for (var i = 0; i < bg_descriptions.length; i++) {
                    bg_descriptions[i].style.height = bg_descriptionSize + "px";
                }
            }
            else {
                for (var i = 0; i < bg_descriptions.length; i++) {
                    bg_descriptions[i].style.height = "";
                };
            }
        }

        function findTallestColumn() {
            var tallest;
            var allHeights = [];
            for (var i = 0; i < bg_descriptions.length; i++) {
                var height = bg_descriptions[i].clientHeight;
                allHeights.push(height);
            };
            tallest = Math.max(...allHeights);
            return tallest;
        }
    });
});