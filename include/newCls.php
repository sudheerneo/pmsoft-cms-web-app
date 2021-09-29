<?php
//error_reporting(0);
//ini_set('display_errors', 0);

class Person 
{
    var $name, $age, $gender;
    function __construct( $nm, $ag, $gn )
    {
        $this->name = $nm;
        $this->age = $ag;
        $this->gender = $gn;        
    }
    public function getInfo()
    {
        return "Hello ".$this->name.", you are ".$this->age." years old ".$this->gender.".";
    }

}  

echo "------------------ <b>Sql Commands Debugger</b> ------------------<br>";



?>