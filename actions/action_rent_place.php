<?php 
    include_once('../includes/session.php');
    include_once('../database/db_reservations.php');
    include_once('../database/db_places.php');

    //Calculate price
    $price_per_night = get_place_info($_POST['place_id'])['price'];
    $check_in = $_POST['check_in'];
    $check_out = $_POST['check_out'];
    $time_diff = strtotime($check_out) - strtotime($check_in);

    $num_days = round($time_diff / (86400)); // 86,400 = 60 * 60 * 24

    $price = $num_days *  $price_per_night * $_POST['num_people'];

    $reservation['check_in'] = $check_in;
    $reservation['check_out'] = $check_out;
    $reservation['price'] = $price;
    $reservation['num_people'] = $_POST['num_people'];
    $reservation['tourist'] = $_POST['tourist'];
    $reservation['place_id'] = $_POST['place_id'];

    try {

        add_reservation($reservation);

    } catch (PDOException $e) {

        die($e->getMessage());
    }

    header('Location: ../pages/home.php');

?>