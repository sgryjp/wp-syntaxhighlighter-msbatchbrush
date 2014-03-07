// Written by Suguru YAMAMOTO, http://sgry.jp
// License: zlib/libpng license

SyntaxHighlighter.brushes.MSBatch = function()
{
    var keywords = 'assoc attrib bcdedit break cacls call cd chcp chdir chkdsk chkntfs cls cmd '
                   + 'color comp compact convert copy date del dir diskcomp diskcopy diskpart '
                   + 'doskey driverquery echo echo. endlocal erase exit fc find findstr for '
                   + 'format fsutil ftype goto gpresult graftabl icacls if label md mkdir mklink '
                   + 'mode more move openfiles path pause popd print prompt pushd rd recover '
                   + 'ren rename replace rmdir robocopy sc schtasks set setlocal shift shutdown '
                   + 'sort start subst systeminfo taskkill tasklist time title tree type ver '
                   + 'verify wmic xcopy';
    var spfiles = 'AUX COM0 COM1 COM2 COM3 COM4 COM5 COM6 COM7 COM8 COM9 '
                  + 'CON LPT0 LPT1 LPT2 LPT3 LPT4 LPT5 LPT6 LPT7 LPT8 LPT9 '
                  + 'NUL PRN';

    this.regexList = [
            { regex: /^(\s*REM|::).*$/gmi,                          css: 'comments' },
            { regex: /^@echo off/gmi,                               css: 'color1' },
            { regex: /%\w+(:[^%]+)?%/gm,                            css: 'variable' },
            { regex: /!\w+(:[^%]+)?!/gm,                            css: 'variable' },
            { regex: /%~?[0-9\*]/gm,                                css: 'variable' },
            { regex: /%%?~?[fdpnxsatz]*[0-9a-zA-Z]/gm,              css: 'variable' },
            { regex: /^:\w+/gm,                                     css: 'color2' },
            { regex: /if\s+(not\s+)?(errorlevel|exist)/gmi,         css: 'keyword' },
            { regex: /if\s+not/gmi,                                 css: 'keyword' },
            { regex: /if\s+(cmdextversion|defined)/gmi,             css: 'keyword' },
            { regex: new RegExp(this.getKeywords(spfiles), 'gmi'),  css: 'keyword' },
            { regex: new RegExp(this.getKeywords(keywords), 'gmi'), css: 'keyword' }
    ];
}

SyntaxHighlighter.brushes.MSBatch.prototype     = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.MSBatch.aliases       = ['msbatch', 'batch', 'bat', 'cmd'];
