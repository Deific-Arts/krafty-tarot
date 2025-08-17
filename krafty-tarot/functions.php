<?php
namespace business;

use business\Config as Config;

if (!class_exists('\business\Theme')) {
  class Theme {
    private static $instance = null;

    public static function get_instance() {
      if (self::$instance === null) {
        self::$instance = new self;
      }

      return self::$instance;
    }

    private function __construct() {
      $classes = preg_grep('/^([^.])/', scandir(get_template_directory() . '/includes/classes'));
      $adminClasses = preg_grep('/^([^.])/', scandir(get_template_directory() . '/includes/admin'));
      $postTypes = preg_grep('/^([^.])/', scandir(get_template_directory() . '/includes/posts'));

      // includes
      foreach ($classes as $class) {
        require_once(get_template_directory() . '/includes/classes/' . $class);
      }

      foreach ($adminClasses as $adminClass) {
        require_once(get_template_directory() . '/includes/admin/' . $adminClass);
      }

      foreach ($postTypes as $postType) {
        require_once(get_template_directory() . '/includes/posts/' . $postType);
      }

      require_once(get_template_directory() . '/blocks/blocks.php');


      // disable admin bar
      add_filter('show_admin_bar', '__return_false');

      // enqueue scripts and styles
      add_action('wp_enqueue_scripts', array($this, 'add_assets'));
      add_action('admin_enqueue_scripts', array($this, 'add_assets_admin'));

      // enqueue fonts
      add_action('wp_enqueue_scripts', array($this, 'add_fonts'));

      // meta info
      add_action('wp_head', array($this, 'add_meta_tags'));

      // colors
      add_action('wp_head', array($this, 'add_theme_colors'));

      // body classes
      add_filter('body_class', array($this, 'add_body_classes'));

      // menu
      // register_nav_menu('header', 'Header');
      register_nav_menu('drawer', 'Drawer');
      register_nav_menu('top-nav-left', 'Top Nav Left');
      register_nav_menu('top-nav-right', 'Top Nav Right');
      // register_nav_menu('useful-links', 'Useful Links');
      register_nav_menu('legal', 'Legal');
      register_nav_menu('footer-social-media', 'Footer Social Media');

      // title tag
      add_theme_support('title-tag');

      // thumbnail
      add_theme_support('post-thumbnails');

      // align
      add_theme_support('align-wide');

      // post support types
      add_post_type_support('page', CONFIG::POST_SUPPORT_TYPES['page']);

      // svg upload support
      add_filter('upload_mimes', array($this, 'add_svg_upload'), 10, 1);
    }

    public static function add_assets() {
      // enqueue font end bundles
      wp_enqueue_style('bundle-css', get_theme_file_uri('/build/frontend.css'), array(), null);
      wp_enqueue_script('bundle-js', get_theme_file_uri('/build/frontend.js'), array(), null, true);
      wp_enqueue_style('parent-css', get_template_directory_uri() . '/style.css');
    }

    public static function add_assets_admin() {
      wp_enqueue_style('admin-css', get_theme_file_uri('/build/admin.css'));
      wp_enqueue_script('admin-js', get_theme_file_uri('/build/admin.js'), array('wp-blocks', 'wp-block-editor', 'wp-components', 'wp-element'), false, true);
    }

    public static function add_fonts() {
      wp_enqueue_style( 'spectral', 'https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap', false );
    }

    public static function add_meta_tags() {
      $siteLogoID = get_theme_mod('site-logo');
      $siteLogoURL = wp_get_attachment_url($siteLogoID);

      echo '<meta name="author" content="Deific Arts, LLC">';
      echo '<meta name="viewport" content="width=device-width, initial-scale=1">';
      echo '<base href="/">';
      echo '<link rel="icon" href="'. $siteLogoURL .'">';
      echo '<meta name="description" content="'. get_bloginfo('description') .'">';
      echo '<meta name="theme-color" content="#2557a7"/>';
      echo '<meta name="mobile-web-app-capable" content="yes">';
      echo '<meta name="application-name" content="'. get_bloginfo('name') .'">';
      echo '<meta name="apple-mobile-web-app-capable" content="yes">';
      echo '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">';
      echo '<meta name="apple-mobile-web-app-title" content="'. get_bloginfo('name') .'">';
      echo '<link rel="apple-touch-icon" href="'. get_theme_file_uri('/images/manifest/icon-48x48.png') .'">';
      echo '<link rel="apple-touch-icon" sizes="72x72" href="'. get_theme_file_uri('/images/manifest/icon-72x72.png') .'">';
      echo '<link rel="apple-touch-icon" sizes="96x96" href="'. get_theme_file_uri('/images/manifest/icon-96x96.png') .'">';
      echo '<link rel="apple-touch-icon" sizes="144x144" href="'. get_theme_file_uri('/images/manifest/icon-144x144.png') .'">';
      echo '<link rel="apple-touch-icon" sizes="192x192" href="'. get_theme_file_uri('/images/manifest/icon-192x192.png') .'">';
    }

    public static function add_theme_colors() {
      $pageWidth = get_theme_mod('site-page-width') ? get_theme_mod('site-page-width') : Config::PAGE_WIDTH;

      echo '
        <style>
          :root {
            --page-width: '. $pageWidth .';
          }
        </style>
      ';
    }

    public static function add_body_classes($classes) {
      global $post;

      $slug = $post->post_name;
      $classes[] = Config::SLUG;
      $classes[] = Config::SLUG . '--' . $slug;

      return $classes;
    }

    public static function add_svg_upload($upload_mimes) {
      $upload_mimes['svg'] = 'image/svg+xml';
      $upload_mimes['svgz'] = 'image/svg+xml';
      return $upload_mimes;
    }
  }
}
Theme::get_instance();
