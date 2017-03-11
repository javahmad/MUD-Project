# MUD-Project
1. Download Aptana Studio 3, HeidiSQL, and WAMP Server (Also download Bootstrap)
2. When all files are downloaded, open Aptana and make a file (mmorts) in the "www" folder in "wamp64" (should be in your local disk C:)
3. Put all the files from here into that file you created
4. Open up WAMP and keep the server running
5. Open HeidiSQL; HeidiSQL requires Hostname/IP "localhost" and User "root"
6. Create a new database "mmorts" and put in the following Tables: configuration, inventory, map, profiles, and users
7. Each table has the following columns:
8. configuration: id(INT), name(VARCHAR), seperator(VARCHAR), description(VARCHAR), maintenance(INT), logo(VARCHAR)
9. inventory: id(INT), user_id(INT), name(VARCHAR), type(INT)
10. map: id(INT), user_id(INT), tile(DOUBLE)
11. profiles: id(INT), nickname(VARCHAR), picture(VARCHAR)
12. users: id(INT), username(VARCHAR), password(VARCHAR), email(VARCHAR)
13. Once the database is up, WAMP is running, and Aptana is up, put "localhost/mmorts" in the url and see if you can connect to the website
