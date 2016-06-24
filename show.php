<?php
require 'head.php';

if(strlen($_GET['header']) > 0){
	echo '<h2>'.$_GET['header'].'</h2>';
}

echo '<div id="xShows" xcount="'.count($_GET['x_input']).'">';
foreach($_GET['x_input'] as $xInput){
	if(strlen($xInput) == 0){
		$xInput = '<span style="color:rgba(0,0,0,0);">_</span>';
	}
	echo '<div class="xShow">
	<svg viewBox="0 0 100 60">
	<line x1="10" y1="10" x2="90" y2="50"/>
	<line x1="10" y1="50" x2="90" y2="10"/>
	</svg>';
	if($_GET['show_names'] == 'on'){
		echo $xInput;
	}
	echo '</div>';
}
echo '</div>';
?>


<audio id="soundfx">
<source src="soundfx.mp3" type="audio/mpeg">
</audio>

<script src="js/show.js"></script>

<?php
if($_GET['enable_sound'] == 'on'){
	echo '<script src="js/sound.js"></script>';
}