wp-syntaxhighlighter-msbatchbrush
=================================

This is a WordPress plug-in which addes support for the syntax of "batch files"
which is used on Windows platform.


Installation
------------
1. Make a directory `syntaxhighlighter-msbatchbrush` under
   `{YourWordPressDir}/wp-content/plugins`.

2. Put the files below into the directory:
   - wp-syntaxhighlighter-msbatchbrush.php
   - shBrushMSBatch.js

3. Activate the plug-in on your WordPress admin.

Update History
--------------
### v0.0.4
- [add] Now special keywords such as "exist" which is regarded as keywords only if it its trailing after "if" will be properly highlighted.
- [mod] Changed to zlib/libpng license.

### v0.0.3 (2014-03-06)
- [add] Just created and published.
