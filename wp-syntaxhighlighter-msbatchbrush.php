<?php
/*
Plugin Name: SyntaxHighlighter Evolved: MSBatch Brush
Description: Adds support for the language "MS batch" to the SyntaxHighlighter Evolved plugin.
Author: Suguru YAMAMOTO
Version: 0.0.4
Author URI: http://sgry.jp/
License: zlib/libpng license
*/

add_action( 'init', 'syntaxhighlighter_msbatch_regscript' );

add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_msbatch_addlang' );

function syntaxhighlighter_msbatch_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-msbatch',
                        plugins_url( 'wp-syntaxhighlighter-msbatchbrush/shBrushMSBatch.js' ),
                        array('syntaxhighlighter-core'),
                        '0.0.4' );
}

function syntaxhighlighter_msbatch_addlang( $brushes ) {
    $brushes['msbatch'] = 'msbatch';
    $brushes['batch'] = 'msbatch';
    $brushes['bat'] = 'msbatch';
    $brushes['cmd'] = 'msbatch';

    return $brushes;
}
?>
