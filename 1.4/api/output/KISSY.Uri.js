Ext.data.JsonP.KISSY_Uri({"tagname":"class","name":"KISSY.Uri","autodetected":{},"files":[{"filename":"uri.js","href":"uri.html#KISSY-Uri"}],"params":[{"tagname":"params","type":"String|KISSY.Uri","name":"uriStr","optional":true,"doc":"<p>Encoded uri string.</p>\n","html_type":"<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a>"}],"members":[{"name":"fragment","tagname":"property","owner":"KISSY.Uri","id":"property-fragment","meta":{}},{"name":"hostname","tagname":"property","owner":"KISSY.Uri","id":"property-hostname","meta":{}},{"name":"path","tagname":"property","owner":"KISSY.Uri","id":"property-path","meta":{}},{"name":"port","tagname":"property","owner":"KISSY.Uri","id":"property-port","meta":{}},{"name":"query","tagname":"property","owner":"KISSY.Uri","id":"property-query","meta":{}},{"name":"scheme","tagname":"property","owner":"KISSY.Uri","id":"property-scheme","meta":{}},{"name":"userInfo","tagname":"property","owner":"KISSY.Uri","id":"property-userInfo","meta":{}},{"name":"clone","tagname":"method","owner":"KISSY.Uri","id":"method-clone","meta":{}},{"name":"getFragment","tagname":"method","owner":"KISSY.Uri","id":"method-getFragment","meta":{}},{"name":"getHostname","tagname":"method","owner":"KISSY.Uri","id":"method-getHostname","meta":{}},{"name":"getPath","tagname":"method","owner":"KISSY.Uri","id":"method-getPath","meta":{}},{"name":"getPort","tagname":"method","owner":"KISSY.Uri","id":"method-getPort","meta":{}},{"name":"getQuery","tagname":"method","owner":"KISSY.Uri","id":"method-getQuery","meta":{}},{"name":"getScheme","tagname":"method","owner":"KISSY.Uri","id":"method-getScheme","meta":{}},{"name":"getUserInfo","tagname":"method","owner":"KISSY.Uri","id":"method-getUserInfo","meta":{}},{"name":"isSameOriginAs","tagname":"method","owner":"KISSY.Uri","id":"method-isSameOriginAs","meta":{}},{"name":"resolve","tagname":"method","owner":"KISSY.Uri","id":"method-resolve","meta":{}},{"name":"setFragment","tagname":"method","owner":"KISSY.Uri","id":"method-setFragment","meta":{"chainable":true}},{"name":"setHostname","tagname":"method","owner":"KISSY.Uri","id":"method-setHostname","meta":{"chainable":true}},{"name":"setPath","tagname":"method","owner":"KISSY.Uri","id":"method-setPath","meta":{"chainable":true}},{"name":"setPort","tagname":"method","owner":"KISSY.Uri","id":"method-setPort","meta":{"chainable":true}},{"name":"setQuery","tagname":"method","owner":"KISSY.Uri","id":"method-setQuery","meta":{"chainable":true}},{"name":"setScheme","tagname":"method","owner":"KISSY.Uri","id":"method-setScheme","meta":{"chainable":true}},{"name":"setUserInfo","tagname":"method","owner":"KISSY.Uri","id":"method-setUserInfo","meta":{"chainable":true}},{"name":"toString","tagname":"method","owner":"KISSY.Uri","id":"method-toString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-KISSY.Uri","short_doc":"Uri class for KISSY. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/uri.html#KISSY-Uri' target='_blank'>uri.js</a></div></pre><div class='doc-contents'><p>Uri class for KISSY.\nMost of its interfaces are same with window.location.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uriStr</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a> (optional)<div class='sub-desc'><p>Encoded uri string.</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fragment' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-property-fragment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-property-fragment' class='name expandable'>fragment</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>fragment such as '#!/test/2'. ...</div><div class='long'><p>fragment such as '#!/test/2'. aka hash</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-hostname' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-property-hostname' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-property-hostname' class='name expandable'>hostname</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>hostname such as 'docs.kissyui.com'. ...</div><div class='long'><p>hostname such as 'docs.kissyui.com'. aka domain</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-path' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-property-path' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-property-path' class='name expandable'>path</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>path such as '/index.htm'. ...</div><div class='long'><p>path such as '/index.htm'. aka pathname</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-port' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-property-port' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-property-port' class='name expandable'>port</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Port such as '8080' ...</div><div class='long'><p>Port such as '8080'</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-query' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-property-query' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-property-query' class='name expandable'>query</a> : <a href=\"#!/api/KISSY.Uri.Query\" rel=\"KISSY.Uri.Query\" class=\"docClass\">KISSY.Uri.Query</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Query object for search string. ...</div><div class='long'><p>Query object for search string. aka search</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-scheme' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-property-scheme' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-property-scheme' class='name expandable'>scheme</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>scheme such as 'http:'. ...</div><div class='long'><p>scheme such as 'http:'. aka protocol without colon</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-userInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-property-userInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-property-userInfo' class='name expandable'>userInfo</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>User credentials such as 'yiminghe:gmail' ...</div><div class='long'><p>User credentials such as 'yiminghe:gmail'</p>\n<p>Defaults to: <code>''</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clone' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> ) : <a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return a cloned new instance. ...</div><div class='long'><p>Return a cloned new instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFragment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-getFragment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-getFragment' class='name expandable'>getFragment</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Get fragment ...</div><div class='long'><p>Get fragment</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHostname' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-getHostname' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-getHostname' class='name expandable'>getHostname</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Return hostname ...</div><div class='long'><p>Return hostname</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-getPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-getPath' class='name expandable'>getPath</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Get path ...</div><div class='long'><p>Get path</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-getPort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-getPort' class='name expandable'>getPort</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Get port ...</div><div class='long'><p>Get port</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getQuery' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-getQuery' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-getQuery' class='name expandable'>getQuery</a>( <span class='pre'></span> ) : <a href=\"#!/api/KISSY.Uri.Query\" rel=\"KISSY.Uri.Query\" class=\"docClass\">KISSY.Uri.Query</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Get query ...</div><div class='long'><p>Get query</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Uri.Query\" rel=\"KISSY.Uri.Query\" class=\"docClass\">KISSY.Uri.Query</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getScheme' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-getScheme' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-getScheme' class='name expandable'>getScheme</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get scheme part ...</div><div class='long'><p>Get scheme part</p>\n</div></div></div><div id='method-getUserInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-getUserInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-getUserInfo' class='name expandable'>getUserInfo</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Get user info ...</div><div class='long'><p>Get user info</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isSameOriginAs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-isSameOriginAs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-isSameOriginAs' class='name expandable'>isSameOriginAs</a>( <span class='pre'>other</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Judge whether two uri has same domain. ...</div><div class='long'><p>Judge whether two uri has same domain.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>other</span> : <a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-resolve' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-resolve' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-resolve' class='name expandable'>resolve</a>( <span class='pre'>relativeUri</span> ) : <a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The reference resolution algorithm.rfc 5.2\nreturn a resolved uri corresponding to current uri ...</div><div class='long'><p>The reference resolution algorithm.rfc 5.2\nreturn a resolved uri corresponding to current uri</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>relativeUri</span> : <a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>for example:\n     @example\n     this: 'http://y/yy/z.com?t=1#v=2'\n     'https:/y/' => 'https:/y/'\n     '//foo' => 'http://foo'\n     'foo' => 'http://y/yy/foo'\n     '/foo' => 'http://y/foo'\n     '?foo' => 'http://y/yy/z.com?foo'\n     '#foo' => http://y/yy/z.com?t=1#foo'</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFragment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-setFragment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-setFragment' class='name expandable'>setFragment</a>( <span class='pre'>fragment</span> ) : <a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Set fragment ...</div><div class='long'><p>Set fragment</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fragment</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setHostname' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-setHostname' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-setHostname' class='name expandable'>setHostname</a>( <span class='pre'>hostname</span> ) : <a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Set hostname ...</div><div class='long'><p>Set hostname</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hostname</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setPath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-setPath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-setPath' class='name expandable'>setPath</a>( <span class='pre'>path</span> ) : <a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Set path ...</div><div class='long'><p>Set path</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setPort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-setPort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-setPort' class='name expandable'>setPort</a>( <span class='pre'>port</span> ) : <a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Set port ...</div><div class='long'><p>Set port</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>port</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setQuery' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-setQuery' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-setQuery' class='name expandable'>setQuery</a>( <span class='pre'>query</span> ) : <a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Set query ...</div><div class='long'><p>Set query</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/KISSY.Uri.Query\" rel=\"KISSY.Uri.Query\" class=\"docClass\">KISSY.Uri.Query</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setScheme' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-setScheme' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-setScheme' class='name expandable'>setScheme</a>( <span class='pre'>scheme</span> ) : <a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Set scheme part ...</div><div class='long'><p>Set scheme part</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scheme</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setUserInfo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-setUserInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-setUserInfo' class='name expandable'>setUserInfo</a>( <span class='pre'>userInfo</span> ) : <a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Set user info ...</div><div class='long'><p>Set user info</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>userInfo</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Uri\" rel=\"KISSY.Uri\" class=\"docClass\">KISSY.Uri</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Uri'>KISSY.Uri</span><br/><a href='source/uri.html#KISSY-Uri-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Uri-method-toString' class='name expandable'>toString</a>( <span class='pre'>[serializeArray]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Serialize to string. ...</div><div class='long'><p>Serialize to string.\nSee rfc 5.3 Component Recomposition.\nBut kissy does not differentiate between undefined and empty.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serializeArray</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>whether append [] to key name when value 's type is array</p>\n<p>Defaults to: <code>true</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});