<?php
	  if (isset($_POST))
		{
			$message = "Имя: " . $_POST['name'] . "\nПочта: " . $_POST['email'] . "\nТелефон: " . $_POST['phone'] . "\nКомментарий: " . $_POST['comment'] . "\nСписок товаров: " . $_POST['productsList'] . "\nОбщая стоимость: " . $_POST['totalPrice'];
      mail('iv.xromov@mail.ru', 'Mirt Order', $message);
		}
?>
