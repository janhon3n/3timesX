<?php
require 'head.php';
?>

<body>
<h1>3 times X</h1>
<form method="get" action="show.php">
Number of judges: <input name="xCount" id="xCount" min="1" max="9" type="number" value="3">
<div id="xInputs" xCount="0">
</div>

<input type="submit" class="submitLink" new_window="0" value="Open in this window">
<input type="submit" class="submitLink" new_window="1" value="Open in a new window">

</form>

<script src="js/form.js"></script>
</body>
