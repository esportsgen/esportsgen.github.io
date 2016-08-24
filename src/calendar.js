var formatGoogleCalendar=function(){"use strict";var a,b=function(b){var d=[];a=b,jQuery.getJSON(b.calendarUrl,function(a){a.items.forEach(function(b){b&&b.hasOwnProperty("status")&&"cancelled"!==b.status&&d.push(b)}),d.sort(c).reverse();var j,f=0,g=[],h=[],i=jQuery(b.upcomingSelector);b.upcomingTopN===-1&&(b.upcomingTopN=d.length),b.upcoming===!1&&(b.upcomingTopN=0);for(j in d)h.push(d[j]);h.reverse();for(j in h)f<b.upcomingTopN&&(g.push(h[j]),f++);for(j in g)i.append(e(g[j],b.format))})},c=function(a,b){return new Date(a.start.dateTime||a.start.date).getTime()-new Date(b.start.dateTime||b.start.date).getTime()},d=function(a,b){var d,c={};for(d in a)c[d]=a[d];for(d in b)c[d]=b[d];return c},e=function(a,b){var l,c=f(a.start.dateTime||a.start.date),d=f(a.end.dateTime||a.end.date),e="undefined"!=typeof a.end.date,g=m(c,d,e),h="<tr>",i=a.summary||"",j=a.description||"",k=a.location||"";for(l=0;l<b.length;l++){b[l]=b[l].toString();var n=Math.floor(Date.now()/1e3),o="",p=Math.round(new Date(a.start.dateTime).getTime()/1e3),q=Number(p+10800);if(n>p&&q>n&&(o='<i class="fa fa-circle" aria-hidden="true"></i> '),"*summary*"===b[l]){if(j){var r,s;switch(j){case"CS:GO":r='<td class="imagen"><img src="https://4.bp.blogspot.com/-UVX2aKwxFTI/V73JrIPcENI/AAAAAAAAAkg/7EIv6YZ5pmU519MnATa1LR-OFbH0To_LQCLcB/s1600/csgo.png" alt="Eventos de CS:GO"/></td>',s="";break;case"Twitch":r='<td class="imagen"><img src="https://2.bp.blogspot.com/-MvcYo06uRLU/V73LNbaWytI/AAAAAAAAAks/yq-lYtPV50kJh73aBGyN1NeCb9z9fy4gQCLcB/s1600/twitch.png" alt="Stream en Twitch"/></td>',s="";break;default:r="",s=' colspan="2" '}}h=k?h.concat(r+"<td"+s+'><span class="informacion">'+o+'<a href="'+k+'" target="_blank" rel="nofollow">'+i+"</a></span><br/>"):h.concat(r+'<td><span class="informacion">'+o+i+"</span><br/>")}else"*date*"===b[l]&&(h=h.concat('<span class="fecha">'+g+"</span></td>"))}return h+"</tr>"},f=function(a){return a=new Date(a),[a.getDate(),a.getMonth(),a.getFullYear(),a.getHours(),a.getMinutes()]},g=function(a){var b=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Deciembre"];return b[a]},h=function(b,c){var d="";a.sameDayTimes&&(d=n(b)==n(c)?", "+n(b):", de "+n(b)+" a "+n(c));var e=!1;if(e===!0){var f=b[1];return f<10&&(f="0"+f),f=Number(f)+1,b[0]+"-"+f+"-"+b[2]+d}return b[0]+" "+g(b[1])+" "+b[2]+d},i=function(a){return g(a[1])+" "+a[0]+", "+a[2]},j=function(a,b){return g(a[1])+" "+a[0]+"-"+b[0]+", "+a[2]},k=function(a,b){return g(a[1])+" "+a[0]+"-"+g(b[1])+" "+b[0]+", "+a[2]},l=function(a,b){return g(a[1])+" "+a[0]+", "+a[2]+"-"+g(b[1])+" "+b[0]+", "+b[2]},m=function(a,b,c){var d="";return d=a[0]===b[0]?a[1]===b[1]?a[2]===b[2]?h(a,b):l(a,b):a[2]===b[2]?k(a,b):l(a,b):a[1]===b[1]?a[2]===b[2]?c?i(a):j(a,b):l(a,b):a[2]===b[2]?k(a,b):l(a,b)},n=function(a){var b="",c=a[3],d=a[4];return 0===c&&(c=12),d=(d<10?"0":"")+d,b=c+":"+d};return{init:function(a){var c={calendarUrl:"https://www.googleapis.com/calendar/v3/calendars/esportsgen@gmail.com/events?key=AIzaSyA6JqB9jOlVOnS0H8fHmzLPWOvgZLW734s",upcoming:!0,sameDayTimes:!0,upcomingTopN:-1,upcomingSelector:"#eventos",format:["*summary*","*date*","*description*"]};c=d(c,a),b(c)}}}();
