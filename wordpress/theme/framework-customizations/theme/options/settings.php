<?php if (!defined( 'FW' )) die('Forbidden');

$options = array(
    'body-color' => array(
        'type' => 'color-picker',
        'label' => __('Body Color', '{domain}'),
        'value' => '#ADFF2F',
    ),
    'body-phone' => array(
        'type' => 'text',
        'label' => __('Body phone', '{domain}'),
        'value' => '+39043234324',
    ),
    
        'map-kim' => array(
        'type'  => 'map',
        'value' => array(
            'coordinates' => array(
                'lat'   => -34,
                'lng'   => 150,
            )
        ),
        'attr'  => array( 'class' => 'custom-class', 'data-foo' => 'bar' ),
        'label' => __('Label', '{domain}'),
        'desc'  => __('Description', '{domain}'),
        'help'  => __('Help tip', '{domain}'),
    ),
);
