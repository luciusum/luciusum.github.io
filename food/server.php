<?php
$_POST = json_decode(file_get_contents("php://input"),  true);
echo var_dum($_POST);