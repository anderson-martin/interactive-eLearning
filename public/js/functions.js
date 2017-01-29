       /* Functions for the section four of page 2 were repetative and bulky. So, I outsourced theme here. */
       $(document).ready(function () {

           $(funcs4sectionFourth = function () {
               for (var i = 0; i < 4; i++) {
                   var neededAnswer;           
                   switch (i){
                       case 0:
                           neededAnswer = 0;
                           break;
                       case 1:
                           neededAnswer = 3;
                           break;
                       case 2:
                           neededAnswer = 1;
                           break;
                       case 3:
                           neededAnswer = 2;
                           break;
                   }
                   var bg_description = $("<div></div>", {
                       "class": "bg-description"
                   });
                   var plus_circle = $('<span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x white" aria-hidden="true"></i><i class="fa fa-plus-circle fa-stack-2x black"></i></span>');
                   var minus_circle = $('<div class="helper col-md-4 col-sm-4 col-xs-4"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x white" aria-hidden="true"></i>  <i class="fa fa-minus-circle fa-stack-2x red"></i></span></div>');
                   var helper = $("<div></div>", {
                       "class": "col-md-4 col-sm-4 col-xs-4"
                   });
                   var placeholder = $("<div></div>", {
                       "id": "placeholder" + i
                       , "class": "placeholder"
                   });
                   var retunedAnswer = $("<div></div>", {
                       "id": "retunedAnswer" + i
                       , "class": "retunedAnswer row"
                   }).hide();
                   var answer_x = $("<div></div>", {
                       "class": "col-md-6 col-sm-6 col-xs-6 left answer" + neededAnswer
                   });
                   if ((i === 1) || (i === 0)) {
                       var bg_placeholder = $("<div></div>", {
                           "class": "bg-placeholder"
                       }).append(placeholder).append($(retunedAnswer.append(helper.append(plus_circle)).append(answer_x)));
                   }
                   else {
                       var bg_placeholder = $("<div></div>", {
                           "class": "bg-placeholder"
                       }).append(placeholder).append($(retunedAnswer.append(helper.append(minus_circle)).append(answer_x)));
                   }
                   var verticalBar = $("<hr>", {
                       "class": "vertical"
                   });
                   var description = $("<div></div>", {
                       "class": "description desc" + i
                   });
                   var component_x = $("<div></div>", {
                       "id": "component" + i
                       , "class": "col-md-3 col-sm-12 col-xs-12 component droppable left"
                   }).append(verticalBar).append(bg_placeholder).append(bg_description.append(description));
                   $("#fourth").append(component_x);
               }
           });
           $(funs4answersRow = function () {
               for (var i = 0; i < 4; i++) {
                   var answer_x = $("<p></p>", {
                       "class": "answer" + i
                   });
                   var draggable = $("<div></div>", {
                       "id": "answer" + i
                       , "class": "draggable ui-widget-content answer-down center"
                   });
                   var bg_grey = $("<div></div>", {
                       "class": "bg-grey"
                   });
                   var bg_answer_down = $("<div></div>", {
                       "class": "bg-answer-down col-md-3 col-sm-12 col-xs-12"
                   })
                   $("#answersRow").append(bg_answer_down.append(bg_grey.append(draggable.append(answer_x))));
               }
           });

       });