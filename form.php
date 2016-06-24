<?php
require 'head.php';
?>

<body>
<h1>3 times X</h1>
<form method="get" action="show.php">
<div id="main_config" x_count="0">
</div>


<div id="advanced_config">
<div id="advanced_expander">Advanced configurations

<svg width="18" height="10">
<line x1="1" y1="1" x2="9" y2="9"/>
<line x1="17" y1="1" x2="9" y2="9"/>
</svg></div>

<div id="advanced_content">
<div id="left">
<div class="inputrow"><label>Number of x:s</label><input name="x_count" type="number" min="1" max="9" value="3"></div>
<div class="inputrow"><label>Optional header:</label><input name="header" type="text"></div>
</div>
<div id="right">
<div class="inputrow"><input name="show_names" type="checkbox" checked><label>Show names</label></div>
<div class="inputrow"><input name="enable_sound" type="checkbox" checked><label>Enable sound</label></div>
</div></div></div>


<div id="submit_row">
<button>Open in this window</button>
<button>Open in a new window</button>
</div>

</form>

<script src="js/form.js"></script>
</body>
