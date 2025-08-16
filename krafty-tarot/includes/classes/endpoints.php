<?php
namespace business;

Class Endpoints {
  public static function init() {
    add_action('rest_api_init', array(self::class, 'add_contact_form'));
  }

  public static function add_contact_form() {
    register_rest_route('business/v1', 'forms/contact', array(
      'methods' => 'POST',
      'callback' => function ($request) {
        $to = $request->get_param('to');
        $subject = $request->get_param('subject');
        $fullName = $request->get_param('fullname');
        $email = $request->get_param('email');

        $message = '
          Name: '. $fullName .'
          Email: '. $email .'
          -------------------------
          '. $request->get_param('message') .'
        ';

        $headers = array('From: '. $request->get_param('from-name') .' <'. $request->get_param('from-email') .'>');
        $headers = implode( PHP_EOL, $headers );

        $sent = wp_mail($to, $subject, $message, $headers);

        if ($sent) {
          return array(
            'status' => 'ok',
            'success' => true,
            'message' => 'I got your message!',
          );
        } else {
          return array(
            'status' => 'error',
            'success' => false,
            'message' => 'Oops. There was a problem sending your message.',
          );
        }
      }
    ));
  }
}
Endpoints::init();
