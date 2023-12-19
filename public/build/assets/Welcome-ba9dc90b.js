import{o as t,e as r,b as h,u as e,a as u,c as s,w as a,F as l,f as c,p as m,Z as g,g as o,j as n}from"./app-921b1b55.js";const f={class:"relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"},p={key:0,class:"sm:fixed sm:top-0 sm:end-0 p-6 text-end z-10"},y=m('<div class="overflow-x-auto"><table class="table table-xs"><thead><tr><th></th><th>Name</th><th>Job</th><th>company</th><th>location</th><th>Last Login</th><th>Favorite Color</th></tr></thead><tbody><tr><th>1</th><td>Cy Ganderton</td><td>Quality Control Specialist</td><td>Littel, Schaden and Vandervort</td><td>Canada</td><td>12/16/2020</td><td>Blue</td></tr><tr><th>2</th><td>Hart Hagerty</td><td>Desktop Support Technician</td><td>Zemlak, Daniel and Leannon</td><td>United States</td><td>12/5/2020</td><td>Purple</td></tr><tr><th>3</th><td>Brice Swyre</td><td>Tax Accountant</td><td>Carroll Group</td><td>China</td><td>8/15/2020</td><td>Red</td></tr><tr><th>4</th><td>Marjy Ferencz</td><td>Office Assistant I</td><td>Rowe-Schoen</td><td>Russia</td><td>3/25/2021</td><td>Crimson</td></tr><tr><th>5</th><td>Yancy Tear</td><td>Community Outreach Specialist</td><td>Wyman-Ledner</td><td>Brazil</td><td>5/22/2020</td><td>Indigo</td></tr><tr><th>6</th><td>Irma Vasilik</td><td>Editor</td><td>Wiza, Bins and Emard</td><td>Venezuela</td><td>12/8/2020</td><td>Purple</td></tr><tr><th>7</th><td>Meghann Durtnal</td><td>Staff Accountant IV</td><td>Schuster-Schimmel</td><td>Philippines</td><td>2/17/2021</td><td>Yellow</td></tr><tr><th>8</th><td>Sammy Seston</td><td>Accountant I</td><td>O&#39;Hara, Welch and Keebler</td><td>Indonesia</td><td>5/23/2020</td><td>Crimson</td></tr><tr><th>9</th><td>Lesya Tinham</td><td>Safety Technician IV</td><td>Turner-Kuhlman</td><td>Philippines</td><td>2/21/2021</td><td>Maroon</td></tr><tr><th>10</th><td>Zaneta Tewkesbury</td><td>VP Marketing</td><td>Sauer LLC</td><td>Chad</td><td>6/23/2020</td><td>Green</td></tr><tr><th>11</th><td>Andy Tipple</td><td>Librarian</td><td>Hilpert Group</td><td>Poland</td><td>7/9/2020</td><td>Indigo</td></tr><tr><th>12</th><td>Sophi Biles</td><td>Recruiting Manager</td><td>Gutmann Inc</td><td>Indonesia</td><td>2/12/2021</td><td>Maroon</td></tr><tr><th>13</th><td>Florida Garces</td><td>Web Developer IV</td><td>Gaylord, Pacocha and Baumbach</td><td>Poland</td><td>5/31/2020</td><td>Purple</td></tr><tr><th>14</th><td>Maribeth Popping</td><td>Analyst Programmer</td><td>Deckow-Pouros</td><td>Portugal</td><td>4/27/2021</td><td>Aquamarine</td></tr><tr><th>15</th><td>Moritz Dryburgh</td><td>Dental Hygienist</td><td>Schiller, Cole and Hackett</td><td>Sri Lanka</td><td>8/8/2020</td><td>Crimson</td></tr><tr><th>16</th><td>Reid Semiras</td><td>Teacher</td><td>Sporer, Sipes and Rogahn</td><td>Poland</td><td>7/30/2020</td><td>Green</td></tr><tr><th>17</th><td>Alec Lethby</td><td>Teacher</td><td>Reichel, Glover and Hamill</td><td>China</td><td>2/28/2021</td><td>Khaki</td></tr><tr><th>18</th><td>Aland Wilber</td><td>Quality Control Specialist</td><td>Kshlerin, Rogahn and Swaniawski</td><td>Czech Republic</td><td>9/29/2020</td><td>Purple</td></tr><tr><th>19</th><td>Teddie Duerden</td><td>Staff Accountant III</td><td>Pouros, Ullrich and Windler</td><td>France</td><td>10/27/2020</td><td>Aquamarine</td></tr><tr><th>20</th><td>Lorelei Blackstone</td><td>Data Coordiator</td><td>Witting, Kutch and Greenfelder</td><td>Kazakhstan</td><td>6/3/2020</td><td>Red</td></tr></tbody><tfoot><tr><th></th><th>Name</th><th>Job</th><th>company</th><th>location</th><th>Last Login</th><th>Favorite Color</th></tr></tfoot></table></div>',1),S={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String},setup(i){return(d,b)=>(t(),r(l,null,[h(e(g),{title:"Welcome"}),u("div",f,[i.canLogin?(t(),r("div",p,[d.$page.props.auth.user?(t(),s(e(n),{key:0,href:d.route("dashboard"),class:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:a(()=>[o("Dashboard")]),_:1},8,["href"])):(t(),r(l,{key:1},[h(e(n),{href:d.route("login"),class:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:a(()=>[o("Log in")]),_:1},8,["href"]),i.canRegister?(t(),s(e(n),{key:0,href:d.route("register"),class:"ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:a(()=>[o("Register")]),_:1},8,["href"])):c("",!0)],64))])):c("",!0),y])],64))}};export{S as default};
