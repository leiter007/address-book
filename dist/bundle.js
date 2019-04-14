!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var l=function(){var e=window.localStorage,t=JSON.parse(e.getItem("contacts")),n=document.querySelector("#contact-list");if(t){n.innerHTML='<div class="flex flex-wrap">';var l=document.createElement("ul");t.forEach(function(e){var t=document.createElement("li");l.classList+="bg-grey-lighter text-xs p-3",t.id=e.id,t.classList+="container mx-auto my-10 w-full max-w-sm content-center p-6 rounded-lg flex flex-wrap mb-6 bg-white",t.innerHTML='\n                <link rel="stylesheet" href="style.css">\n                    <div class= "w-full flex content-center items-stretch md:w-1/3 h-2/3 p-5">\n                        <div class="flex-1" id="'+e.id+'">\n                            <div class="content-center text-center">\n                                <svg xmlns="http://www.w3.org/2000/svg" class ="fill-current text-teal inline-block h-20 w-20" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"/></svg>\n                                <button class="delete-contact" onclick="deleteContact('+e.id+')" style="text-align: center; padding: 5px; margin: auto; display: inline-block; text-decoration: none; color: #B8C2CC">Delete</button>\n                                <button class="edit-contact" onclick="editContact('+e.id+')" style="text-align: center; padding: 5px; margin: auto; display: inline-block; text-decoration: none; color: #B8C2CC">Edit</button>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <div class= "self-center align-middle w-full p-3 md:w-2/3">\n                        <div class="self-center content-center align-middle">\n                            <h1 class="pb-1 text-30xl font-semibold border-b border-teal ">'+e.name+'</h1>\n                            <h2 class="pt-1 pb-2 text-lg font-semibold"> '+e.company+'</h2>\n                            <p class="pt-1 text-sm"> '+e.phone+'</p>\n                            <p class="pt-1 pb-1 text-sm"> '+e.notes+'</p>\n                            <a class="pt-2 text-sm no-underline text-grey-darker hover:text-teal" href="mailto:'+e.email+'">'+e.email+'</a> |\n                            <a class="pt-2 text-sm no-underline text-grey-darker hover:text-teal" href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+"</a></p>\n                        </div>\n                    </div>\n\n                    </div>\n            ",l.appendChild(t)}),n.appendChild(l)}else n.innerHTML='<p class="text-2xl text-center">You have no contacts in your address book</p>'},o=function(){document.getElementById("div-input-form").style.display="none"};document.addEventListener("DOMContentLoaded",function(){l(),o();var e=document.getElementById("add-contact");e.addEventListener("click",function(t){t.preventDefault(),document.getElementById("div-input-form").style.display="block",e.style.display="none"},!1);var t=document.querySelector("#input_form");t.addEventListener("submit",function(n){n.preventDefault();var r=window.localStorage,i=JSON.parse(r.getItem("contacts"))||[],a=t.elements,c=a.name,s=a.email,d=a.phone,u=a.company,p=a.notes,m=a.twitter,f={id:Date.now(),name:c.value,email:s.value,phone:d.value,company:u.value,notes:p.value,twitter:m.value};console.log("Saving the following contact: "+JSON.stringify(f)),i.push(f),r.setItem("contacts",JSON.stringify(i)),document.getElementById("input_form").reset(),l(),o(),e.style.display="block"}),document.getElementById("cancel").addEventListener("click",function(t){t.preventDefault(),document.getElementById("input_form").reset(),o(),e.style.display="block"},!1)})}]);