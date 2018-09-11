html - made up of elements that make up your webpage 
Element = <tagname>Content goes here...</tagname>
<!DOCTYPE>
<html> = root element
<head> = contains meta info 
<title> = specifies title 
<body> = visible page content

Leaving Comments in HTML
control + / 
<!-- this is a comment -->

lorem30 = makes up 30 random words

<strong>TEXT<strong> = bolds text
<em>TEXT<em> = italic
<mark>TEXT<mark> = Highlight text
<del> cross out
<ins> underline

LISTS
ordered lists 

unordered lists

span is something you want to go back into
div seperates the text 

cd frontEndNotes/ to get back into the folder and feature that you want to get to 

attributes are always defined in the open tag

<h2 style="color:red">Summary</h2> to change color of font

   <label for="MJ">MJ</label>                           for using RADIO buttons
    <input type="radio" id="MJ" placeholder="MJ">
    <label for="LBJ">LBJ</label>
    <input type="radio" id="LBJ" placeholder="LBJ">
    <label for="KB">KB</label>
    <input type="radio" id="KB" placeholder="KB">

   <label for="FavPlayer">Who is Your Favorite Player?</label>                   for DROPDOWNS
        <select name="FavPlayer" id="FavPlayer">
            <option value="MJ">MJ</option>  
            <option value="LBJ">LBJ</option>
            <option value="KB">KB</option>
        </select>

<label for="Thoughts">What are your thoughts on this discussion?</label>    FOR A TEXT BOX 
 <textarea name="Thoughts" id="Thoughts"></textarea><br><br>

<label for="Color">Color</label>
        <input type="Color" name="Color" id="Color"><br><br>       FOR USER TO PICK A COLOR

 <label for="resume">Upload your resume</label>
        <input type="file" name="resume" id="resume" multiple><br><br>       FOR USER BEING ABLE TO UPLOAD A FILE OR FILES

<input type="range" min="1" max="10" step="1">    TO INSERT A RANGE BAR

<label for="search">Search</label>                                          TO INSERT A SEARCH FIELD
        <input type="search" name="search" id="search"> <br><br>

        ctrl+c   is for returning  back to terminal