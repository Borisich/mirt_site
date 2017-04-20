<?php
	  if (isset($_POST))
		{
			$message = $_POST['name'] . " " . $_POST['email'] . " " . $_POST['phone'] . " " . $_POST['comment'] . " " . $_POST['productsList'];
      mail('iv.xromov@mail.ru', 'Mirt Order', $message);
		}
?>
