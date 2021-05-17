# ChatRooms

A chat rooms app built with express, mongoose, express-session, and passport JS for the <a href='https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs/lessons/members-only'>Odin Project Curriculum</a>.

My directions for the project were to create a single paged chat room where the user's names were hidden from non authenticated users. I decided I wanted to go a bit further than that and create
something that allows logged in users to create their own rooms and decide whether they should be password protected or not.

Authenticated users can join and send messages in all public rooms or enter the password for private rooms and be added to a whitelist that allows them access to the room.

Web sockets are out of the scope of this project, but once I complete the Odin Project's Node course I plan on returning to this project to add them.

Live site: https://chat-rooms-odin.herokuapp.com/
