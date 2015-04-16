/*!
 * {PROJECT NAME} Application & User Interface Enhancements.
 * -----------------------------------------------------------------------------
 * @version 1.0.0
 * @author  {AUTHOR}
 */

// Declare squishable vars
var TRUE = true, 
    FALSE = false, 
    NULL = null, 
    UNDEFINED,

    // Protect namespacing
    TS = TS || {};

// Extend application object
TS.events = TS.events || {};
TS.library = TS.library || {};

// Build application
$.extend(
    TS.events, 
    {
        click_external : function(e) {
            window.open(this.href);
            return false;
        }
    }  
);

$.extend(
    TS.library, 
    {
        throttle : function(fn, delay) {
            var timer = null;
            return function () {
                var context = this, args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function() {
                    fn.apply(context, args);
                }, delay);
            }
        }
    }
);

$(function() {
    var $body = $('body');

    $body
         // Bind external link click-handler
        .on('click', 'a.external', TS.events.click_external);

    // Initialise external links, amending title
    $('a.external')
        .each(function(k,v) {
            $(v).attr('title', function() { return v.title + ' (Opens in a new window)' });
        });
});
