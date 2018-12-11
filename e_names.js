/**************************************
 *  Author:         Kaixin Wu
 *  Date:           10/14/2018
 *  Description:    Ex4.9, pg. 192 of Sebesta
 * 
 * 
 *************************************/   
var list = new Array("Vicky", "Tony", "Ryan", "Mark", "Leila", "Joe");

 var output = e_names(list);  // function call
 document.write("There are " + output + " names in the list that end with either ie or y");

 function e_names(listOfNames) {
     var count = 0;

     for (var num = 0; num < listOfNames.length; num++)
     {
        searchie = listOfNames[num].search(/ie$/);
        searchy = listOfNames[num].search(/y$/);

        if(searchie > 0 || searchy > 0)
        {
            count++
        }
     }

     return count;
 }