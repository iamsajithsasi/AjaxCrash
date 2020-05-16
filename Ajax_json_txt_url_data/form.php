<?php

echo "Processing...<br> ";
if(isset($_GET['name'])) {
    echo 'Get <br>';
    echo 'Your name is'.$_GET['name'];
}
if(isset($_POST['name'])) {
    echo 'Post <br>';
    echo 'Your name is'.$_POST['name'];
}