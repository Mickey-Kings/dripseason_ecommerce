// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("login.php", "Home", "SUPPORT  COMPANY  Copyright © 2022 BIT/2020/61220 Michael King'ori Wachira    Mount Kenya UniversityKiambu, Thika Phone  +254720651044 Email  info.dripseason@gmail.com  SHOPPER  Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer nec odio Praesent libero Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh elementum imperdiet Duis sagittis ipsum Praesent mauris Fusce nec tellus sed augue semper porta    ", "");
   this[database_length++] = new SearchPage("index.html", "Home", "NEW SWAG 2022  NEW SWAG 2022  NEW SWAG 2022  SUPPORT  COMPANY  Copyright © 2022 BIT/2020/61220 Michael King'ori Wachira    Limited time offer  New Collection 2022   Mount Kenya UniversityKiambu, Thika Phone  +254720651044 Email  info.dripseason@gmail.com  SHOPPER  Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer nec odio Praesent libero Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh elementum imperdiet Duis sagittis ipsum Praesent mauris Fusce nec tellus sed augue semper porta    ", "");
   this[database_length++] = new SearchPage("shirts.html", "Home", "SUPPORT  COMPANY  Copyright © 2022 BIT/2020/61220 Michael King'ori Wachira    Limited time offer  New Collection 2022   Mount Kenya UniversityKiambu, Thika Phone  +254720651044 Email  info.dripseason@gmail.com  SHOPPER  Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer nec odio Praesent libero Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh elementum imperdiet Duis sagittis ipsum Praesent mauris Fusce nec tellus sed augue semper porta    ", "");
   this[database_length++] = new SearchPage("shoes.html", "Home", "SUPPORT  COMPANY  Copyright © 2022 BIT/2020/61220 Michael King'ori Wachira    Limited time offer  New Collection 2022   Mount Kenya UniversityKiambu, Thika Phone  +254720651044 Email  info.dripseason@gmail.com  SHOPPER  Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer nec odio Praesent libero Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh elementum imperdiet Duis sagittis ipsum Praesent mauris Fusce nec tellus sed augue semper porta    ", "");
   this[database_length++] = new SearchPage("accessories.html", "Home", "SUPPORT  COMPANY  Copyright © 2022 BIT/2020/61220 Michael King'ori Wachira    Limited time offer  New Collection 2022   Mount Kenya UniversityKiambu, Thika Phone  +254720651044 Email  info.dripseason@gmail.com  SHOPPER  Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer nec odio Praesent libero Sed cursus ante dapibus diam Sed nisi Nulla quis sem at nibh elementum imperdiet Duis sagittis ipsum Praesent mauris Fusce nec tellus sed augue semper porta    ", "");
   return this;
}
