<?php if (!defined( 'FW' )) die('Forbidden');

$options = array(
    'main' => array(
        'type' => 'box',
        'title' => __('Testing Options', '{domain}'),
        'options' => array(
            'body-color' => array(
                'type' => 'color-picker',
                'label' => __('Body Color', '{domain}'),
                'value' => '#ADFF2F',
            ),
        ),
    ),
);
