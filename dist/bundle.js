!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=function(){var e=window.localStorage,t=JSON.parse(e.getItem("contacts")),n=document.querySelector("#contact-list");if(t){n.innerHTML='<div class="flex flex-wrap">';var o=document.createElement("ul");t.forEach(function(e){var t=document.createElement("li");o.classList+="bg-white text-xs p-3",t.id=e.id,t.classList+="p-2 border border-teal rounded flex flex-wrap mb-2 bg-grey-lightest",t.innerHTML='\n                        <div class= "w-full flex items-stretch md:w-1/3 h-2/3 pr-5 border-r border-grey-light">\n                            <div class="self-start flex-1" id="'+e.id+'">\n                                <div class="image">\n                                <img src="avatar1.png" />\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class= "w-full md:w-2/3 pl-5 pt-1">\n                            <div class="content">\n                                <h1 class="pb-3 pt-1 text-30xl font-semibold border-b border-grey-light">'+e.name+'</h1>\n                                <h2 class="pt-1 text-lg font-semibold"> '+e.company+'</h2>\n                                <p class="p-2"> '+e.notes+"</p>\n                                "+e.email+' |\n                                <a href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+'</a>\n                                <button class="delete-contact" onclick="deleteContact('+e.id+')" style="padding: 0.5rem; border-color: #b8c2cc; margin-block-right: 1rem; background-color: white">Delete</button>\n                                <button class="edit-contact" onclick="editContact('+e.id+')" style="padding: 0.5rem; border-color: #b8c2cc; margin-block-right: 1rem; background-color: white">Edit</button>\n                            </div>\n                        </div>\n                    </div>\n                ',o.appendChild(t)}),n.appendChild(o)}else n.innerHTML='<p class="text-2xl text-center">You have no contacts in your address book</p>'},r=function(){document.getElementById("div-input-form").style.display="none"};document.addEventListener("DOMContentLoaded",function(){o(),r();var e=document.getElementById("add-contact");e.addEventListener("click",function(t){t.preventDefault(),document.getElementById("div-input-form").style.display="block",e.style.display="none"},!1);var t=document.querySelector("#input_form");t.addEventListener("submit",function(n){n.preventDefault();var l=window.localStorage,i=JSON.parse(l.getItem("contacts"))||[],c=t.elements,a=c.name,d=c.email,s=c.phone,u=c.company,p=c.notes,m=c.twitter,f={id:Date.now(),name:a.value,email:d.value,phone:s.value,company:u.value,notes:p.value,twitter:m.value};console.log("Saving the following contact: "+JSON.stringify(f)),i.push(f),l.setItem("contacts",JSON.stringify(i)),document.getElementById("input_form").reset(),o(),r(),e.style.display="block"}),document.getElementById("cancel").addEventListener("click",function(t){t.preventDefault(),document.getElementById("input_form").reset(),r(),e.style.display="block"},!1)})}]);