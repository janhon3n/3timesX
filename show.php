<?php
require 'head.php';

echo '<div id="xShows" xcount="'.count($_GET['xInput']).'">';
foreach($_GET['xInput'] as $xInput){
	echo '<div class="xShow">
	<svg viewBox="0 0 100 60">
	<line x1="10" y1="10" x2="90" y2="50"/>
	<line x1="10" y1="50" x2="90" y2="10"/>
	</svg>
	'.$xInput.'</div>';
}
echo '</div>';
?>


<audio id="soundfx">
<source src="soundfx.mp3" type="audio/mpeg">
</audio>
<script src="js/show.js"></script>